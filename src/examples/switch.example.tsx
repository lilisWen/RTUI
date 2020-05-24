import * as React from 'react'
import { Switch, Button } from '../components'
import Highlight from 'react-highlight'

interface SwitchExampleState {
    check: boolean
}
export default class SwitchExample extends React.Component<null, SwitchExampleState> {
    constructor(prop: any) {
        super(prop)
        this.state = {
            check: false
        }
    }
    render() {
        return <div className='button-example'>
            <section>
                <h1>Switch 开关</h1>
                <p className="text">开关选择器。</p>
            </section>
            <section>
                <h2>何时使用</h2>
                <p className="text">需要在两种状态间切换时。</p>
            </section>
            <section>
                <h2>代码示例</h2>
            </section>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <Switch></Switch>
                </div>
                <div className="code-example-box">
                    <div className="code-title">基本用法</div>
                    <div className="code-description">基本的用法。</div>
                    <div className="code-example">
                        <Highlight>
                            {"<Switch></Switch>"}
                        </Highlight>
                    </div>
                </div>
            </div>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <Switch style={{ marginRight: '20px' }}></Switch>
                    <Switch size="small" ></Switch>
                </div>
                <div className="code-example-box">
                    <div className="code-title" >两种大小</div>
                    <div className="code-description">small表示小号switch</div>
                    <div className="code-example">
                        <Highlight>
                            {"<Switch style={{ marginRight: '20px' }}></Switch>\n<Switch size='small' ></Switch>"}
                        </Highlight>
                    </div>
                </div>
            </div>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <Switch disable defaultChecked style={{ marginRight: '20px' }}></Switch>
                    <Switch disable ></Switch>
                </div>
                <div className="code-example-box">
                    <div className="code-title">两种大小</div>
                    <div className="code-description">small表示小号switch</div>
                    <div className="code-example">
                        <Highlight>
                            {"<Switch disable defaultChecked style={{ marginRight: '20px' }}></Switch>\n<Switch disable ></Switch>"}
                        </Highlight>
                    </div>
                </div>
            </div>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <div style={{ display: 'flex', alignItems: "center" }}>
                        <Switch checked={this.state.check} style={{ marginRight: '20px' }}></Switch>
                        <Button type="primary" onClick={() => { this.setState({ check: !this.state.check }) }}>Toggle</Button>
                    </div>
                </div>
                <div className="code-example-box">
                    <div className="code-title">受控</div>
                    <div className="code-description">Switch的状态受checked属性控制</div>
                    <div className="code-example">
                        <Highlight>
                            {"<Switch checked={this.state.check} style={{ marginRight: '20px' }}></Switch>\n<Button type='primary' onClick={() => { this.setState({ check: !this.state.check }) }}>Toggle</Button>"}
                        </Highlight>
                    </div>
                </div>
            </div>
        </div>
    }
}