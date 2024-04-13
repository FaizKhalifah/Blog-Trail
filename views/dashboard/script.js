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
        })

        const data = await res.json();
        const updatedData = data.updatedData;
        document.getElementById('userHeader').textContent = `${updatedData.username}`;
        document.getElementById('userEmail').textContent = `Email : ${updatedData.email}`;
        document.getElementById('userInterest').textContent = `Interest : ${updatedData.interest}`;

        
    }catch(err){
        console.log(err);
    }

   
})