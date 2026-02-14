import react from "react";

import globeimg from "../assets/globe.png";
function Header() { 
  return (
   <header>
        <div className = "container">
        {/* <img src = "globe.png" alt= "globe-img"/> */}
        <img src = {globeimg} alt= "globe-img"/>
        <p>my traveling journal</p>
        </div>
       
  
</header>)
}
    export default Header 