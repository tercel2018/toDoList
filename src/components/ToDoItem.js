import React, { Component } from 'react'
import PropTypes from 'prop-types';

import ToDoLIstItem from './ToDoList'


const ToDoList = (props)=> {

    return (
        <ul className= "toDoList">
            
          {
            props.toDoList.map(toDoList =>{
             {/* // return <li key={toDoList.id}>{toDoList.text} </li>*/}
              return (
                <ToDoLIstItem
                id= {toDoList.id} 
               className= "item"
               key={toDoList.id}
               >
              <span>{toDoList.text} </span> 
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

