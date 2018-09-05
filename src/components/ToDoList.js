
import React from 'react'
//通过props进行传值
export default (props) => {
  return (
    console.log(props),
    <li >{props.children}{props.id} </li>
  )
}
