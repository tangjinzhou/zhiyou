import React from 'react';
const date = new Date(),
    nowTime = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

export default class Chat extends React.Component {
    state= {
        display1: 'none',
        display2: 'none',
        display3: 'none',
        display4: 'none',
        display5: 'none',
    }

    componentDidMount() {
        window.setTimeout(()=>{
            this.appear(1);
        }, 0);
        window.setTimeout(()=>{
            this.appear(2);
        }, 2000);
        window.setTimeout(()=>{
            this.appear(3);
        }, 4000);
        window.setTimeout(()=>{
            this.appear(4);
        }, 6000);
        window.setTimeout(()=>{
            this.appear(5);
        }, 8000);

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
            case 5 :
                window.scroll(0,300);
                this.setState({
                    display5: 'flex'
                });
                break;
            default:
                return;
        }
    }
    render() {
        const {style, params: {name}} = this.props,
            {display1,display2, display3, display4, display5, display6} = this.state;
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
                        <img src="/App/img/user.png" />
                    </div>
                </div>
                <div className="chat-content-left" style={{display: display2}}>
                    <div className="chat-img">
                        <img src="/App/img/xiaozhi.png" />
                    </div>
                    <div className="chat-msg">
                        <span>好的，已为您切换到高晓松的讲解。</span><br/>
                    </div>
                </div>
                <div className="chat-content-right" style={{display: display3}}>
                    <div className="chat-msg">
                        <span>附近厕所怎么走？</span>
                    </div>
                    <div className="chat-img">
                        <img src="/App/img/user.png" />
                    </div>
                </div>
                <div className="chat-content-left" style={{display: display4}}>
                    <div className="chat-img">
                        <img src="/App/img/xiaozhi.png" />
                    </div>
                    <div className="chat-msg">
                        <span>已为您开始导航</span><br/>
                    </div>
                </div>

                <div className="chat-content-left" style={{display: display5}}>
                    <div className="chat-img">
                        <img src="/App/img/xiaozhi.png" />
                    </div>
                    <div className="chat-msg">
                        <span>当前位置是极佳拍照地点，已为您推荐优秀照片模板，拍张照吧！</span><br/>
                        <img src="/App/img/tsinghua1.png" style={{width:'240px', height: '240px'}}/>
                        <img src="/App/img/tsinghua2.png" style={{width:'240px', height: '240px'}}/>

                    </div>
                </div>
                <div className="chat-opt">
                    <i className="biz-icon biz-icon-microphone" aria-hidden="true" ></i>
                </div>

            </div>
        )
    }
}
