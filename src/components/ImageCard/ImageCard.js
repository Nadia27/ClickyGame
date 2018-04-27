import React from "react";
import "./ImageCard.css";

//Cards to hold clickable images
const ImageCard = props => ( 
    <div className = "card" value = {props.id} onClick = { () => props.handleClick(props.id)}>
    <div className = "img-container" >
    <img alt = {props.name} src = {props.image}/>
     </div> 
     </div>
);

export default ImageCard;