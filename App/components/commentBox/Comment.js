import React, { Component } from 'react'

import CommentUserLogo from './CommentUserLogo'
import CommentUserName from './CommentUserName'
import CommentLikeBtn from './CommentLikeBtn'
import CommentMsg from './CommentMsg'
import CommentPublishTime from './CommentPublishTime'
import CommentAudioPlay from './CommentAudioPlay'
export default class Comment extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {logoSrc, publishTime, likeNum, userName, msg, containsAudio} = this.props
        return(
            <div className="comment-box">
                <CommentUserLogo logoSrc={logoSrc}/>
                <div className="comment-box-left">
                    <div className="comment-box-left-header">
                        <CommentUserName userName={userName}/>
                        <CommentLikeBtn likeNum={likeNum}/>
                    </div>
                    <div>
                        <CommentMsg msg={msg}/>
                    </div>
                    <div>
                        <CommentPublishTime publishTime={publishTime}/>
                    </div>
                </div>
                {
                    containsAudio == 1?<CommentAudioPlay/>:null
                }
            </div>
        )
    }
}