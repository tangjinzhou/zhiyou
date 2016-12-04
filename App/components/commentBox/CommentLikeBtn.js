import React, { Component } from 'react'

import '../../styles/chat.less'

export default class CommentLikeBtn extends Component {
    render() {
        const { likeNum } = this.props
        return (
            <div className="comment-like-btn">
                <img src={require('./like.png')} onClick={this.clickLikeBtn.bind(this)}/>
                {' '}
                {
                    likeNum != 0 ? <span>{likeNum}</span> : null
                }
            </div>
        )
    }
    clickLikeBtn() {
        console.log('喜欢')
    }
}
