import { useEffect, useState } from "react";

function App(){
    const [counter,setValue] = useState(0)
    const [keyword,setKeyword] = useState("");
    const onClick () => setValue((prev) => prev + 1)
    const onChange (event) => setKeyword(event.target.value)
    useEffect(() => {
        console.log(" i run all time")
    },[])
    useEffect(() => {
        console.log(" i run when keyword change")
    },[keyword])
    useEffect(() => {
        console.log(" i run counter change")
    },[counter])
    return(
        <div>
            <input
                value = {keyword}
                onChange = {onChange}
                placehloder = "Search"/>
            <h1>{counter}</h1>
            <button onClick = {onClick}>click me</button>
        </div>
    )
}

import { useState , useEffect } from "react";

function Hello(){
    useEffect(()=>{
        console.log("i'm here")
        retrun () => console.log("destroyed :(")
    },[])
    return <h1>Hello</h1>
}

function App(){
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev)
    retrun(
        <div>
            {showing? <Hello />}
            <button onClick={onClick}>{showing ? "Hide":"Show"}</button>
        </div>
    )
}