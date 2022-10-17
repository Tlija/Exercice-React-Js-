import React from "react";
function Header(){
   
   const client ="Design";
   const title={
    designer:"Desigin",
    programmer:"Programming"
   }
   const info ={

    name:"Tlijani",
    nick:"Hachem "
   }
//    if (client === "Design"){
//     title ="Design  is my life.";

//    }else{
//     title='Programmer is my life.';
//    }
    return(
        <div className="navbar bg-dark rounded">
            Hello { `${info.name} ${info.nick}`}
        <h1 className=" text-white" > { client == "Design"? title.designer :title.programmer
} is my life.
  </h1>
        </div>
    );
}
export default Header;