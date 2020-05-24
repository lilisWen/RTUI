import * as React from 'react'

export default class ButtonExample extends React.Component<null>{
    render() {
        return <div className='button-example'>
            <section>
                <h1>开始使用</h1>
                <p className="text">Rt-UI已经发布到NPM,可通过npm安装</p>
                <p className="text" style={{ fontWeight: 700 }}>npm install rtui-li</p>
            </section>
        </div>
    }
}