const form = document.querySelector("form");

   

form.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const content = form.content.value;
    const blogTitle=document.querySelector("#blogTitle");
    const category = document.querySelector("#category");
    const judul=blogTitle.innerText;
    try{
        const res = await fetch('/editBlog',{
            method:'POST',
            body:JSON.stringify({judul,content
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

