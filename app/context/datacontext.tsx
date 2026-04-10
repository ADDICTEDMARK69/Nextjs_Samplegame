"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";


//create context constructor



type User={

  username: string
  firstname: string
  lastname: string
  email: string
}

type ContextConstructor = {
  user: User
  updateUser: (field: keyof User, value: string) => void
}


const ContextObj = createContext<ContextConstructor | undefined>(undefined);

export function ContextProvider({children}:{children:ReactNode}){

    // const [username,setUsername]=useState<string>();
    // const [firstname,setFirstname]=useState<string>();
    // const [lastname,setLastname]=useState<string>();
    // const [useremail,setUseremail]=useState<string>();

    const [user, setUser] = useState<User>({
   username: "",
   firstname: "",
   lastname: "",
   email: ""
   })


   const updateUser = (field: keyof User, value: string) => {
  setUser(prev => ({
    ...prev,
    [field]: value
  }))
}

    

    return(
        <>

        <ContextObj.Provider value={{user,updateUser}}>
            {children}
        </ContextObj.Provider>
        
        </>
    )

}

export function InitiateContext(){

    const context =useContext(ContextObj);
    if(!context){
         throw new Error("InitiateContext must be used within ContextProvider");
    }
    return context;

}