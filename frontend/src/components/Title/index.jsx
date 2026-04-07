import React from "react";
import './index.css';


const Title = ({text1, text2}) =>{
    return(
        <div>
            
            <h2 className="latest-headings"> {text1} <span> {text2} </span> </h2>
            
        </div>
    )
}

export default Title;