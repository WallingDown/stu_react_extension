import React from 'react'
import ReactDOM from 'react-dom'

export default function Demo() {
    // 设置状态
    const [count,setCount] = React.useState(0)
    // 获取ref
    const myRef = React.useRef()

    //
    React.useEffect(()=>{
      let timer = setInterval(()=>{
            setCount((count)=>count+1)
        },1000)
        return()=>{
            clearInterval(timer)
        }
    },[]) //传一个空[]，当做 componentDidMount 用
    // 加1
    function add (){
        setCount((count)=>count+1)
    }

    // 展示文本框内容
    function show (){
        alert(myRef.current.value)
        // 清空文本框
        myRef.current.value = ''
    }

    // 卸载
    function death (){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    } 

    return (
        <div>
            <h1>传递过来的消息是：{count}</h1>
            <h1>当前求和的值为:{count}</h1>
            <button onClick={add}>加1</button>
            <hr/>
            <input type="text" placeholder="输入一些数据:" ref={myRef}/>
            <button onClick={show}>点我显示输入的内容</button>
            <button onClick={death}>卸载组件</button>
        </div>
    )
}
