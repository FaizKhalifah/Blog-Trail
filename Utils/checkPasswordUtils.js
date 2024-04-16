import bcrypt from "bcrypt";

async function checkPassword(password,realPassword){
    const check = bcrypt.compare(password,realPassword);
    if(check){
        return true;
    }else{
        return false;
    }
}

export default checkPassword;