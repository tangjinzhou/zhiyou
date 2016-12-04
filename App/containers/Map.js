import React from 'react'

export default class Map extends React.Component {
    constructor(props){
        super(props);

        // this.state = {
        //     recommendKeyPv: []
        // }
    }

    componentDidMount(){
        this.renderMap();
    }

    renderMap = () => {
        let myLatlng = new sogou.maps.LatLng(39.9952,116.3269);
        // let myPoint = new sogou.maps.Point(12957062,4827187);
        let myOptions = {
            zoom: 50,
            center: myLatlng,
            hdMap: true,
            // mapTypeId: sogou.maps.MapTypeId.EDUSHIMAP,
            mapTypeId: sogou.maps.MapTypeId.ROADMAP,
            mapControl: false
        };
        let map = new sogou.maps.Map(this.mapDom, myOptions);
        let labelOne = new sogou.maps.Label({
            position: myLatlng,
            map: map,
            title: '清华大学'
        });
        this.flightPath(map);
        // this.search(map);
    }

    search (map){
        let request={
            'map':map,
            'what':{
                'keyword':'搜狐网络大厦'
            },
            'range':{
                'boundFlag': 2                                  //当前视野搜索
            }
        };
        let search=new sogou.maps.Search();                     //创建搜索实例
        search.search(request);                                 //进行搜索
        search.setRenderer(new sogou.maps.SearchRenderer());    //在地图上显示结果标记
    }

    flightPath (map){
        //坐标可以是经纬度坐标，也可以是搜狗坐标
        let flightPlanCoordinates = [
            new sogou.maps.LatLng(39.992792,116.326142),
            new sogou.maps.Point(12949589,4835996),
            new sogou.maps.LatLng(39.986017,116.31049)
        ];
        let flightPath = new sogou.maps.Polyline({
          path: flightPlanCoordinates,
          strokeColor: "#0000FF",
          strokeOpacity: 1.0,
          strokeWeight: 6
        });
         
        flightPath.setMap(map);
    }

    go(){

    }

    stop (){

    }

    render() {
        const {style, params: {name}} = this.props;
        return (
            <div className="map-container">
                <div id="MapGuide" ref={(c)=>this.mapDom = c} ></div>
                <div className="tip-container">
                    <div id="bars">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <div className="tip">开始为您导游</div>
                </div>
            </div>
        )
    }
}