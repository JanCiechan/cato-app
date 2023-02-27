import React from 'react'
import { AiFillCaretRight,AiFillCaretLeft } from "react-icons/ai";
import "./ButtonContainer.css";
import { useState, useEffect } from 'react';
export default function ButtonContainer({previous,refresh,rate,rating}) {
    const [stars, setStars] = useState(rating);
    const [hovered,setHovered]=useState(0);
    
    function rated(star){
        
        if(star==stars){
            
            rate(0);
            setStars(0);
            
        }
        else{
            rate(star)
            setStars(star);
        
    }
    
}
 

    
    
    return(
    <div class='button-container' key={rating}>
         <AiFillCaretLeft onClick={()=>previous()} class='previous-button'></AiFillCaretLeft>
    
         
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div class='star-rating'>
            <button  onMouseEnter={()=>setHovered(1)} onMouseLeave={()=>setHovered(0)} onClick={()=>rated(1)}class={rating>=1|| hovered>=1?"fa fa-star checked":"fa fa-star"}></button>
            <button onMouseEnter={()=>setHovered(2)} onMouseLeave={()=>setHovered(0)} onClick={()=>rated(2)}class={rating>=2 || hovered>=2?"fa fa-star checked":"fa fa-star"}></button>
            <button onMouseEnter={()=>setHovered(3)} onMouseLeave={()=>setHovered(0)} onClick={()=>rated(3)}class={rating>=3|| hovered>=3?"fa fa-star checked":"fa fa-star"}></button>
            <button onMouseEnter={()=>setHovered(4)} onMouseLeave={()=>setHovered(0)} onClick={()=>rated(4)}class={rating>=4|| hovered>=4?"fa fa-star checked":"fa fa-star"}></button>
            <button onMouseEnter={()=>setHovered(5)} onMouseLeave={()=>setHovered(0)} onClick={()=>rated(5)}class={rating>=5|| hovered>=5?"fa fa-star checked":"fa fa-star"}></button>           
        </div>
        <AiFillCaretRight onClick={()=>refresh()} class='next-button'></AiFillCaretRight>
        
    </div>)
  
}
