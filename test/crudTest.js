import userCrud from "../Utils/Crud/userCrud.js";

// await userCrud.addUser("faizganteng@yahoo.com","faizzz","111","sports");
const user = await userCrud.readOne("faizzz","111");
console.log(user);