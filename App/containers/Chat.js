import React from 'react'

export default class Chat extends React.Component {
    render() {
        const {style, params: {name}} = this.props;
        return (
            <div className="chat-container">
                <div className="chat-time">
                    <span>2016-11-17 18:26</span>
                </div>
                <div className="chat-content-left">
                    <div className="chat-img">
                        <img src="/App/img/group.png" />
                    </div>
                    <div className="chat-msg">
                        <span>你现在是不是该吃午饭了啊，该吃午饭了该吃午饭了该吃午饭了</span><br/>
                        <a href="https://github.com/huoyanwuzhe629">这是适合吃饭的地方</a>
                    </div>
                </div>
                <div className="chat-content-right">
                    <div className="chat-msg">
                        <span>你现在是不是该吃午饭了啊，该吃午饭了该吃午饭了该吃午饭了</span>
                    </div>
                    <div className="chat-img">
                        <img src="/App/img/group.png" />
                    </div>
                </div>
            </div>
        )
    }
}
