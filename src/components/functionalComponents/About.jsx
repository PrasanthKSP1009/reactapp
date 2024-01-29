import { useEffect, useState } from "react";

const About = () =>{
    const [tabName,setTabName] = useState("posts")
    const updateTablet = () => {
        setTabName("posts")
    }
    const updateTablet1 = () => {
        setTabName("posts")
    }
    const updateTablet2 = () => {
        setTabName("posts")
    }
    useEffect(() => {
        console.log("Hello")
    });
    return(
        <div>
            <h1>{tabName}</h1>
            <button onClick={updateTablet}>Click me if you get cold</button>
            <button onClick={updateTablet1}>Click me if you get fever</button>
            <button onClick={updateTablet2}>Click me if you get epilepsy</button>
        </div>
    )
}
export default About;