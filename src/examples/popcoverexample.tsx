import * as React from 'react'
import Popcover from '../components/Popover/Popover'
import { Button } from '../components/Button'
export default class PopcoverExample extends React.Component {
    render() {
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
                        <Popcover content={<div style={{ width: '150px' }}><p>123</p><p>123</p><p>123</p></div>} title="Wow" position="top" trigger='focus'>
                            <Button type="primary">click</Button>
                        </Popcover>
                    </div>
                </div>
            </section>
        </div>
    }
}