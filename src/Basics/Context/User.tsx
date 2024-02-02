import { useState } from "react";
type Authuser={
    name:string
    email:string
}
export const User=(props:Authuser)=>{
    const [user,setUser]=useState<Authuser|null>(null)
    const handellogin=()=>{
        setUser({
            name:'Admin',
            email:'admin@amad'
        })
    }
    const handellogout=()=>{
        setUser(null)
    }
    return (
        <div>
            <button onClick={handellogin}>Login</button>
            <button onClick={handellogout}>Logout</button>
            <div>Username is {user?.name}</div>
            <div>Email is {user?.email} </div>
        </div>
    )
}