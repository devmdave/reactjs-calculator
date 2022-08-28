import React from "react";

export default function Navbar(props) {
  return (
    <>
    <h1 className="display-4 my-4 mx-3">{props.title}</h1>
    <p className="mx-4 text-primary">{props.details}</p>
    </>
    
    
  );
}


