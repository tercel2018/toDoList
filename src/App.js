import React, { Component } from 'react';
import axios from 'axios'

import './App.css';
import 'bulma/css/bulma.css';
import ToDoList from './components/ToDoList';
import SearchBox from './components/SearchBox';
import {Provider,Consumer }  from './context';

class App extends Component {
  //构造函数constructor   定义状态树，可通过state 和constructor两种方式定义
  constructor(){
    //g
    super();
    this.state ={
      inputValue : '',
      toDoList: [   ],
      isLoading:true
    }
  }

  componentDidMount(){
    axios.get('http://rap2api.taobao.org/app/mock/84644/api/v1')
    .then(resp=>{
      this.setState({
        toDoList:resp.data.data,
        isLoading:false
      })
    })
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
      isCompleterd:false,
      text
    });
    this.setState({
      //数据添加完重置为空
      inputValue:'',
      toDoList
    })
 
  }

  // 此方法会通过props一层一层传递下去，最终TODoList里会通过此方法，
  //并且会把点击的那item的id传回来
  onItemClick = (id) =>{
    //拷贝toDoList 数据
    const toDoList = [...this.state.toDoList]
    console.log(toDoList);
    const newToDoList = toDoList.map(item=>{
      //根据传过来的ID判断是否要修改isCompletred
      if(item.id ===id){
        item.isCompleterd = !item.isCompleterd
      }
      return item;
    })
    this.setState({
      toDoList:newToDoList
    })
  }



  render() {  
    return (
      this.state.isLoading
      ?
      <div>正在加载。。。</div>
      :
      //把Providr作为顶层组件，包住整个应用程序
      //Procider组件提供一个value 的prop，可以传递任何值
      <Provider value = {
        {
          toDoList:this.state.toDoList,
          onItemClick:this.onItemClick
        }
      }>
      <div className="App">
        <section className="hero is-dark">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                 css 库 bulma
              </h1>
              <h2 className="subtitle">
                 React
              </h2>
            </div>
          </div>
        </section>
   
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
          
            <ToDoList
              toDoList = {this.state.toDoList}
              // onItemClick = {this.onItemClick}
              console
            />
        </div>
      </div>
      </Provider>
    );
    
  }
}

export default App;
