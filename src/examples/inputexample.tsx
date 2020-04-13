import * as React from 'react'
import Input from '../components/Input/input'
import Icon from '../components/Icon/icon'
interface InputState {
    value: any
}
export default class InputExample extends React.Component<null, InputState> {
    constructor(props: any) {
        super(props)
        this.state = {
            value: 0
        }
    }
    handleChange = (e: any) => {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        return <div className='button-example'>
            <section>
                <h1>Input 输入框</h1>
                <p className="text">用于输入内容的基础表单组件。</p>
            </section>
            <section>
                <h2>何时使用</h2>
                <p className="text">需要用户输入内容时。</p>
            </section>
            <section>
                <h2>代码示例</h2>
            </section>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <Input placeholder="abc" append="arrow"></Input>
                    <Input placeholder="abc" prepend="arrow"></Input>
                    <Input type='password' ></Input>
                    <Input disable placeholder="123"></Input>
                    <Input value={this.state.value} icon="arrow" placeholder="input with icon" onChange={this.handleChange}></Input>
                    <Input prepend={<Icon name="arrow"></Icon>} placeholder="input with icon"></Input>
                </div>
                <div className="code-example-box">
                    <div className="code-title">水平导航</div>
                    <div className="code-description">水平的顶部导航菜单。</div>
                </div>
            </div>
        </div>
    }
}