import React, { Component,createRef } from 'react'
import PropTypes from 'prop-types';

export default class SearchBox extends Component {
    //设置默认值 外面的优先级高 不是必须参数，都有第一个默认值
    static defaultProps = {
        buttonText: "搜索"
    }
    //类型检查，首字母小写
    //相当于SeatchBox.propTypes ={}
    static propTypes = {
        buttonText: PropTypes.string,
        // 第一个参数是类型，第二个参数是一个方法
        onSearch: PropTypes.func.isRequired
    }
    constructor() {
        super();
        // 获取文本框中的value值
        //初始化一个内部状态，因为这状态不需要每次传到父组件，
        //所以使用内部的状态
        this.state = {
            inputValue: ""
        }
        this.inputDom = createRef()
        // console.log(this.inputDom)
    }
    //内部方法 监听文本框的内容
    handleInputChange = (e) => {
        //每次改变获取value值
        this.setState({
            inputValue: e.target.value
        })
    }
    //内部方法，用于点击按钮
    handAddClick = () => {
        //this.state 中的value 值传出去
        //按钮点击之后，就调用props 里的onSearch方法，
        //并且把当前组件的某一个值作为参数传递到父组件
        this.props.onSearch(this.state.inputValue)
        //文本框重置为空
        this.setState({
            inputValue: ""
        }, ()=>{
            //自动获取焦点
            this.inputDom.current.focus();
        })
       
    }
    componentWillMount() {
        // console.log("willmount")
    }
    componentDidMount() {
        // console.log("DidMount")
        this.inputDom.current.focus()
    }
    componentDidUpdate() {
        // console.log("DidUpdate")
    }
    componentWillUpdate() {
        // console.log("willUpdate")
    }
    render() {
        const {
            buttonText,
            onSearch
        } = this.props;
        console.log(this.props)
        return (
            <div>
                <div className="field has-addons searchbox"
                    style={{ display: "flex", justifyContent: "center" }}>
                    <div className="control">
                        <input
                            ref = {this.inputDom}
                            className="input"
                            value={this.state.inputValue}
                            onChange={this.handleInputChange}
                            type="text"
                        />
                    </div>
                    <div className="control">
                        <a onClick={this.handAddClick} className="button is-info">
                            {buttonText}
                        </a>
                    </div>
                </div>
            </div>


        )
    }
}
