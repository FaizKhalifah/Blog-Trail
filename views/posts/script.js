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
  console.log(posts);
  console.log(userBlog);
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
      let readButton = document.createElement('button');
      readButton.textContent="Read";
      readButton.classList.add('read-more-button');

      readButton.addEventListener('click',async function(){
        try {
          // Lakukan permintaan Fetch API
          const response = await fetch('/readBlog', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  title: blog.blogTitle,
                  author: blog.author,
                  category: blog.category,
                  content: blog.content
              })
          });
          const data = await response.json();
          console.log(data);
          if(data.blog){
            location.assign('/readBlog');
          }
      } catch (error) {
          console.error('Error:', error);
      }
      })

      blogDiv.appendChild(blogHeader);
      blogDiv.appendChild(blogAuthor);
      blogDiv.appendChild(blogCategory);
      blogDiv.appendChild(readButton);
      posts.appendChild(blogDiv);
    })
  }
}




showBlog();

