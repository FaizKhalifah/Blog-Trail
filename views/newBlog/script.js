const form = document.querySelector('form');
form.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const blogTitle = form.blogTitle.value;
    const category = form.genre.value;
    const content = form.content.value;

    try{
        const res = await fetch('/addBlog',{
            method:'POST',
            body:JSON.stringify({
                blogTitle,category,content
            }),
            headers: {'Content-Type': 'application/json'}
        });
        const data = await res.json();
        if(data.user){
            location.assign('/posts')
        }
    }catch(err){
        console.log(err);
       
    }
})