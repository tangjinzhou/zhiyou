import React from 'react'
import Tag from './Tag'
let styles = {
    header: {
        height: '50px',
        borderBottom: '1px solid rgb(238, 238, 238)',
    }
}
export default class App extends React.Component {
    render() {
        return (
            <div style={{height: 'inherit'}}>
                {this.props.children || <Tag/>}
            </div>
        )
    }
}