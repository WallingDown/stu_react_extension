import React, { Component } from 'react'
import './index.css'

const PersonContext = React.createContext()
const {Provider} = PersonContext

export default class Parent extends Component {
    state = {name:'小白'}
    render() {
        return (
            <div className="parent"> 
                <h1>我是Parent组件，名字是：{this.state.name}</h1>
                <Provider value={this.state.name}>
                    <Child/>
                </Provider>
            </div>
        )
    }
}

class Child extends Component {
    render() {
        return (
            <div className="child"> 
                <h1>Child组件</h1>
                <Grand1/>
                <Grand2/>        
            </div>
        )
    }
}

class Grand1 extends Component {
    static contextType = PersonContext
    render() {
        return (
            <div className="grand"> 
                <h1>我是Grand组件，接收到的名字是：{this.context}</h1>
            </div>
        )
    }
}

function Grand2(){
    const {Consumer} = PersonContext
    return (
        <div className="grand">
            <Consumer>
                {
                    (value)=>{
                    return <h1>我是grand2组件，{value}</h1>
                    }
                }
            </Consumer>
        </div>
    )
}