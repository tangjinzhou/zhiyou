import React from 'react'

export default class Start extends React.Component {
    componentDidMount(){
        var myLatlng = new sogou.maps.LatLng(39.9952,116.3269);
        var map = new sogou.maps.Map(this.mapDom, {
            zoom: 50,
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
    render() {
        return (
            <div className="start-container">
                <div ref={(c)=>this.mapDom = c} className="map_canvas"></div>
                <a href="#/map" className="btn">Go!</a>
            </div>
        )
    }
}