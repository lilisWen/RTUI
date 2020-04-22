import * as React from 'react'
import { CheckBoxGroup, CheckBox, Option } from '../components/CheckBox'

export default class CheckBoxExample extends React.Component<null> {
    render() {
        const options: Option[] = [{ value: 'apple', label: 'apple' }, { value: 'pear', label: 'pear' }]
        return <div className='button-example'>
            <section>
                <h1>CheckBox 选择框</h1>
                <p className="text">用于输入内容的基础表单组件。</p>
            </section>
            <section>
                <h2>何时使用</h2>
                <p className="text">需要用户输入内容时。</p>
            </section>
            <section>
                <h2>代码示例</h2>
            </section>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <CheckBox>单选框</CheckBox>
                </div>
                <div className="code-example-box">
                    <div className="code-title">水平导航</div>
                    <div className="code-description">水平的顶部导航菜单。</div>
                </div>
            </div>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <CheckBoxGroup title='a' defaultValue={['pear']} options={options}>单选框</CheckBoxGroup>
                </div>
                <div className="code-example-box">
                    <div className="code-title">水平导航</div>
                    <div className="code-description">水平的顶部导航菜单。</div>
                </div>
            </div>
        </div>
    }
}