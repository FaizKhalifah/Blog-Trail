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
        }).then(response=>{
            return response.json();
        }).then(data=>{
            document.getElementById('userHeader').textContent = `${user.username}`;
            document.getElementById('userEmail').textContent = `Email : ${user.email}`;
            document.getElementById('userInterest').textContent = `Interest : ${user.interest}`;
            document.getElementById('userBlogs').textContent = `Blogs : ${user.blogs}`;
        });
        console.log(res);
    }catch(err){
        console.log(err);
    }

   
})