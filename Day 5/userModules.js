export const USER_DATA=[
    {
        id:1,
        name:"abi",
        age:20,
        mailid:"abi@gmail.com"
    }
]
export const addUser=(new_user)=>{
    USER_DATA.push(new_user)
}
export const editUser=(id,key,value)=>{
    const ind=USER_DATA.findIndex(i=>i.id===id);
    USER_DATA[ind][key]=value;
}
export const deleteUser=(id)=>{
    const ind=USER_DATA.findIndex(i=>i.id===id);
    delete USER_DATA[ind]
}
//Bulk Updating
export const editMultipleUser=(id=1,value={name:"raj",age:30})=>{
    const ind=USER_DATA.findIndex(i=>i.id===id);
    USER_DATA[ind]={...USER_DATA[ind],...value};
}
//export default addUser()
export default USER_DATA
