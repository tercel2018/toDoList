import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoItem from './components/ToDoList'
import SearchBox from './components/SearchBox'
import ToDoList  from './components/ToDoItem'

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

  // onAdd = (text) =>{
  //   const toDoList = this.state.toDoList.slice();
  //   toDoList.push({
  //     id:Math.random().toString(),
  //     text
  //   });
  //   this.setState({
  //     //数据添加完重置为空
  //     inputValue:'',
  //     toDoList
  //   })  
  // }
  //text接受handAddClick方法的值
  handleAdd =(text) =>{
    console.log(text);
    //slice是空值时可以复制数组
    const toDoList = this.state.toDoList.slice();
    toDoList.push({
      id:Math.random().toString(),
      text
    });
    this.setState({
      //数据添加完重置为空
      inputValue:'',
      toDoList
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <SearchBox
        // 调用组件的方法时改变按钮的文字，传prop ->buttonText
        //点击组件按钮的时候，调用当前组件的方法，
        //传了一个方法到props中
          buttonText= "添加"
          // 是SearchBoox 中handAddClick方法的引用
          onSearch = {this.handleAdd}
        />
        <div > 
            {/* <input 
            value = {this.state.inputValue}
            // input都有一个onChange属性
            onChange = {this.handleInputChange}
            type="text"/> 
            <button 3333333333333333333333333= {this.handleAddClick}>添加</button>
            <ul className= "toDoList"> */}
            
            {/* 父组件向子组件传参数 ，通过props */}
              {
                // this.state.toDoList.map(toDoList =>{
                //  {/* // return <li key={toDoList.id}>{toDoList.text} </li>*/}
                //   return <ToDoItem id= {toDoList.id} 
                //   className= "item"
                //   key={toDoList.id}>
                //  <span>{toDoList.text} </span> </ToDoItem>
                // })
              }
            {/* </ul> */}
            <ToDoList
              toDoList = {this.state.toDoList}
            />
        </div>
      </div>

    );
  }
}

export default App;
