import React from "react";

function SocialItem(props){

    return(
        <li className="list-group-item">
            <img src={props.img}/>
        <input type= "checkbox" id="facbook"/>
        <label for="facebook"> {props.media}</label>
    </li>
    );
}
export default SocialItem