'use client'
import { createContext, useContext, useState } from "react";

const DataContext= createContext()
const {Provider}= DataContext

const DataGet=({children})=>{
    const [mockArr,setMockArr]= useState([])

    return (
        <Provider value={{mockArr,setMockArr}}>
            {children}
        </Provider>
    )
}

const useData=()=>useContext(DataContext)

export {DataGet,useData}