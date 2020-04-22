import * as React from 'react'
import { Collapse, Panel } from '../components/Collapse'

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
                        <Panel header="1234" key={1}>
                            <div style={{ height: '60px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '20px', }}>sdbfashd</div>
                        </Panel>
                        <Panel header="1234" key={2} disabled>
                            <div>ajsdhasjdoqw</div>
                        </Panel>
                    </Collapse>
                </div>
                <div className="code-example-box">
                    <div className="code-title">水平导航</div>
                    <div className="code-description">水平的顶部导航菜单。</div>
                </div>
            </div>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <Collapse accordion>
                        <Panel header="1234" key={1}>
                            <div style={{ height: '60px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '20px', }}>sdbfashd</div>
                        </Panel>
                        <Panel header="1234" key={2}>
                            <div>ajsdhasjdoqw</div>
                        </Panel>
                        <Panel header="1234" key={3}>
                            <div style={{ height: '60px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '20px', }}>sdbfashd</div>
                        </Panel>
                        <Panel header="1234" key={4}>
                            <div>ajsdhasjdoqw</div>
                        </Panel>
                    </Collapse>
                </div>
                <div className="code-example-box">
                    <div className="code-title">水平导航</div>
                    <div className="code-description">水平的顶部导航菜单。</div>
                </div>
            </div>
        </div>
    }
}