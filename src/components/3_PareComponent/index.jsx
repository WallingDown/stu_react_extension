import React, {  PureComponent } from 'react'

export default class Index extends PureComponent {
    state = {phone:{name:'OPPOr17'}}
    
    changePhone = () =>{
        this.setState({phone:{name:'板砖砸核桃'}})
    }
    
    render() {
        console.log('Parent-------')
        return (
            <div>
                <h1>我是Parent组件，我的手机：{this.state.phone.name}</h1>
                <button onClick={this.changePhone}>没钱了，换砖</button>
                <hr/>
                <Child name={this.state.phone.name}/>
            </div>
        )
    }
}

class Child extends PureComponent{
    render(){
        console.log('Child-----')
        return(
            <div>
                <h1>我是Child组件，{this.props.name}</h1>
            </div>
        )
    }
}
