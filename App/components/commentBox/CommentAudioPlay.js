/**
 * Created by realzbc on 12/4/16.
 */
import React, { Component } from 'react'

import '../../styles/info.less'

export default class CommentAudioPlay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playStatus: 1
        }
    }
    render() {
        //1点击后播放2加载3点击后暂停
        return(
            <div onClick={this.audioControl.bind(this)} className="comment-audio-play">
                {
                    this.state.playStatus === 1 ?
                        <img src={require('./play.png')}/>
                        :
                        (this.state.playStatus === 2? <img src={require('./loading.png')}/> :<img src={require('./pause.png')}/>)
                }
            </div>
        )
    }
    audioControl() {
        if (this.state.playStatus === 1) {
            this.setState({
                playStatus: 2
            })
            setTimeout(function () {
                this.setState({
                    playStatus: 3
                })
            }.bind(this),300)
        }
        if (this.state.playStatus === 3) {
            this.setState({playStatus:1})
        }
    }
}