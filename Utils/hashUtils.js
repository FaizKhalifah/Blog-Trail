import bcrypt from "bcrypt";

async function hashFunction(password){
    const salt = await bcrypt.genSalt();
    password = await bcrypt.hash(password,salt);
    return password;
}

export default hashFunction;