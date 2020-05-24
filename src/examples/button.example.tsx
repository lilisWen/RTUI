import * as React from 'react'
import { Button, ButtonGroup } from '../components/Button'
import Highlight from 'react-highlight'

interface ButtonExampleState {
    size: "small" | "default" | "large"
}
export default class ButtonExample extends React.Component<null, ButtonExampleState>{
    constructor(props: any) {
        super(props)
        this.state = {
            size: 'default'
        }
    }
    handleChangeSize(size: "small" | "default" | "large") {
        this.setState({
            size: size
        })
    }
    render() {
        return <div className='button-example'>
            <section>
                <h1>Button 按钮</h1>
                <p className="text">点击以开始即时操作。</p>
            </section>
            <section>
                <h2>何时使用</h2>
                <p className="text">响应用户点击行为，触发相应业务逻辑。</p>
            </section>
            <section>
                <h2>代码示例</h2>
            </section>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <div style={{ width: '600px', display: 'flex', justifyContent: 'space-between' }}>
                        <Button type='default'>Default</Button>
                        <Button type='primary' htmlType='button'>Primary</Button>
                        <Button type='dashed'>Dashed</Button>
                        <Button type='success'>Success</Button>
                        <Button type='danger'>Danger</Button>
                        <Button type='link'>Link</Button>
                    </div>
                </div>
                <div className="code-example-box">
                    <div className="code-title">按钮类型</div>
                    <div className="code-description">按钮有六种类型：默认按钮、主要按钮、虚线按钮、成功按钮、危险按钮、链接按钮</div>
                    <div className="code-example">
                        <Highlight >
                            {"<Button type='default'>Default</Button>\n<Button type='primary' htmlType='button'>Primary</Button>\n<Button type='dashed'>Dashed</Button>\n<Button type='success'>Success</Button>\n<Button type='danger'>Danger</Button>\n<Button type='link'>Link</Button>\n"}
                        </Highlight>
                    </div>
                </div>
            </div>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <div style={{ width: '200px', display: 'flex', justifyContent: 'space-between' }}>
                        <Button disable>Disable</Button>
                        <Button loading type='primary'>loading</Button>
                    </div>
                </div>
                <div className="code-example-box">
                    <div className="code-title">Disable和Loading状态</div>
                    <div className="code-description">设置按钮为禁用或加载中状态</div>
                    <div className="code-example">
                        <Highlight >
                            {"<Button disable>Disable</Button>\n<Button loading type='primary'>loading</Button>"}
                        </Highlight>
                    </div>
                </div>
            </div>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <div style={{ width: '200px', display: 'flex', justifyContent: 'space-between' }}>
                        <Button type='default' icon="set">Left</Button>
                        <Button type='default' icon="set" position='right'>Right</Button>
                    </div>
                </div>
                <div className="code-example-box">
                    <div className="code-title">Icon图标</div>
                    <div className="code-description">设置内嵌Icon图标和位置</div>
                    <div className="code-example">
                        <Highlight >
                            {"<Button type='default' icon='set'>Left</Button>\n<Button type='default' icon='set' position='right'>Right</Button>"}
                        </Highlight>
                    </div>
                </div>
            </div>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block", background: 'rgb(190, 200, 200)' }}>
                    <div style={{ width: '400px', display: 'flex', justifyContent: 'space-between' }}>
                        <Button type='default' outline>Default</Button>
                        <Button type='primary' htmlType='button' outline>Primary</Button>
                        <Button type='danger' outline>Danger</Button>
                        <Button type='success' outline>Success</Button>
                    </div>
                </div>
                <div className="code-example-box">
                    <div className="code-title">幽灵按钮</div>
                    <div className="code-description">幽灵按钮常用于有色背景上</div>
                    <div className="code-example">
                        <Highlight >
                            {"<Button type='default' outline>Default</Button>\n<Button type='primary' htmlType='button' outline>Primary</Button>\n<Button type='danger' outline>Danger</Button>\n<Button type='success' outline>Success</Button>"}
                        </Highlight>
                    </div>
                </div>
            </div>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <div style={{ width: '300px', display: 'flex', justifyContent: 'space-between' }}>
                        <Button size={this.state.size} type='primary' onClick={() => { this.handleChangeSize('small') }}>small</Button>
                        <Button size={this.state.size} type='primary' onClick={() => { this.handleChangeSize('default') }}>default</Button>
                        <Button size={this.state.size} type='primary' onClick={() => { this.handleChangeSize('large') }}>large</Button>
                    </div>
                </div>
                <div className="code-example-box">
                    <div className="code-title">按钮尺寸</div>
                    <div className="code-description">按钮有大、中、小三种尺寸。点击以查看对应尺寸的效果</div>
                    <div className="code-example">
                        <Highlight >
                            {"<Button size={this.state.size} type='primary' onClick={() => { this.handleChangeSize('small') }}>small</Button>\n<Button size={this.state.size} type='primary' onClick={() => { this.handleChangeSize('default') }}>default</Button>\n<Button size={this.state.size} type='primary' onClick={() => { this.handleChangeSize('large') }}>large</Button>"}
                        </Highlight>
                    </div>
                </div>
            </div>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <ButtonGroup >
                        <Button type='default'>Left</Button>
                        <Button type='default'>Meddium</Button>
                        <Button type='default'>Right</Button>
                    </ButtonGroup>
                </div>
                <div className="code-example-box">
                    <div className="code-title">按钮组合</div>
                    <div className="code-description">可以容纳多个按钮的容器</div>
                    <div className="code-example">
                        <Highlight >
                            {"<Button type='default'>Left</Button>\n<Button type='default'>Meddium</Button>\n<Button type='default'>Right</Button>"}
                        </Highlight>
                    </div>
                </div>
            </div>

        </div >
    }
}