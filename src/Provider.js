import packageContext from "./context";
import { useState } from "react";
const Provider=(props)=>{
    let [cricketer,setCricketer]=useState({
        name:"Sachin Tendulkar",
        age:47,
        country:"India",
        highestScore:248
    })

 return (
    <packageContext.Provider value={{
        data:cricketer,
        updateAge:(newAge)=>setCricketer({...cricketer,age:newAge})
    }}>
        {props.children}
        </packageContext.Provider>
 )
}
export default Provider;