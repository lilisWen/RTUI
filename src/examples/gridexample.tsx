import * as React from 'react'
import { Row, Col, Option } from '../components/Grid'

export default class PopcoverExample extends React.Component {
    render() {
        const a: Option = { span: 12 }
        return <div className='button-example'>
            <section>
                <h1>Popcover 气泡卡片</h1>
                <p className="text">触发时弹出卡片浮层。</p>
            </section>
            <section>
                <h2>何时使用</h2>
                <p className="text">根据用户的操作行为展现目标元素的进一步提示或相关操作时。</p>
            </section>
            <section>
                <h2>代码示例</h2>
                <div className="example">
                    <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                        <Row>
                            <Col span={12}><div className="grid-demo" style={{ backgroundColor: ' rgb(64, 169, 255)' }}>Col-12</div></Col>
                            <Col span={12}><div className="grid-demo" style={{ backgroundColor: ' rgb(24, 144, 255)' }}>Col-6</div></Col>
                            <Col span={6}><div className="grid-demo" style={{ backgroundColor: ' rgb(64, 169, 255)' }}>Col-6</div></Col>
                        </Row>
                    </div>
                </div>
                <div className="example">
                    <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                        <Row>
                            <Col span={6} sm={a}><div className="grid-demo" style={{ backgroundColor: ' rgb(64, 169, 255)' }}>Col-12</div></Col>
                        </Row>
                    </div>
                </div>
                <div className="example">
                    <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                        <Row>
                            <Col span={6} md={a}><div className="grid-demo" style={{ backgroundColor: ' rgb(64, 169, 255)' }}>Col-12</div></Col>
                        </Row>
                    </div>
                </div>
            </section>
        </div>
    }
}