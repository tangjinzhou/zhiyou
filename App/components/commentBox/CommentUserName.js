import React, { Component } from 'react'

import '../../styles/chat.less'

export default class CommentUserName extends Component {
    render() {
        const { userName } = this.props
        return(
            <div className="comment-user-name">{userName}</div>
        )
    }
}