import React, { Component } from 'react'

import '../../styles/chat.less'

export default class CommentUserLogo extends Component {
    render() {
        const { logoSrc } = this.props
        return (
            <div className="comment-user-logo">
                <img src={logoSrc}/>
            </div>
        )
    }
}