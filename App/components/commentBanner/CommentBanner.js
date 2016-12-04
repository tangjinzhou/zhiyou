import React, { Component } from 'react'

import '../../styles/chat.less'

export default class CommentBanner extends Component {
    render() {
        const { imgSrc } = this.props
        return (
            <div className="comment-banner">
                <img src={imgSrc}/>
            </div>
        )
    }
}
