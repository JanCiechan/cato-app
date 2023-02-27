
import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import ButtonContainer from './ButtonContainer';
import "./CuteCatContainer.css"
import { changeRate, addCat} from "./../catSlice"
export default function CuteCatContainer() {
    const dispatch=useDispatch();
    const [current, setCurrent] = useState(0);
    //we have redux store added so we could load data from store here
    
    const storeCats = useSelector((state) => state?.cat?.cats)
    
    async function next(){        
        
        if(current+1>=storeCats.length){    
         await  fetch('https://api.thecatapi.com/v1/images/search').then(response => response.json())
        .then((data) => dispatch(addCat({ url: data[0].url, rating: 0 })))
    }
    
    setCurrent(current+1)
  
}   
    function previous(){
        if(current>0){
            setCurrent(current-1);
        }
        
        
    }    
    function updateRating(rate){
        dispatch(changeRate({current:current,rating:rate}))   
    }

    
    return (
        <div class='cat-container'>
            <img class='cat-image' alt='slodki kotek' src={storeCats[current].url} ></img>
            <ButtonContainer refresh={next} previous={previous} rating={storeCats[current].rating} rate={updateRating}/>
           
        </div>
     )
    
}
