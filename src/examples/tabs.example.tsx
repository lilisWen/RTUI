import * as React from 'react'
import { Tabs } from '../components'
import Highlight from 'react-highlight'

export default class CheckBoxExample extends React.Component<null> {
    render() {
        return <div className='button-example'>
            <section>
                <h1>Tabs 标签页</h1>
                <p className="text">选项卡切换组件。</p>
            </section>
            <section>
                <h2>何时使用</h2>
                <p className="text">平级区域大块内容的的收纳和展现。</p>
            </section>
            <section>
                <h2>代码示例</h2>
            </section>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <Tabs>
                        <Tabs.TabPane title="title1" key={1}><div style={{ padding: '10px' }}>Tab Pane 1</div></Tabs.TabPane>
                        <Tabs.TabPane title="title2" key={2}><div style={{ padding: '10px' }}>Tab Pane 2</div></Tabs.TabPane>
                        <Tabs.TabPane title="title3" key={3}><div style={{ padding: '10px' }}>Tab Pane 3</div></Tabs.TabPane>
                    </Tabs>
                </div>
                <div className="code-example-box">
                    <div className="code-title">水平Tabs</div>
                    <div className="code-description">水平的顶部导航菜单。</div>
                    <div className="code-example">
                        <Highlight>
                            {"<Tabs>\n<Tabs.TabPane title='title1' key={1}><div style={{ padding: '10px' }}>Tab Pane 1</div></Tabs.TabPane>\n<Tabs.TabPane title='title2' key={2}><div style={{ padding: '10px' }}>Tab Pane 2</div></Tabs.TabPane>\n<Tabs.TabPane title='title3' key={3}><div style={{ padding: '10px' }}>Tab Pane 3</div></Tabs.TabPane>\n</Tabs>"}
                        </Highlight>
                    </div>
                </div>
            </div>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <Tabs vertical>
                        <Tabs.TabPane title="title1" key={1}><div style={{ padding: '10px' }}>Tab Pane 1</div></Tabs.TabPane>
                        <Tabs.TabPane title="title2" key={2}><div style={{ padding: '10px' }}>Tab Pane 2</div></Tabs.TabPane>
                        <Tabs.TabPane disabled title="title3" key={3}><div style={{ padding: '10px' }}>Tab Pane 3</div></Tabs.TabPane>
                    </Tabs>
                </div>
                <div className="code-example-box">
                    <div className="code-title">竖直Tabs</div>
                    <div className="code-description">竖直排列tabs，可通过disble设置禁用状态。</div>
                    <div className="code-example">
                        <Highlight>
                            {"<Tabs vertical>\n<Tabs.TabPane title='title1' key={1}><div style={{ padding: '10px' }}>Tab Pane 1</div></Tabs.TabPane>\n<Tabs.TabPane title='title2' key={2}><div style={{ padding: '10px' }}>Tab Pane 2</div></Tabs.TabPane>\n<Tabs.TabPane disabled title='title3' key={3}><div style={{ padding: '10px' }}>Tab Pane 3</div></Tabs.TabPane>\n</Tabs>"}
                        </Highlight>
                    </div>
                </div>
            </div>
        </div>
    }
}