import React from 'react'
import { AiFillCaretRight,AiFillCaretLeft } from "react-icons/ai";
export default class ButtonContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={stars:1};
    }
    rated=(star)=>{
        this.setState({stars:star});
        this.props.rate(star)
        
    }
   
  render() {
    return(
    <div class='button-container'>
         <AiFillCaretLeft onClick={this.props.previous} class='previous-button'></AiFillCaretLeft>
    
         <AiFillCaretRight onClick={this.props.refresh} class='next-button'></AiFillCaretRight>
        
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div class='star-rating'>
            <button  onClick={()=>this.rated(1)}class={this.props.rating>=1?"fa fa-star checked":"fa fa-star"}></button>
            <button  onClick={()=>this.rated(2)}class={this.props.rating>=2?"fa fa-star checked":"fa fa-star"}></button>
            <button  onClick={()=>this.rated(3)}class={this.props.rating>=3?"fa fa-star checked":"fa fa-star"}></button>
            <button  onClick={()=>this.rated(4)}class={this.props.rating>=4?"fa fa-star checked":"fa fa-star"}></button>
            <button  onClick={()=>this.rated(5)}class={this.props.rating>=5?"fa fa-star checked":"fa fa-star"}></button>
            
        </div>
    </div>)
  }
}
