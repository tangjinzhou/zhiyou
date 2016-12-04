import React, { Component } from 'react'

import '../styles/info.less'

import CommentBanner from '../components/commentBanner/CommentBanner'
import Comment from '../components/commentBox/Comment'

export default class Chat extends Component {
    constructor(props) {
        super(props)
        this.commentList = [
            {
                logoSrc:'http://www.atsbv.com/uploads/allimg/120830/1A31CR6-0.png',
                publishTime:'3天前',
                likeNum:5,
                userName:'用户名字',
                msg:'aa',
                containsAudio:0
            },
            {
                logoSrc:'http://www.techug.com/wordpress/wp-content/uploads/2016/10/1430389374744961.jpg',
                publishTime:'3天前',
                likeNum:5,
                userName:'用户名字',
                msg:'这是信息主体这是信息主体这是信息主体这是信息主体这是信息主体这是信息主体',
                containsAudio:1
            },{
                logoSrc:'http://www.techug.com/wordpress/wp-content/uploads/2016/10/1430389374744961.jpg',
                publishTime:'3天前',
                likeNum:5,
                userName:'用户名字',
                msg:'这是信息主体这是信息主体这是信息主体这是信息主体这是信息主体这是信息主体',
                containsAudio:1
            },{
                logoSrc:'http://www.techug.com/wordpress/wp-content/uploads/2016/10/1430389374744961.jpg',
                publishTime:'3天前',
                likeNum:0,
                userName:'用户名字',
                msg:'这是信息主体这是信息主体这是信息主体这是信息主体这是信息主体这是信息主体',
                containsAudio:0
            }
        ]
    }
    render() {
        const {style, params: {name}} = this.props;

        return (
            <div className="info-container">
                <CommentBanner imgSrc="http://s.visitbeijing.com.cn/uploadfile/2013/0225/20130225063953566.jpg"/>
                <div>
                    <span>评论列表：</span>
                    {
                        this.commentList.map((comment, index) =>
                            <Comment
                                logoSrc={comment.logoSrc}
                                publishTime={comment.publishTime}
                                likeNum={comment.likeNum}
                                userName={comment.userName}
                                msg={comment.msg}
                                key={index}
                                containsAudio={comment.containsAudio}
                            />
                        )
                    }
                </div>
            </div>
        )
    }
}