const info=require("./a1.json");

const key1="course",key2="dept",key3="dname";
console.log(info[key1][key2][key3]);

const key=["name","age","address","pincode","college","place","course"]
for(let i=0;i<key.length;i++){
    console.log(info[key[i]])
}

const key=Object.keys(info);
for(let i in key){
    console.log(info[key[i]]);
}
function fun(key){
  let dkey=Object.keys(key);
  for(let i in dkey){
    if(typeof(key[dkey[i]])==="object"){
        fun(key[dkey[i]]);
    }else{
        console.log(dkey[i],":",key[dkey[i]]);
    }
}
}
fun(info)
