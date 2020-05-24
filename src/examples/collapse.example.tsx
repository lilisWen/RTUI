import * as React from 'react'
import { Collapse } from '../components'
import Highlight from 'react-highlight'
export default class CollapseExample extends React.Component<null> {
    render() {
        return <div className='button-example'>
            <section>
                <h1>Collapse 折叠面板</h1>
                <p className="text">可以折叠/展开的内容区域。</p>
            </section>
            <section>
                <h2>何时使用</h2>
                <p className="text">对复杂区域进行分组和隐藏时。 手风琴是一种特殊的折叠面板，只允许单个面板展开。</p>
            </section>
            <section>
                <h2>代码示例</h2>
            </section>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <Collapse>
                        <Collapse.Panel header="Header 1" key={1}>
                            <div style={{ height: '60px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '20px', }}>Panel 1</div>
                        </Collapse.Panel>
                        <Collapse.Panel header="Header 2" key={2} disabled>
                            <div style={{ height: '60px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '20px', }}>Panel 2</div>
                        </Collapse.Panel>
                        <Collapse.Panel header="Header 3" key={3} >
                            <div style={{ height: '60px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '20px', }}>Panel 3</div>
                        </Collapse.Panel>
                    </Collapse>
                </div>
                <div className="code-example-box">
                    <div className="code-title">折叠面板</div>
                    <div className="code-description">可同时展开多个面板，可设置disable状态</div>
                    <div className="code-example">
                        <Highlight>
                            {"<Collapse>\n<Collapse.Panel header='Header 1' key={1}>\n    <div style={{ height: '60px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '20px', }}>Panel 1</div>\n</Collapse.Panel>\n<Collapse.Panel header='Header 2' key={2} disabled>\n    <div style={{ height: '60px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '20px', }}>Panel 2</div>\n</Collapse.Panel>\n<Collapse.Panel header='Header 3' key={3} >\n    <div style={{ height: '60px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '20px', }}>Panel 3</div>\n</Collapse.Panel>\n</Collapse>"}
                        </Highlight>
                    </div>
                </div>
            </div>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <Collapse accordion>
                        <Collapse.Panel header="Header 1" key={1}>
                            <div style={{ height: '60px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '20px', }}>Panel 1</div>
                        </Collapse.Panel>
                        <Collapse.Panel header="Header 2" key={2} disabled>
                            <div style={{ height: '60px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '20px', }}>Panel 2</div>
                        </Collapse.Panel>
                        <Collapse.Panel header="Header 3" key={3} >
                            <div style={{ height: '60px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '20px', }}>Panel 3</div>
                        </Collapse.Panel>
                    </Collapse>
                </div>
                <div className="code-example-box">
                    <div className="code-title">手风琴</div>
                    <div className="code-description">只能展开一个面板</div>
                    <div className="code-example">
                        <Highlight>
                            {"<Collapse accordion>\n<Collapse.Panel header='Header 1' key={1}>\n    <div style={{ height: '60px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '20px', }}>Panel 1</div>\n</Collapse.Panel>\n<Collapse.Panel header='Header 2' key={2} disabled>\n    <div style={{ height: '60px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '20px', }}>Panel 2</div>\n</Collapse.Panel>\n<Collapse.Panel header='Header 3' key={3} >\n    <div style={{ height: '60px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '20px', }}>Panel 3</div>\n</Collapse.Panel>\n</Collapse>"}
                        </Highlight>
                    </div>
                </div>
            </div>
        </div>
    }
}