import userCrud from "../Utils/Crud/userCrud.js";

// await userCrud.addUser("faizganteng@yahoo.com","faizzz","111","sports");
const fetched = await userCrud.addBlog("faizzz","111","blog1","sport","sadasdasdasd");
console.log(fetched);