//从react引入reacteContext方法
import {createContext} from 'react'
//执行reacteContext方法，并且把结果里的Provider和Consumer取出来
const {Provider,Consumer} = createContext()
//到出组件方便使用
export {Provider,Consumer}