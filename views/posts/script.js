const token = localStorage.getItem('token');

async function fetchData() {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/getBlog', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      const userBlog = data.userBlog;
      return userBlog;
    } catch (error) {
      console.error('Error:', error);
    }
  }

async function showBlog(){
  const posts = document.querySelector(".posts");
  const userBlog = await fetchData();
  if(userBlog.length==0){
    posts.append("Belum ada blog yang dipublish");
  }else{
    userBlog.forEach(blog=>{
      let blogDiv = document.createElement('div');
      let blogHeader = document.createElement('h2');
      blogHeader.textContent=blog.blogTitle;
      let blogAuthor = document.createElement('p');
      blogAuthor.textContent=blog.author;
      let blogCategory = document.createElement('p');
      blogCategory.textContent=blog.category;

      let buttons = document.createElement('div');
      buttons.classList.add('buttons')

      let readButton = document.createElement('button');
      readButton.textContent="Read";
      readButton.classList.add('button');
      let editButton = document.createElement('button');
      editButton.textContent="Edit";
      editButton.classList.add('button');
      let deleteButton = document.createElement('button');
      deleteButton.textContent="delete";
      deleteButton.classList.add('button')

      readButton.addEventListener('click',async function(){
        window.location.href = `/readBlog/${blog.blogTitle}-${blog.author}`;
      })

      buttons.appendChild(readButton);
      buttons.appendChild(editButton);
      buttons.appendChild(deleteButton);

      blogDiv.appendChild(blogHeader);
      blogDiv.appendChild(blogAuthor);
      blogDiv.appendChild(blogCategory);
      blogDiv.appendChild(buttons);
      posts.appendChild(blogDiv);
    })
  }
}




showBlog();

