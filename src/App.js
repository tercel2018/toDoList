import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  //构造函数constructor
  constructor(){
    super();
    this.state ={
      inputValue : '',
      toDoList: [{
        id:Math.random().toString(),
        text:'写代码'
      },{
        id:Math.random().toString(),
        text:"睡觉"
      }]
    }
  }
  handleAddClick =() =>{
    //slice是空值时可以复制数组
    const toDoList = this.state.toDoList.slice();
    console.log(toDoList);
    toDoList.push({
      id:Math.random().toString(),
      text:this.state.inputValue
    });
    this.setState({
      //数据添加完重置为空
      inputValue:'',
      toDoList
    })

  }
  handleInputChange =(e)=>{
    //每次改变获取value值
    this.setState({
      inputValue:e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className= "searchBox"> 
            <input 
            value = {this.state.inputValue}
            // input都有一个onChange属性
            onChange = {this.handleInputChange}
            type="text"/> 
            <button onClick= {this.handleAddClick}>添加</button>
            <ul className= "toDoList">
              {
                this.state.toDoList.map(toDoList =>{
                  return <li key={toDoList.id}>{toDoList.text} </li>
                })
              }
            </ul>
        </div>
      </div>
    );
  }
}

export default App;
