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
    go(){
        location.href = '#/map'
        location.reload()
    }
    render() {
        return (
            <div className="start-container">
                <div ref={(c)=>this.mapDom = c} className="map_canvas"></div>
                <div className="btn-con">
                    <a href="javascript:;" onClick={this.go} className="btn">Go!</a>
                </div>
            </div>
        )
    }
}