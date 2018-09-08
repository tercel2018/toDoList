import React, { Component } from 'react'
import {Consumer }  from '../context'
export default class ToDoItem extends Component {
  handClick= ()=>{
      this.props.onItemClick(this.props.id)
  }
  render() {
    return (
      //使用Consumer组件来接受Providr传递过来的value 
      <Consumer>        
        {/*方法中有一个参数 
        Consumer的children必须是一个方法，
        方法有一个参数，就是Provider传递过来的值
        */}
        {(onItemClick)=>{
             return this.props.isCompleterd
             ?
             <li
             onClick ={()=>{
              onItemClick.onItemClick(this.props.id)
             } }
             style= {{textDecoration:"line-through" ,color:"red"}}
             >
             {this.props.text}</li>
             :
             <li onClick ={()=>{
              onItemClick.onItemClick(this.props.id)
             } }> 
                   {this.props.text}
             </li>
      
        }}
      </Consumer>
    )
  }
}



