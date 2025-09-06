export const fetchUserById = async (userId) => {
    await new Promise((r)=>setTimeout(r,500))
    const users = {
        1:{id:1,name:"Fert",age:25},
        2:{id:2,name:"John",age:30}
    }
    return users[userId];
}