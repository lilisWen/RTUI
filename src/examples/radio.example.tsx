import * as React from 'react'
import { Radio } from '../components'
import Highlight from 'react-highlight'

export default class ButtonExample extends React.Component {
    render() {
        return <div className='button-example'>
            <section>
                <h1>Radio 单选框</h1>
                <p className="text">单选框。</p>
            </section>
            <section>
                <h2>何时使用</h2>
                <p className="text">需要在多个备选项中选择单个状态时。</p>
            </section>
            <section>
                <h2>代码示例</h2>
            </section>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <Radio defaultValue="apple" onChange={(value) => console.log(value)}>
                        <Radio.Option value="apple">Apple</Radio.Option>
                        <Radio.Option value="orange">Orange</Radio.Option>
                        <Radio.Option value="pear">Pear</Radio.Option>
                        <Radio.Option value="disabled" disable={true}>Disabled</Radio.Option>
                    </Radio>
                </div>
                <div className="code-example-box">
                    <div className="code-title">基本用法</div>
                    <div className="code-description">基本的用法 单选组合</div>
                    <div className="code-example">
                        <Highlight>
                            {"<Radio defaultValue='apple' onChange={(value) => console.log(value)}>\n<Radio.Option value='apple'>Apple</Radio.Option>\n<Radio.Option value='orange'>Orange</Radio.Option>\n<Radio.Option value='pear'>Pear</Radio.Option>\n<Radio.Option value='disabled' disable={true}>Disabled</Radio.Option>\n</Radio>"}
                        </Highlight>
                    </div>
                </div>
            </div>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <Radio defaultValue="apple" vertical onChange={(value) => console.log(value)}>
                        <Radio.Option value="apple">Apple</Radio.Option>
                        <Radio.Option value="orange">Orange</Radio.Option>
                        <Radio.Option value="pear">Pear</Radio.Option>
                        <Radio.Option value="disabled" disable={true}>Disabled</Radio.Option>
                    </Radio>
                </div>
                <div className="code-example-box">
                    <div className="code-title">垂直组合</div>
                    <div className="code-description">垂直的单选组合</div>
                    <div className="code-example">
                        <Highlight>
                            {"<Radio defaultValue='apple' vertical onChange={(value) => console.log(value)}>\n<Radio.Option value='apple'>Apple</Radio.Option>\n<Radio.Option value='orange'>Orange</Radio.Option>\n<Radio.Option value='pear'>Pear</Radio.Option>\n<Radio.Option value='disabled' disable={true}>Disabled</Radio.Option>\n</Radio>"}
                        </Highlight>
                    </div>
                </div>
            </div>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <Radio defaultValue="apple" radioStyle='button' onChange={(value) => console.log(value)}>
                        <Radio.Option value="apple">Apple</Radio.Option>
                        <Radio.Option value="orange">Orange</Radio.Option>
                        <Radio.Option value="pear">Pear</Radio.Option>
                        <Radio.Option value="disabled" disable={true}>Disabled</Radio.Option>
                    </Radio>
                </div>
                <div className="code-example-box">
                    <div className="code-title">按钮样式</div>
                    <div className="code-description">水平单选按钮组合</div>
                    <div className="code-example">
                        <Highlight>
                            {"<Radio defaultValue='apple' radioStyle='button' onChange={(value) => console.log(value)}>\n<Radio.Option value='apple'>Apple</Radio.Option>\n<Radio.Option value='orange'>Orange</Radio.Option>\n<Radio.Option value='pear'>Pear</Radio.Option>\n<Radio.Option value='disabled' disable={true}>Disabled</Radio.Option>\n</Radio>"}
                        </Highlight>
                    </div>
                </div>
            </div>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <Radio defaultValue="apple" radioStyle='button' vertical onChange={(value) => console.log(value)}>
                        <Radio.Option value="apple">Apple</Radio.Option>
                        <Radio.Option value="orange">Orange</Radio.Option>
                        <Radio.Option value="pear">Pear</Radio.Option>
                        <Radio.Option value="disabled" disable={true}>Disabled</Radio.Option>
                    </Radio>
                </div>
                <div className="code-example-box">
                    <div className="code-title">垂直按钮样式</div>
                    <div className="code-description">垂直单选按钮组合</div>
                    <div className="code-example">
                        <Highlight>
                            {"<Radio defaultValue='apple' radioStyle='button' vertical onChange={(value) => console.log(value)}>\n<Radio.Option value='apple'>Apple</Radio.Option>\n<Radio.Option value='orange'>Orange</Radio.Option>\n<Radio.Option value='pear'>Pear</Radio.Option>\n<Radio.Option value='disabled' disable={true}>Disabled</Radio.Option>\n</Radio>"}
                        </Highlight>
                    </div>
                </div>
            </div>
        </div>
    }
}