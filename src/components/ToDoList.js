
import React, { Component } from 'react'
//类型检查
import PropTypes from 'prop-types';

import ToDoLIstItem from './ToDoItem'

const ToDoList = (props)=> {

    return (
        <ul className= "toDoList">
            
          {
            props.toDoList.map(toDoList =>{
           
             {/* // return <li key={toDoList.id}>{toDoList.text} </li>*/}
             return (
                <ToDoLIstItem
              //   id= {toDoList.id} 
              //  className= "item"
              //展开toDoList
              {...toDoList}
               key={toDoList.id}
              //通过App中传过来的方法
              // onItemClick = {props.onItemClick}
               >
              </ToDoLIstItem>
              )
             
            })
          }
        </ul>
        )  
  }
  //进行数据测试
  ToDoList.prototype = {
      toDoList:PropTypes.arrayOf(PropTypes.shape({
          id:PropTypes.string.isRequired,
          text:PropTypes.string.isRequired
      })).isRequired
  }
  export default ToDoList;
