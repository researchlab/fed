import React, { Component, Fragment } from 'react';
import TodoItem from './todoitem';
import Test from './Test';
import axios from 'axios';

import './style.css';

class TodoList extends Component {
    // 2.定义数据
    constructor(props) {
        super(props);
        // react 将数据定义在状态中; 
        // 当组件的state或者props发送改变时, render函数就会重新执行; 
        this.state = {
            inputValue: '',
            list: []
        }
        // 优化
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }
    render() {
        return (
            // JXS 要求 所有元素要包含在一个根元素中, 一般情况下会在最外层包一个<div></div>
            // 但是div 会显示在html中，可能会影响布局(如display:flex)， 如果不想在html中显示这个div， 则可以使用
            // React16 提供的占位符 Fragment
            //1.Fragment 占位符  可以将最外层的标签隐藏;
            < Fragment >
                <div>
                    {/*label中需要使用htmlFor*/}
                    <label htmlFor="content">输入内容</label>
                    <input
                        id="content"
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        ref={(input)=>{this.input = input}} // 这里的this.input 就指向了当前input这个dom元素， 那么上面引用的handleInputChange函数中要操作这个dom元素即可用this.input来操作了
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul ref={(ul) => {this.ul = ul}}> {/*ref使用*/}
                    {this.getTodoItem()}
                </ul>
                <Test content = {this.state.inputValue}/>
            </Fragment >
        );
    }

    componentDidMount(){
        axios.get('/api/todolist')
        .then((res)=>{
            console.log(res);
            // this.setState(()=>{
            //     return {
            //         list:res.data 
            //     }
            // });
            // 优化
            this.setState(()=>({
                list:[...res.data]
            }));
        })
        .catch(()=>console.log('error'));
    }

    // 优化4 
    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <div key={index}>
                    {/* {父组件向子组件传值, content={item}, 子组件通过 this.props.content 来引用这个值} */}
                    <TodoItem
                        content={item}
                        index={index}
                        // 强制绑定父组件的this;
                        deleteItem={this.handleItemDelete}
                    />
                    {/*<li
                        key={index}  //bind(this, paramets...) 4.传递参数
                        onClick={this.handleItemDelete.bind(this, index)}
                        dangerouslySetInnerHTML={{__html: item}} // 这么写的话， 输入           <h1>hello</h1> 会不转义 直接显示大写的hello了; 这个不推荐 除非非要不可;
                        >
                        //{item}
                        </li>*/
                    }
                </div>
            )
        })
    }
    // handleInputChange(e) {
    handleInputChange() { // 上面用ref 这个属性后，这个就不用变量e了
        // 3.改变数据， 必须调用this.setState({}) 来修改数据; 


        // this.setState({
        //     inputValue: e.target.value,
        // })
        // 优化1
        // this.setState(() =>{
        //     return {
        //         inputValue: e.target.value 
        //     }
        // })
        //优化2
        // const value = e.target.value;
        const value = this.input.value; // 因为上面用了ref属性，这里可以直接用this.input 来操作 上面的input这个dom元素;
        // 但是不推荐使用这个ref属性; 
        this.setState(() => ({
            inputValue: value
        }))

    }

    handleBtnClick() {

        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: '',
        // })
        //优化

        // this.setState(() => ({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: '',
        // }))
        //优化
        // setState 可以接收一个prevState 参数 等价于 this.state
        // 这样可以更好的防止用户直接修改this.state 变量; 
        // setState 是一个异步函数;
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: '',
        }),()=>{
            console.log(this.ul.querySelectorAll('div').length);
        }); //2.setSate 提供了第二个参数 当第一个异步函数执行完成后，才执行第二个函数;
        // 1.因为setState 是异步函数，所以这里获取的div长度是少一个;
        // console.log(this.ul.querySelectorAll('div').length);
    }
    handleItemDelete(index) {
        // 7.immutable 
        // state 不允许直接被做任何改变; 
        // 所以 不能直接 this.state.list.splice(index,1); 这么写虽然也可以删除指定值，但是会影响性能优化， 也不推荐使用; 
        // const list = [...this.state.list];  // 5.展开数据并生成一个新数组; 
        // list.splice(index, 1);  //6.删除指定下标的数组; 
        // this.setState({
        //     list: list,
        // })
        // 优化   带return的函数体{return}
        this.setState(() => {
            const list = [...this.state.list];
            list.splice(index, 1);
            // es6中 {list:list} 与{list} 等价;
            return {list}
        })

    }
}

export default TodoList;