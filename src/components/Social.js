import React from "react";
import SocialItem from "./SocialItem";

function Social(){
    return(
        <ul className="list-group" >

            <SocialItem 
            media ='facbook'
            img='https://picsum.photos/50'
            
            />
            <SocialItem 
            media ='youtub'
            img='https://picsum.photos/51'
            />
            <SocialItem
             media ='instagram'
             img='https://picsum.photos/52'
             />
             <SocialItem
             media ='likndin'
             img='https://picsum.photos/54'
             />
      </ul>

    );
}
export default Social;