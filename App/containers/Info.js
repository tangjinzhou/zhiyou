import React, { Component } from 'react'

import '../styles/info.less'

import CommentBanner from '../components/commentBanner/CommentBanner'
import Comment from '../components/commentBox/Comment'

export default class Info extends Component {
    constructor(props) {
        super(props)

        this.data = [
            {},
            {
                bannerSrc:require('../img/logosrc1.jpg'),
                commentList:[
                    {
                        logoSrc:require('../img/icon1.jpg'),
                        publishTime:'1天前',
                        likeNum:5,
                        userName:'小妞悠然',
                        msg:'蒙民伟音乐厅和新清华学堂什么关系？我要是去蒙民伟音乐厅是从哪里进去，从新清华学堂的门进去么',
                        containsAudio:0
                    },{
                        logoSrc:require('../img/icon2.jpg'),
                        publishTime:'2天前',
                        likeNum:5,
                        userName:'镌凌JL',
                        msg:'几乎没有节目，去的话还要证件，一个不很亲民的音乐厅。校内学生的话到时可以买打折票。另外里头的环境真心好，肯定是花了',
                        containsAudio:1
                    }
                ]
            },{
                bannerSrc:require('../img/logosrc2.jpg'),
                commentList:[
                    {
                        logoSrc:require('../img/icon1.jpg'),
                        publishTime:'1天前',
                        likeNum:5,
                        userName:'小妞悠然',
                        msg:'二校门为清华最早的主校门，始建于1909年',
                        containsAudio:1
                    },{
                        logoSrc:require('../img/icon2.jpg'),
                        publishTime:'2天前',
                        likeNum:5,
                        userName:'镌凌JL',
                        msg:'几1933年，校园扩建，园墙外移，有了新的大门（即西校门）。此后，这座最早的校门就被称之为二校门。春夏秋冬，年年岁岁，时光荏苒，矗立在校园主干道上的二校门，在风雨中，默默见证着清华大学的历史与发展。它不仅仅是清华园的鲜明标志，更是长期以来清华人勤奋求实、荣辱不惊之品格的象征。',
                        containsAudio:1
                    }
                ]
            },{
                bannerSrc:require('../img/logosrc3.jpg'),
                commentList:[
                    {
                        logoSrc:require('../img/icon1.jpg'),
                        publishTime:'1天前',
                        likeNum:5,
                        userName:'小妞悠然',
                        msg:'古董建筑，文艺色彩浓重。见证了一批又一批的清华学子。',
                        containsAudio:1
                    },{
                        logoSrc:require('../img/icon2.jpg'),
                        publishTime:'2天前',
                        likeNum:5,
                        userName:'镌凌JL',
                        msg:'大礼堂位于清华二校门以北，大草坪的正北端古城堡风格的大圆顶，门前有四根汉白玉大柱子柱。体设计规范而大气，充满庄严的感觉。大礼堂现在作为“清华大学早期建筑”的一部分，被列为全国重点文物保护单位',
                        containsAudio:1
                    }
                ]
            }
        ]
    }
    render() {
        const {style, params: {name}} = this.props;

        return (
            <div className="info-container">
                <CommentBanner imgSrc={this.data[name].bannerSrc}/>
                <div>
                    <span>评论列表：</span>
                    {
                        this.data[name].commentList.map((comment, index) =>
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