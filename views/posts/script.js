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
  }
}

showBlog();

