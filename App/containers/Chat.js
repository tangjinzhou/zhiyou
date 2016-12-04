import React from 'react'
const date = new Date(),
    nowTime = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

export default class Chat extends React.Component {
    state= {
        display1: 'none',
        display2: 'none',
        display3: 'none',
        display4: 'none',
    }
    componentDidMount() {
        window.setTimeout(()=>{
            this.appear(1);
        }, 3000);
        window.setTimeout(()=>{
            this.appear(2);
        }, 5000);
        window.setTimeout(()=>{
            this.appear(3);
        }, 7000);
        window.setTimeout(()=>{
            this.appear(4);
        }, 9000);
    }
    appear(type) {
        switch(type) {
            case 1 :
                this.setState({
                    display1: 'flex'
                });
                break;
            case 2 :
                this.setState({
                    display2: 'flex'
                });
                break;
            case 3 :
                this.setState({
                    display3: 'flex'
                });
                break;
            case 4 :
                this.setState({
                    display4: 'flex'
                });
                break;
        }
    }
    render() {
        const {style, params: {name}} = this.props,
            {display1,display2, display3, display4} = this.state;
        return (
            <div className="chat-container">
                <div className="chat-time" style={{display: display1}}>
                    <span>{nowTime}</span>
                </div>
                <div className="chat-content-right" style={{display: display1}}>
                    <div className="chat-msg">
                        <span>我想换一个讲解</span>
                    </div>
                    <div className="chat-img">
                        <img src="/App/img/group.png" />
                    </div>
                </div>
                <div className="chat-content-left" style={{display: display2}}>
                    <div className="chat-img">
                        <img src="/App/img/group.png" />
                    </div>
                    <div className="chat-msg">
                        <span>好的，已为您切换到高晓松的讲解。</span><br/>
                    </div>
                </div>
                <div className="chat-content-right" style={{display: display3}}>
                    <div className="chat-msg">
                        <span>附近有啥吃午饭的地方么？</span>
                    </div>
                    <div className="chat-img">
                        <img src="/App/img/group.png" />
                    </div>
                </div>
                <div className="chat-content-left" style={{display: display4}}>
                    <div className="chat-img">
                        <img src="/App/img/group.png" />
                    </div>
                    <div className="chat-msg">
                        <span>你现在是不是该吃午饭了啊?</span><br/>
                        <a href="http://www.sogou.com">附近美食</a>
                    </div>
                </div>

            </div>
        )
    }
}
