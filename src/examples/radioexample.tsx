import * as React from 'react'
import Radio from '../components/Radio/radio'
import Option from '../components/Radio/option'
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
                        <Option value="apple">Apple</Option>
                        <Option value="orange">Orange</Option>
                        <Option value="pear">Pear</Option>
                        <Option value="disabled" disable={true}>Disabled</Option>
                    </Radio>
                </div>
                <div className="code-example-box">
                    <div className="code-title">水平导航</div>
                    <div className="code-description">水平的顶部导航菜单。</div>
                </div>
            </div>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <Radio defaultValue="apple" vertical onChange={(value) => console.log(value)}>
                        <Option value="apple">Apple</Option>
                        <Option value="orange">Orange</Option>
                        <Option value="pear">Pear</Option>
                        <Option value="disabled" disable={true}>Disabled</Option>
                    </Radio>
                </div>
                <div className="code-example-box">
                    <div className="code-title">水平导航</div>
                    <div className="code-description">水平的顶部导航菜单。</div>
                </div>
            </div>
        </div>
    }
}