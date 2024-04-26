import userCrud from "../Utils/Crud/userCrud.js";
import blogCrud from "../Utils/Crud/blogCrud.js";

async function fetchBlog(userName,password){
    const fetchedUser = await userCrud.readOne(userName,password);
    const userBlog = fetchedUser.blogs;
    console.log(userBlog);
    const fetchedBlog = await blogCrud.readOne(userBlog.title,userBlog.author);
    console.log(fetchedBlog);
    return;
}

await fetchBlog("AkuFaiz","111");

// await userCrud.addUser("faizganteng@yahoo.com","faizzz","111","sports");