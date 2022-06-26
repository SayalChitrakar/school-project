import React from 'react';
import "./../css/mainBody.css";
import mainImg from "./../img/mainImg/1x/main.jpg";
const MainBody = ()=>{


    return(
        <div className = "mainContainer ">
           <img className= "container" src = {mainImg}/>
        </div>
    )
}

export default MainBody;