import * as React from 'react'
import { Cascader } from '../components'
import { Option } from '../components/Cascader/Cascader'
import Highlight from 'react-highlight'

export default class CheckBoxExample extends React.Component<null> {
    render() {
        const options: Option[] = [
            {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                    {
                        value: 'hangzhou',
                        label: 'Hangzhou',
                        children: [
                            {
                                value: 'xihu',
                                label: 'West Lake'
                            }
                        ]
                    }
                ]
            },
            {
                value: 'jiangshu',
                label: 'Jiangshu',
                children: [
                    {
                        value: 'nanjing',
                        label: 'Nanjing',
                        disabled: true,
                        children: [
                            {
                                value: 'jiangning',
                                label: 'Jiangning'
                            }
                        ]
                    }
                ]
            },
            {
                value: 'shanghai',
                label: 'Shanghai',
                children: [
                    {
                        value: 'pudong',
                        label: 'Pudong',
                        children: [
                            {
                                value: 'lujiazhui',
                                label: 'Lujiazhui'
                            }
                        ]
                    }
                ]
            }
        ]
        return <div className='button-example'>
            <section>
                <h1>Cascader 级联选择器</h1>
                <p className="text">级联选择器。</p>
            </section>
            <section>
                <h2>何时使用</h2>
                <p className="text">需要从一组层级信息中进行选择时，例如省市区，公司层级，事物分类等。</p>
            </section>
            <section>
                <h2>代码示例</h2>
            </section>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <Cascader options={options} style={{ width: '300px' }}></Cascader>
                </div>
                <div className="code-example-box">
                    <div className="code-title">基本用法</div>
                    <div className="code-description">依次选择所有层级选项后更新input框</div>
                    <div className="code-example">
                        <Highlight>
                            {"<Cascader options={options} style={{ width: '300px' }}></Cascader>"}
                        </Highlight>
                    </div>

                </div>
            </div>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <Cascader changeOnSelect options={options} style={{ width: '300px' }}></Cascader>
                </div>
                <div className="code-example-box">
                    <div className="code-title">changeOnSelect用法</div>
                    <div className="code-description">每次选择后实时更新input框</div>
                    <div className="code-example">
                        <Highlight>
                            {"<Cascader changeOnSelect options={options} style={{ width: '300px' }}></Cascader>"}
                        </Highlight>
                    </div>

                </div>
            </div>
        </div >
    }
}