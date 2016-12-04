import React from 'react'

export default class Tag extends React.Component {
    render() {
        const {style, params: {name}} = this.props;
        return (
            <div>
                hello 小智
            </div>
        )
    }
}