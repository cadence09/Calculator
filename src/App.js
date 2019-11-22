import React,{Component}from 'react';
import './App.css';
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearBtn";

class App extends Component {
    constructor(props){
        super(props);
        
        this.state={
            input:"",
            previousNum:"",
            currentNum:"",
            operator:""
        };
    }
    addToInput = val =>{
        this.setState({input:this.state.input + val});
    };
addZero = val =>{
    if(this.state.input !== ""){
        this.setState({input:this.state.input + val});
    }
};
addDec=val=>{
    if (this.state.input.indexOf(".") ===-1){
        this.setState({input:this.state.input + val});
    }
};
clearInput =() =>{
    this.setState({input: ""});
};
add =() =>{
    this.state.previousNum = this.state.input;
    this.setState({input: ""});
    this.state.operator="plus";
};
equal=()=>{
    this.state.currentNum = this.state.input;
    if(this.state.operator =="plus"){
        this.setState({
            input:parseInt(this.state.previousNum) + parseInt(this.state.currentNum)
        });
    }else if(this.state.operator =="subtract"){
        this.setState({
            input:parseInt(this.state.previousNum) - parseInt(this.state.currentNum)
        });
    }else if(this.state.operator =="multiply"){
        this.setState({
            input:parseInt(this.state.previousNum) * parseInt(this.state.currentNum)
        });
    }else if(this.state.operator =="divide"){
        this.setState({
            input:parseInt(this.state.previousNum) / parseInt(this.state.currentNum)
        });
    }
};

subtract =() =>{
     this.state.previousNum = this.state.input;
    this.setState({input: ""});
    this.state.operator="subtract";
};
multiply =()=>{
     this.state.previousNum = this.state.input;
    this.setState({input: ""});
    this.state.operator="multiply";
};
divide =()=>{
     this.state.previousNum = this.state.input;
    this.setState({input: ""});
    this.state.operator="divide";
};
    render(){
  return (
    <div className="App">
      <div className="calc-wrapper">
      <div className="row">
         <Input>{this.state.input}</Input>
      </div>
        <div className="row">
          <Button handleClick={this.addToInput}>7</Button>
          <Button handleClick={this.addToInput}>8</Button>
          <Button handleClick={this.addToInput}>9</Button>
          <Button handleClick={this.divide}>/</Button>
          
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>4</Button>
          <Button handleClick={this.addToInput}>5</Button>
          <Button handleClick={this.addToInput}>6</Button>
          <Button handleClick={this.multiply}>*</Button>
          
        </div>
       <div className="row">
          <Button handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>3</Button>
          <Button handleClick={this.add}>+</Button>
          
        </div>
      <div className="row">
          <Button handleClick={this.addDec}>.</Button>
          <Button handleClick={this.addZero}>0</Button>
          <Button handleClick={this.equal}>=</Button>
          <Button handleClick={this.subtract}>-</Button>
          
        </div>
      <div className="row">
        <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
      </div>
      </div>
    </div>
  );
    }
}

export default App;
