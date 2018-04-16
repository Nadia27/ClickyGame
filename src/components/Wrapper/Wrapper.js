import React from "react"; // get the React object from the react module
import  "./Wrapper.css"; // get wrapper css file


//props used to pass down data to into other components

const Wrapper = props =><div className="w3-container">{props.children}</div>

export default Wrapper; // expose the Wrapper component to other modules