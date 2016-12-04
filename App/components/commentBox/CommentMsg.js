import React, { Component } from 'react'

import '../../styles/chat.less'

export default class CommentMsg extends Component {
    render() {
        const { msg } = this.props
        return(
            <div className="comment-msg">{msg}</div>
        )
    }
}