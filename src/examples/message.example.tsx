import * as React from 'react'
import { Message, Button } from '../components'
import Highlight from 'react-highlight'
interface MessageExampleState {
    show: boolean
}

export default class MessageExample extends React.Component<null, MessageExampleState> {
    constructor(props: any) {
        super(props)
        this.state = {
            show: true
        }
    }
    render() {
        return <div className='button-example'>
            <section>
                <h1>Message 全局提示</h1>
                <p className="text">全局展示操作反馈信息。</p>
            </section>
            <section>
                <h2>何时使用</h2>
                <p className="text">可提供成功、警告和错误等反馈信息,顶部居中，不打断用户。</p>
            </section>
            <section>
                <h2>代码示例</h2>
            </section>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <div style={{ width: '400px', display: 'flex', justifyContent: 'space-between' }}>
                        <Button type='primary' onClick={() => { Message.info({ content: 'This is a info' }) }}>Info</Button>
                        <Button type='primary' onClick={() => { Message.success({ content: 'This is a success message' }) }}>Success</Button>
                        <Button type='primary' onClick={() => { Message.warning({ content: 'this is a warning message' }) }}>Warning</Button>
                        <Button type='primary' onClick={() => { Message.error({ duration: 0, content: 'This is a error' }) }}>Error</Button>
                    </div>
                </div>
                <div className="code-example-box">
                    <div className="code-title">水平导航</div>
                    <div className="code-description">水平的顶部导航菜单</div>
                    <div className="code-example">
                        <Highlight>
                            {"<Button type='primary' onClick={() => { Message.info({ content: 'This is a info' }) }}>Info</Button>\n<Button type='primary' onClick={() => { Message.success({ content: 'This is a success message' }) }}>Success</Button>\n<Button type='primary' onClick={() => { Message.warning({ content: 'this is a warning message' }) }}>Warning</Button>\n<Button type='primary' onClick={() => { Message.error({ duration: 0, content: 'This is a error' }) }}>Error</Button>"}
                        </Highlight>
                    </div>
                </div>
            </div>
        </div>
    }
}