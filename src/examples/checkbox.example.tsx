import * as React from 'react'
import { CheckBox } from '../components'
import { Option } from '../components/CheckBox/CheckBoxGroup'
import Highlight from 'react-highlight'

export default class CheckBoxExample extends React.Component<null> {
    render() {
        const options: Option[] = [{ value: 'apple', label: 'apple' }, { value: 'pear', label: 'pear' }]
        return <div className='button-example'>
            <section>
                <h1>CheckBox 多选框</h1>
                <p className="text">用于输入内容的基础表单组件。</p>
            </section>
            <section>
                <h2>何时使用</h2>
                <p className="text">在一组可选项中进行多项选择时。</p>
            </section>
            <section>
                <h2>代码示例</h2>
            </section>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <CheckBox>checkbox</CheckBox>
                </div>
                <div className="code-example-box">
                    <div className="code-title">基本用法</div>
                    <div className="code-description">点击选中checkbox</div>
                    <div className="code-example">
                        <Highlight>
                            {"<CheckBox>checkbox</CheckBox>"}
                        </Highlight>
                    </div>
                </div>
            </div>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <CheckBox disabled>checkbox</CheckBox>
                    <CheckBox disabled defaultChecked>checkbox</CheckBox>
                </div>
                <div className="code-example-box">
                    <div className="code-title">disable状态</div>
                    <div className="code-description">checkbox的disable状态</div>
                    <div className="code-example">
                        <Highlight>
                            {"<CheckBox disabled>checkbox</CheckBox>\n<CheckBox disabled defaultChecked>checkbox</CheckBox>"}
                        </Highlight>
                    </div>
                </div>
            </div>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <CheckBox.CheckBoxGroup title='a' defaultValue={['pear']} options={options}>单选框</CheckBox.CheckBoxGroup>
                </div>
                <div className="code-example-box">
                    <div className="code-title">checkboxGroup</div>
                    <div className="code-description">提供全选功能的选择框组</div>
                    <div className="code-example">
                        <Highlight>
                            {"<CheckBox.CheckBoxGroup title='a' defaultValue={['pear']} options={options}>单选框</CheckBox.CheckBoxGroup>"}
                        </Highlight>
                    </div>
                </div>
            </div>
        </div>
    }
}