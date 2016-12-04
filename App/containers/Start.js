import React from 'react'

export default class Start extends React.Component {
    componentDidMount(){
        var myLatlng = new sogou.maps.LatLng(39.9952,116.3269);
        var map = new sogou.maps.Map(this.mapDom, {
            zoom: 100,
            center: myLatlng,
            hdMap:true,
            mapTypeId: sogou.maps.MapTypeId.EDUSHIMAP,
            mapControl: false
        });
        var labelOne = new sogou.maps.Label({
            position: myLatlng,
            map: map,
            title: '清华大学'
        });
    }
    componentWillUnmount(){

    }
    go=()=>{
        //let dong = document.getElementById('Dong');
        this.dong.play();
        setTimeout(function(){
            location.href="/chat/";
        }, 500);
    }
    render() {
        return (
            <div className="start-container">
                <div ref={(c)=>this.mapDom = c} className="map_canvas"></div>
                <div className="btn-con">
                    <a href="javascript:;" onClick={this.go} className="btn">Go!</a>
                </div>
                <audio style={{display: 'none'}} src="/App/audio/dongdong.mp3" ref={(c)=>this.dong=c} />
            </div>
        )
    }
}