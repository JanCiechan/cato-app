import React, { useRef } from 'react'
import { useState, useEffect } from 'react';
import './App.css';
import ButtonContainer from './ButtonContainer';

export default class CuteCatContainer extends React.Component {
    
    constructor(props){
        super(props);
        //this.state={url:"https://cdn2.thecatapi.com/images/8aq.jpg"}
        this.state={current:0,cats:[{url:"https://cdn2.thecatapi.com/images/8aq.jpg",rating:1}]}
        this.childRef=React.createRef();
    }
    next=async()=>{
        
        if(this.state.current+1>=this.state.cats.length){
         
        await fetch('https://api.thecatapi.com/v1/images/search').then(response => response.json())
        .then((data) => this.setState({current:this.current,cats: [...this.state.cats, { url: data[0].url, rating: 1 }]
          }))
    
    }
    this.setState({current:this.state.current+1});
    
}
    
    
    previous=()=>{
        if(this.state.current>0){
            this.setState({current:this.state.current-1});
        }

        
    }    
    updateRating=(rate)=>{
        this.state.cats[this.state.current].rating=rate
        this.forceUpdate();
        this.childRef.rated(rate)
    }

    render(){
    return (
        <div>
            <img class='cat-image' alt='slodki kotek' src={this.state.cats[this.state.current].url} ></img>
            <ButtonContainer ref={this.childRef} refresh={this.next} previous={this.previous} rating={this.state.cats[this.state.current].rating} rate={this.updateRating}/>
           
        </div>
     )
    }
}
