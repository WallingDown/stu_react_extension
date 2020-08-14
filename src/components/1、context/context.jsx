import React, { Component, Children } from 'react'
import './index.css'

const PersonContext = React.createContext()
const {Provider} = PersonContext
export default class Demo extends Component {
    state = {name:"fei姐"}
    render() {
        return (
            <div className="demo" >
                <h1>我是Demo，名字是:{this.state.name}</h1>
                <Provider value={this.state.name}>
                    <Child/>
                </Provider>
            </div>
        )
    }
}

class Child extends Component{
    render(){
        return(
            <div className="child">
                <h1>我是子组件</h1>
                <Grand/>
                <Grand2/>
            </div>
        )
    }
}

class Grand extends Component{
   static contextType = PersonContext
    render(){
        return (
            <div className="grand">
                <h2>我是孙子组件，接收到的名字是:{this.context}</h2>
            </div>
        )
    }
}

function Grand2 (){
    const {Consumer} = PersonContext
    return (
        <div className="grand">
            <Consumer>
                {
                    (value)=>{
                        return <h2>我是函数组件，接收到的是:{value}</h2>
                    }
                }
            </Consumer>
        </div>
    )
}