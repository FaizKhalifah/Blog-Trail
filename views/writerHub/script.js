async function fetchData(){
    try{
        const token = localStorage.getItem('token');
        const response = await fetch('/getAllBlog', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          if (!response.ok) {
            throw new Error('Failed to fetch user data');
          }
          const blogs = await response.json();
          console.log(blogs.blogs);
          return blogs.blogs;
    }catch(err){
        console.log(err);
    }
}

async function showBlog(){
    const blogSection = document.querySelector(".blogSection");
    const blogs = await fetchData();
    if(blogs.length==0){
        blogSection.append("Maaf, saat ini tidak ada blog yang dipublish, kamu boleh mencoba membuat blog baru");
      }
    else{
        blogs.forEach(blog=>{
            let blogDiv = document.createElement('div');
            let blogHeader = document.createElement('h2');
            blogHeader.textContent=blog.title;
            let blogAuthor = document.createElement('p');
            blogAuthor.textContent=blog.author;
            let blogCategory = document.createElement('p');
            blogCategory.textContent=blog.category;
            let readButton = document.createElement('button');
            readButton.textContent="Read";
            readButton.classList.add('button');
            
            blogDiv.appendChild(blogHeader);
            blogDiv.appendChild(blogAuthor);
            blogDiv.appendChild(blogCategory);
            blogDiv.appendChild(readButton);
            blogSection.appendChild(blogDiv);           
        })
    }
}
showBlog();

