import * as React from 'react'
import { Input, Icon } from '../components'
import Highlight from 'react-highlight'
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
                    <Input placeholder="placeholder"></Input>
                </div>
                <div className="code-example-box">
                    <div className="code-title">基本使用</div>
                    <div className="code-description">基本使用添加 placeholder</div>
                    <div className="code-example">
                        <Highlight>
                            {"<Input placeholder='placeholder'></Input>"}
                        </Highlight>
                    </div>
                </div>
            </div>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <Input placeholder="your site" prepend="Http://" append=".com"></Input>
                </div>
                <div className="code-example-box">
                    <div className="code-title">前置/后置标签</div>
                    <div className="code-description">用于配置一些固定的组合</div>
                    <div className="code-example">
                        <Highlight>
                            {"<Input placeholder='your site' prepend='Http://' append='.com'></Input>"}
                        </Highlight>
                    </div>
                </div>
            </div>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <Input prepend={<Icon name="user"></Icon>} placeholder="username"></Input>
                    <Input icon="password" placeholder="password" type="password"></Input>
                </div>
                <div className="code-example-box">
                    <div className="code-title">前缀/后缀标签</div>
                    <div className="code-description">为输入框添加前缀/后缀标签</div>
                    <div className="code-example">
                        <Highlight>
                            {"<Input prepend={<Icon name='user'></Icon>} placeholder='username'></Input>\n<Input icon='password' placeholder='password' type='password'></Input>"}
                        </Highlight>
                    </div>
                </div>
            </div>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <Input disable placeholder="Disable"></Input>
                </div>
                <div className="code-example-box">
                    <div className="code-title">禁用</div>
                    <div className="code-description">disable禁用状态</div>
                    <div className="code-example">
                        <Highlight>
                            {"<Input disable placeholder='Disable'></Input>"}
                        </Highlight>
                    </div>
                </div>
            </div>
        </div>
    }
}