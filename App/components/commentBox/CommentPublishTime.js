import React, { Component } from 'react'

import '../../styles/chat.less'

export default class CommentPublishTime extends Component {
    render() {
        const { publishTime } = this.props
        return(
            <div className="comment-publish-time">{publishTime}</div>
        )
    }
}