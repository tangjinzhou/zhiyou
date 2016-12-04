import React from 'react'

export default class Chat extends React.Component {
    render() {
        const {style, params: {name}} = this.props;
        return (
            <div className="chat-container">
                <div className="chat-time">
                    <span>2016-11-17 18:26</span>
                </div>
                <div className="chat-content-right">
                    <div className="chat-msg">
                        <span>我想换一个讲解</span>
                    </div>
                    <div className="chat-img">
                        <img src="/App/img/group.png" />
                    </div>
                </div>
                <div className="chat-content-left">
                    <div className="chat-img">
                        <img src="/App/img/group.png" />
                    </div>
                    <div className="chat-msg">
                        <span>好的，已为您切换到高晓松的讲解。</span><br/>
                        <a href="https://www.sogou.com">高晓松的讲解</a>
                    </div>
                </div>
                <div className="chat-content-right">
                    <div className="chat-msg">
                        <span>附近有啥吃午饭的地方么？</span>
                    </div>
                    <div className="chat-img">
                        <img src="/App/img/group.png" />
                    </div>
                </div>
                <div className="chat-content-left">
                    <div className="chat-img">
                        <img src="/App/img/group.png" />
                    </div>
                    <div className="chat-msg">
                        <span>你现在是不是该吃午饭了啊?</span><br/>
                        <a href="https://www.sogou.com">这是适合吃饭的地方</a>
                    </div>
                </div>

            </div>
        )
    }
}
