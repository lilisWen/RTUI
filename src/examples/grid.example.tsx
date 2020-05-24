import * as React from 'react'
import { Grid } from '../components'
import { Option } from '../components/Grid/Row'
import Highlight from 'react-highlight'
export default class PopcoverExample extends React.Component {
    render() {
        const sm: Option = { span: 7 }
        const md: Option = { span: 6 }
        const lg: Option = { span: 4 }
        const xl: Option = { span: 2 }
        return <div className='button-example'>
            <section>
                <h1>Grid 栅格</h1>
                <p className="text">24格栅格系统。</p>
            </section>
            <section>
                <h2>何时使用</h2>
                <p className="text">快速实现响应式布局。</p>
            </section>
            <section>
                <h2>代码示例</h2>
            </section >
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <Grid.Row style={{ marginBottom: '20px' }}>
                        <Grid.Col span={12}><div className='grid-demo' style={{ backgroundColor: ' rgb(64, 169, 255)' }}>Col-12</div></Grid.Col>
                        <Grid.Col span={12}><div className="grid-demo" style={{ backgroundColor: ' rgb(24, 144, 255)' }}>Col-12</div></Grid.Col>
                    </Grid.Row>
                    <Grid.Row style={{ marginBottom: '20px' }}>
                        <Grid.Col span={8}><div className="grid-demo" style={{ backgroundColor: ' rgb(64, 169, 255)' }}>Col-8</div></Grid.Col>
                        <Grid.Col span={8}><div className="grid-demo" style={{ backgroundColor: ' rgb(24, 144, 255)' }}>Col-8</div></Grid.Col>
                        <Grid.Col span={8}><div className="grid-demo" style={{ backgroundColor: ' rgb(64, 169, 255)' }}>Col-8</div></Grid.Col>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Col span={6}><div className="grid-demo" style={{ backgroundColor: ' rgb(64, 169, 255)' }}>Col-8</div></Grid.Col>
                        <Grid.Col span={6}><div className="grid-demo" style={{ backgroundColor: ' rgb(24, 144, 255)' }}>Col-8</div></Grid.Col>
                        <Grid.Col span={6}><div className="grid-demo" style={{ backgroundColor: ' rgb(64, 169, 255)' }}>Col-8</div></Grid.Col>
                        <Grid.Col span={6}><div className="grid-demo" style={{ backgroundColor: ' rgb(24, 144, 255)' }}>Col-8</div></Grid.Col>
                    </Grid.Row>
                </div>
                <div className="code-example-box">
                    <div className="code-title">基础栅格</div>
                    <div className="code-description">使用 Row 和 Col 栅格组件，创建一个基本的栅格系统，所有 Col 必须放在 Row 内，Row 的直接子组件也只能是 Col</div>
                    <div className="code-example">
                        <Highlight>
                            {"<Grid.Row style={{ marginBottom: '20px' }}>\n<Grid.Col span={12}><div className='grid-demo' style={{ backgroundColor: ' rgb(64, 169, 255)' }}>Col-12</div></Grid.Col>\n<Grid.Col span={12}><div className='grid-demo' style={{ backgroundColor: ' rgb(24, 144, 255)' }}>Col-12</div></Grid.Col>\n</Grid.Row>\n<Grid.Row style={{ marginBottom: '20px' }}>\n<Grid.Col span={8}><div className='grid-demo' style={{ backgroundColor: ' rgb(64, 169, 255)' }}>Col-8</div></Grid.Col>\n<Grid.Col span={8}><div className='grid-demo' style={{ backgroundColor: ' rgb(24, 144, 255)' }}>Col-8</div></Grid.Col>\n<Grid.Col span={8}><div className='grid-demo' style={{ backgroundColor: ' rgb(64, 169, 255)' }}>Col-8</div></Grid.Col>\n</Grid.Row>\n<Grid.Row>\n<Grid.Col span={6}><div className='grid-demo' style={{ backgroundColor: ' rgb(64, 169, 255)' }}>Col-8</div></Grid.Col>\n<Grid.Col span={6}><div className='grid-demo' style={{ backgroundColor: ' rgb(24, 144, 255)' }}>Col-8</div></Grid.Col>\n<Grid.Col span={6}><div className='grid-demo' style={{ backgroundColor: ' rgb(64, 169, 255)' }}>Col-8</div></Grid.Col>\n<Grid.Col span={6}><div className='grid-demo' style={{ backgroundColor: ' rgb(24, 144, 255)' }}>Col-8</div></Grid.Col>\n</Grid.Row>"}
                        </Highlight>
                    </div>
                </div>
            </div>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <Grid.Row>
                        <Grid.Col span={4} offset={0} ><div className='grid-demo' style={{ backgroundColor: ' rgb(64, 169, 255)' }}>Col-4</div></Grid.Col>
                        <Grid.Col span={4} offset={1} ><div className='grid-demo' style={{ backgroundColor: ' rgb(24, 144, 255)' }}>Col-4</div></Grid.Col>
                        <Grid.Col span={4} offset={3}><div className='grid-demo' style={{ backgroundColor: ' rgb(64, 169, 255)' }}>Col-4</div></Grid.Col>
                        <Grid.Col span={4} offset={4} ><div className='grid-demo' style={{ backgroundColor: ' rgb(24, 144, 255)' }}>Col-4</div></Grid.Col>
                    </Grid.Row>
                </div>
                <div className="code-example-box">
                    <div className="code-title">区块偏移</div>
                    <div className="code-description">使用 offset 属性使区块向右侧偏移</div>
                    <div className="code-example">
                        <Highlight>
                            {"<Grid.Row>\n<Grid.Col span={4} offset={0} ><div className='grid-demo' style={{ backgroundColor: ' rgb(64, 169, 255)' }}>Col-4</div></Grid.Col>\n<Grid.Col span={4} offset={1} ><div className='grid-demo' style={{ backgroundColor: ' rgb(24, 144, 255)' }}>Col-4</div></Grid.Col>\n<Grid.Col span={4} offset={3}><div className='grid-demo' style={{ backgroundColor: ' rgb(64, 169, 255)' }}>Col-4</div></Grid.Col>\n<Grid.Col span={4} offset={4} ><div className='grid-demo' style={{ backgroundColor: ' rgb(24, 144, 255)' }}>Col-4</div></Grid.Col>\n</Grid.Row>"}
                        </Highlight>
                    </div>
                </div>
            </div>
            <div className="example">
                <div className="container" style={{ paddingTop: "50px", paddingBottom: "80px", display: "block" }}>
                    <Grid.Row gutter={32}>
                        <Grid.Col span={12} sm={sm} md={md} lg={lg} xl={xl} ><div className="grid-demo" style={{ backgroundColor: ' rgb(64, 169, 255)' }}>Col-4</div></Grid.Col>
                        <Grid.Col span={12} sm={sm} md={md} lg={lg} xl={xl} ><div className="grid-demo" style={{ backgroundColor: ' rgb(24, 144, 255)' }}>Col-4</div></Grid.Col>
                        <Grid.Col span={12} sm={sm} md={md} lg={lg} xl={xl}><div className="grid-demo" style={{ backgroundColor: ' rgb(64, 169, 255)' }}>Col-4</div></Grid.Col>
                        <Grid.Col span={12} sm={sm} md={md} lg={lg} xl={xl} ><div className="grid-demo" style={{ backgroundColor: ' rgb(24, 144, 255)' }}>Col-4</div></Grid.Col>
                        <Grid.Col span={12} sm={sm} md={md} lg={lg} xl={xl} ><div className="grid-demo" style={{ backgroundColor: ' rgb(24, 144, 255)' }}>Col-4</div></Grid.Col>
                        <Grid.Col span={12} sm={sm} md={md} lg={lg} xl={xl} ><div className="grid-demo" style={{ backgroundColor: ' rgb(24, 144, 255)' }}>Col-4</div></Grid.Col>
                        <Grid.Col span={12} sm={sm} md={md} lg={lg} xl={xl} ><div className="grid-demo" style={{ backgroundColor: ' rgb(24, 144, 255)' }}>Col-4</div></Grid.Col>
                        <Grid.Col span={12} sm={sm} md={md} lg={lg} xl={xl} ><div className="grid-demo" style={{ backgroundColor: ' rgb(24, 144, 255)' }}>Col-4</div></Grid.Col>
                    </Grid.Row>
                </div>
                <div className="code-example-box">
                    <div className="code-title">区块偏移</div>
                    <div className="code-description">使用 offset 属性使区块向右侧偏移</div>
                    <div className="code-example">
                        <Highlight>
                            {"<Grid.Row gutter={32}>\n<Grid.Col span={12} sm={sm} md={md} lg={lg} xl={xl} ><div className='grid-demo' style={{ backgroundColor: ' rgb(64, 169, 255)' }}>Col-4</div></Grid.Col>\n<Grid.Col span={12} sm={sm} md={md} lg={lg} xl={xl} ><div className='grid-demo' style={{ backgroundColor: ' rgb(24, 144, 255)' }}>Col-4</div></Grid.Col>\n<Grid.Col span={12} sm={sm} md={md} lg={lg} xl={xl}><div className='grid-demo' style={{ backgroundColor: ' rgb(64, 169, 255)' }}>Col-4</div></Grid.Col>\n<Grid.Col span={12} sm={sm} md={md} lg={lg} xl={xl} ><div className='grid-demo' style={{ backgroundColor: ' rgb(24, 144, 255)' }}>Col-4</div></Grid.Col>\n<Grid.Col span={12} sm={sm} md={md} lg={lg} xl={xl} ><div className='grid-demo' style={{ backgroundColor: ' rgb(24, 144, 255)' }}>Col-4</div></Grid.Col>\n<Grid.Col span={12} sm={sm} md={md} lg={lg} xl={xl} ><div className='grid-demo' style={{ backgroundColor: ' rgb(24, 144, 255)' }}>Col-4</div></Grid.Col>\n<Grid.Col span={12} sm={sm} md={md} lg={lg} xl={xl} ><div className='grid-demo' style={{ backgroundColor: ' rgb(24, 144, 255)' }}>Col-4</div></Grid.Col>\n<Grid.Col span={12} sm={sm} md={md} lg={lg} xl={xl} ><div className='grid-demo' style={{ backgroundColor: ' rgb(24, 144, 255)' }}>Col-4</div></Grid.Col>\n</Grid.Row>"}
                        </Highlight>
                    </div>
                </div>
            </div>

        </div >
    }
}