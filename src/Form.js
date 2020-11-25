import React from 'react';
import Opening from './Opening';
import PersonalDetails from './PersonalDetails';
import Discount from './Discount';
import Summary from './Summary';

export default class Form extends React.Component {
  constructor(props){
    super(props);
    this.state={
      stage:0,
      name:"",
      surname:"",
      discount:""
    };
    this.pages=[
      ()=><Opening onNext={this.next.bind(this)} />,
      ()=><PersonalDetails name={this.state.name} onNameChange={this.handleChange("name")} 
      surname={this.state.surname} onSurnameChange={this.handleChange("surname")} onNext={this.next.bind(this)} />,
      ()=><Discount onNext={this.next.bind(this)} />,
      ()=><Summary name={this.state.name} surname={this.state.surname} discount={this.state.discount}/>
    ]
  }
  handleChange(key){
    return (event)=>{
      this.setState(state=>({...state, [key] : event.target.value}))
    }
  }
  next(){
    this.setState(state=>(
      state.stage+1<this.pages.length ?
      {...state, stage:state.stage+1}
      : state
    ))
  }
  render(){
    return (
      <div>
        {this.pages[this.state.stage]()}
      </div>
    )
  }
}