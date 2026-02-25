import { useState } from "react";

export default function LikeButton(){
    
    let [isLiked,setIsLiked] = useState(false);
    let [count,setCount] = useState(0);
    let toggleLike =() => {
        setIsLiked(!isLiked);
        setCount(count+1);
    }
    
    let styles ={
        color : "red",
    };
    return(
        <div>
            <h3>{count}</h3>
            
        <p onClick={toggleLike}> 
            {isLiked ? (
            <i class="fa-solid fa-heart" style={styles}></i>) : 
            (<i class="fa-regular fa-heart"></i>

            )} 
          
        </p>
        </div>
    );
}