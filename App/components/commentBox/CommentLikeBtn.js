import React, { Component } from 'react'

import '../../styles/chat.less'

export default class CommentLikeBtn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            likeNum: props.likeNum
        }
    }
    render() {
        //const { likeNum } = this.props
        return (
            <div className="comment-like-btn">
                <img src={require('./like.png')} onClick={this.clickLikeBtn.bind(this)}/>
                {' '}
                {
                    this.state.likeNum != 0 ? <span>{this.state.likeNum}</span> : null
                }
            </div>
        )
    }
    clickLikeBtn() {
        this.setState({
            likeNum:this.state.likeNum+1
        })
    }
}
