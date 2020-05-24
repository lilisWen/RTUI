import * as React from 'react'

export default class ButtonExample extends React.Component<null>{
    render() {
        return <div className='button-example'>
            <section>
                <h1>Rt-UI</h1>
                <p className="text">Rt-UI是一套基于React+Typescript的UI组件库，样式参考了部分成熟组件库。</p>
            </section>
            <section>
                <h2>TypeScript</h2>
                <p className="text">使用了TypeScript添加类型约束，使开发人员在开发阶段降低错误损失。</p>
            </section>
            <section>
                <h2>Less</h2>
                <p className="text">使用Less进行了CSS预处理，使开发更加便捷。</p>
            </section>
        </div>
    }
}