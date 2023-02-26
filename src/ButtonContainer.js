import React from 'react'
import { AiFillCaretRight,AiFillCaretLeft } from "react-icons/ai";
import "./ButtonContainer.css";
export default class ButtonContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={stars:0,hovered:0};
    }
    rated=(star)=>{
        if(star==this.state.stars){
            this.setState({stars:0});
            this.props.rate(0)
        }
        else{
        this.setState({stars:star});
        this.props.rate(star)
    }
        
    }
   hovered =(star)=>{

    this.setState({hovered:star});
   }
  render() {
    return(
    <div class='button-container'>
         <AiFillCaretLeft onClick={this.props.previous} class='previous-button'></AiFillCaretLeft>
    
         
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div class='star-rating'>
            <button  onMouseEnter={()=>this.hovered(1)} onMouseLeave={()=>this.hovered(0)} onClick={()=>this.rated(1)}class={this.props.rating>=1|| this.state.hovered>=1?"fa fa-star checked":"fa fa-star"}></button>
            <button onMouseEnter={()=>this.hovered(2)} onMouseLeave={()=>this.hovered(0)} onClick={()=>this.rated(2)}class={this.props.rating>=2 || this.state.hovered>=2?"fa fa-star checked":"fa fa-star"}></button>
            <button onMouseEnter={()=>this.hovered(3)} onMouseLeave={()=>this.hovered(0)} onClick={()=>this.rated(3)}class={this.props.rating>=3|| this.state.hovered>=3?"fa fa-star checked":"fa fa-star"}></button>
            <button onMouseEnter={()=>this.hovered(4)} onMouseLeave={()=>this.hovered(0)} onClick={()=>this.rated(4)}class={this.props.rating>=4|| this.state.hovered>=4?"fa fa-star checked":"fa fa-star"}></button>
            <button onMouseEnter={()=>this.hovered(5)} onMouseLeave={()=>this.hovered(0)} onClick={()=>this.rated(5)}class={this.props.rating>=5|| this.state.hovered>=5?"fa fa-star checked":"fa fa-star"}></button>           
        </div>
        <AiFillCaretRight onClick={this.props.refresh} class='next-button'></AiFillCaretRight>
        
    </div>)
  }
}
