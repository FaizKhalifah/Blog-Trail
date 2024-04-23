const form = document.querySelector('form');
form.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const email = form.email.value; 
    const username = form.username.value;
    const password = form.password.value;
    const interest = form.interest.value;

    try{
        const res = await fetch('/register',{
            method:'POST',
            body:JSON.stringify({
                email,username,password,interest
            }),
            headers: {'Content-Type': 'application/json'}
        });
        const data = await res.json();
        localStorage.setItem('token', data.token);
        console.log(data);
        if(data.user){
            location.assign('/dashboard');
        }
    }catch(err){
        console.log(err);
    }
})