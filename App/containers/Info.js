import React, { Component } from 'react'

import '../styles/info.less'

import CommentBanner from '../components/commentBanner/CommentBanner'
import Comment from '../components/commentBox/Comment'

export default class Chat extends Component {
    constructor(props) {
        super(props)
        this.commentList = [
            {
                logoSrc:'http://www.techug.com/wordpress/wp-content/uploads/2016/10/1430389374744961.jpg',
                publishTime:'3天前',
                likeNum:5,
                userName:'用户名字',
                msg:'这是信息主体这是信息主体这是信息主体这是信息主体这是信息主体这是信息主体'
            },
            {
                logoSrc:'http://www.techug.com/wordpress/wp-content/uploads/2016/10/1430389374744961.jpg',
                publishTime:'3天前',
                likeNum:5,
                userName:'用户名字',
                msg:'这是信息主体这是信息主体这是信息主体这是信息主体这是信息主体这是信息主体'
            },{
                logoSrc:'http://www.techug.com/wordpress/wp-content/uploads/2016/10/1430389374744961.jpg',
                publishTime:'3天前',
                likeNum:5,
                userName:'用户名字',
                msg:'这是信息主体这是信息主体这是信息主体这是信息主体这是信息主体这是信息主体'
            },{
                logoSrc:'http://www.techug.com/wordpress/wp-content/uploads/2016/10/1430389374744961.jpg',
                publishTime:'3天前',
                likeNum:5,
                userName:'用户名字',
                msg:'这是信息主体这是信息主体这是信息主体这是信息主体这是信息主体这是信息主体'
            }
        ]
    }
    render() {
        const {style, params: {name}} = this.props;

        return (
            <div className="info-container">
                <CommentBanner imgSrc="https://www.sogou.com/doodle/2016/billboard/images/logo_billboard.gif"/>
                <div>
                    {
                        this.commentList.map((comment, index) =>
                            <Comment
                                logoSrc={comment.logoSrc}
                                publishTime={comment.publishTime}
                                likeNum={comment.likeNum}
                                userName={comment.userName}
                                msg={comment.msg}
                                key={index}
                            />
                        )
                    }
                </div>
            </div>
        )
    }
}