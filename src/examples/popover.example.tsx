import * as React from 'react'
import { Popover, Button } from '../components'
import Highlight from 'react-highlight'

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
                        <Popover content={<div style={{ width: '150px' }}><p>Content</p><p>Content</p><p>Content</p></div>} title="Title" position="top" trigger='hover'>
                            <Button type="primary">Hover</Button>
                        </Popover>
                    </div>
                    <div className="code-example-box">
                        <div className="code-title">基本用法</div>
                        <div className="code-description">Popover大小由内容决定</div>
                        <div className="code-example">
                            <Highlight>
                                {"<Popover content={<div style={{ width: '150px' }}><p>Content</p><p>Content</p><p>Content</p></div>} title='Title' position='top' trigger='hover'>\n<Button type='primary'>Hover</Button>\n</Popover>"}
                            </Highlight>
                        </div>
                    </div>
                </div>
                <div className="example">
                    <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '400px', justifyContent: 'space-between' }}>
                            <Popover content={<div style={{ width: '150px' }}><p>Content</p><p>Content</p><p>Content</p></div>} title="Title" position="left" trigger='click'>
                                <Button type="primary">Left</Button>
                            </Popover>
                            <Popover content={<div style={{ width: '150px' }}><p>Content</p><p>Content</p><p>Content</p></div>} title="Title" position="top" trigger='click'>
                                <Button type="primary">Top</Button>
                            </Popover>
                            <Popover content={<div style={{ width: '150px' }}><p>Content</p><p>Content</p><p>Content</p></div>} title="Title" position="right" trigger='click'>
                                <Button type="primary">Right</Button>
                            </Popover>
                            <Popover content={<div style={{ width: '150px' }}><p>Content</p><p>Content</p><p>Content</p></div>} title="Title" position="bottom" trigger='click'>
                                <Button type="primary">Bottom</Button>
                            </Popover>
                        </div>
                    </div>
                    <div className="code-example-box">
                        <div className="code-title">四个方向</div>
                        <div className="code-description">支持四个方向的显示。</div>
                        <div className="code-example">
                            <Highlight>
                                {"<Popover content={<div style={{ width: '150px' }}><p>Content</p><p>Content</p><p>Content</p></div>} title='Title' position='left' trigger='click'>\n<Button type='primary'>Left</Button>\n</Popover>\n<Popover content={<div style={{ width: '150px' }}><p>Content</p><p>Content</p><p>Content</p></div>} title='Title' position='top' trigger='click'>\n<Button type='primary'>Top</Button>\n</Popover>\n<Popover content={<div style={{ width: '150px' }}><p>Content</p><p>Content</p><p>Content</p></div>} title='Title' position='right' trigger='click'>\n<Button type='primary'>Right</Button>\n</Popover>\n<Popover content={<div style={{ width: '150px' }}><p>Content</p><p>Content</p><p>Content</p></div>} title='Title' position='bottom' trigger='click'>\n<Button type='primary'>Bottom</Button>\n</Popover>"}
                            </Highlight>
                        </div>
                    </div>
                </div>
                <div className="example">
                    <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '280px', justifyContent: 'space-between' }}>
                            <Popover content={<div style={{ width: '150px' }}><p>Content</p><p>Content</p><p>Content</p></div>} title="Title" position="left" trigger='hover'>
                                <Button type="primary">Hover</Button>
                            </Popover>
                            <Popover content={<div style={{ width: '150px' }}><p>Content</p><p>Content</p><p>Content</p></div>} title="Title" position="top" trigger='click'>
                                <Button type="primary">Click</Button>
                            </Popover>
                            <Popover content={<div style={{ width: '150px' }}><p>Content</p><p>Content</p><p>Content</p></div>} title="Title" position="right" trigger='focus'>
                                <Button type="primary">Focus</Button>
                            </Popover>
                        </div>
                    </div>
                    <div className="code-example-box">
                        <div className="code-title">触发方式</div>
                        <div className="code-description">支持hover、click、focus三种触发方式。</div>
                        <div className="code-example">
                            <Highlight>
                                {"<Popover content={<div style={{ width: '150px' }}><p>Content</p><p>Content</p><p>Content</p></div>} title='Title' position='left' trigger='hover'>\n<Button type='primary'>Hover</Button>\n</Popover>\n<Popover content={<div style={{ width: '150px' }}><p>Content</p><p>Content</p><p>Content</p></div>} title='Title' position='top' trigger='click'>\n<Button type='primary'>Click</Button>\n</Popover>\n<Popover content={<div style={{ width: '150px' }}><p>Content</p><p>Content</p><p>Content</p></div>} title='Title' position='right' trigger='focus'>\n<Button type='primary'>Focus</Button>\n</Popover>"}
                            </Highlight>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    }
}