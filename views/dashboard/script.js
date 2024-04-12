const form = document.querySelector("form");

form.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const email = form.email.value;
    const username = form.username.value;
    const password=form.password.value;
    const interest = form.interest.value;

    try{
        const res = await fetch('/editProfile',{
            method:'POST',
            body:JSON.stringify({
                email,username,password,interest
            }),
            headers: {'Content-Type': 'application/json'}
        });
        console.log(res);
    }catch(err){
        console.log(err);
    }
})