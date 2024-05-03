const form = document.querySelector("form");   
form.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const content = form.content.value;
    const judul=document.querySelector("#blogTitle");
    const blogTitle=judul.innerText;
    try{
        const res = await fetch('/updateBlog',{
            method:'POST',
            body:JSON.stringify({blogTitle,content
            }),
            headers: {'Content-Type': 'application/json'}
        });
        const data = await res.json();
        if(data){
            location.assign('/posts')
        }
    }catch(err){
        console.log(err);
    }
})

