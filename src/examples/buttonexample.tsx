import * as React from 'react'

export default class ButtonExample extends React.Component {
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
        </div>
    }
}