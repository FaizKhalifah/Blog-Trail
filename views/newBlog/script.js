const form = document.querySelector('form');
form.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const blogTitle = form.blogTitle.value;
    const category = form.genre.value;
    const content = form.content.value;

    try{

    }catch(err){
        console.log(err);
        const res = await fetch('/register',{
            method:'POST',
            body:JSON.stringify({
                blogTitle,category,content
            }),
            headers: {'Content-Type': 'application/json'}
        });
    }
})