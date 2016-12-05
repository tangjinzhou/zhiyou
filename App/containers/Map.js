import React from 'react'

export default class Map extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            points: []
        }
        this.points = [];
        this.map = null;
    }

    componentDidMount(){
        this.renderMap();
    }

    // componentDidUpdate (){
    //     this.flightPath(this.map);
    // }

    renderMap () {
        let myLatlng = new sogou.maps.Point(12949019.7, 4838179.33);
        let myOptions = {
            zoom: 17,
            center: myLatlng,
            hdMap: true,
            draggable: false,
            mapTypeId: sogou.maps.MapTypeId.EDUSHIMAP,
            mapControl: false
        };
        this.map = new sogou.maps.Map(this.mapDom, myOptions);
        let labelOne = new sogou.maps.Label({
            position: myLatlng,
            map: this.map,
            title: '清华大学'
        });
        this.getPoint(this.map);
        this.flightPath(this.map);
        this.guideShow(this.map);
        // this.search(map);

        // this.music.play();
    }

    getPoint (map) {
        let _this = this;
        sogou.maps.event.addListener(map, 'click', function(event) {
            //获取点击位置的坐标
            let nextPoint = 'new sogou.maps.Point(' + event.point.x + ', ' + event.point.y + '),';
            _this.points.push(nextPoint);
            console.log(nextPoint);
            placeMarker(event.point);
          });

        function placeMarker(location) {
            let clickedLocation = location;
            let marker = new sogou.maps.Marker({
                position: location,
                map: map
            });

            map.setCenter(location);
        }
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
            new sogou.maps.Point(12949613.75, 4837423.62),
            new sogou.maps.Point(12949609.52, 4837522.45),
            new sogou.maps.Point(12949603.2, 4837558.8),
            new sogou.maps.Point(12949617.17, 4837580.51),
            new sogou.maps.Point(12949607.38, 4837683.76),
            new sogou.maps.Point(12949610.94, 4837704.98),
            new sogou.maps.Point(12949606.28, 4838011.28),
            new sogou.maps.Point(12949604.16, 4838043.5),
            new sogou.maps.Point(12949593.16, 4838038.21),
            new sogou.maps.Point(12949582.63, 4838036.76),
            new sogou.maps.Point(12949568.51, 4838036.69),
            new sogou.maps.Point(12949557.39, 4838037.98),
            new sogou.maps.Point(12949539.38, 4838040.68),
            new sogou.maps.Point(12949517.66, 4838051.35),
            new sogou.maps.Point(12949501.91, 4838064.72),
            new sogou.maps.Point(12949489.03, 4838086.03),
            new sogou.maps.Point(12949481.35, 4838107.58),
            new sogou.maps.Point(12949481.75, 4838122.24),
            new sogou.maps.Point(12949399.32, 4838125),
            new sogou.maps.Point(12949353.62, 4838128.12),
            new sogou.maps.Point(12949249.25, 4838174.02),
            new sogou.maps.Point(12949074.18, 4838169.18),
            new sogou.maps.Point(12949039.61, 4838163.47),
            new sogou.maps.Point(12948821.93, 4838171.59),
            new sogou.maps.Point(12948748.18, 4838164.71),
            new sogou.maps.Point(12948663.43, 4838160.08),
            new sogou.maps.Point(12948653.95, 4838189.87),
            new sogou.maps.Point(12948633.42, 4838195.05),
            new sogou.maps.Point(12948632.39, 4838327.29),
            new sogou.maps.Point(12948674.26, 4838323.65),
            new sogou.maps.Point(12948722.95, 4838329.43),
            new sogou.maps.Point(12948707.85, 4838494.36),
            new sogou.maps.Point(12948694.97, 4838515.67),
            new sogou.maps.Point(12948654.23, 4838517.11),
            new sogou.maps.Point(12948642.33, 4838515.94),
            new sogou.maps.Point(12948624.76, 4838552.62),
            new sogou.maps.Point(12948608.56, 4838547.09),
            new sogou.maps.Point(12948595.47, 4838536.33),
            new sogou.maps.Point(12948584.84, 4838526.38),
            new sogou.maps.Point(12948568.14, 4838532.09),
            new sogou.maps.Point(12948558.31, 4838551.46),
            new sogou.maps.Point(12948565.36, 4838562.8),
            new sogou.maps.Point(12948579.35, 4838569.44),
            new sogou.maps.Point(12948597.23, 4838573.32),
            new sogou.maps.Point(12948604.21, 4838587.95),
            new sogou.maps.Point(12948602.1, 4838605.09),
            new sogou.maps.Point(12948593.04, 4838626.93),
            new sogou.maps.Point(12948589.32, 4838642.43),
            new sogou.maps.Point(12948585.42, 4838652.73),
            new sogou.maps.Point(12948570.77, 4838652.12),
            new sogou.maps.Point(12948548.69, 4838652.37),
            new sogou.maps.Point(12948498.93, 4838653.04),
            new sogou.maps.Point(12948466.47, 4838658.69),
            new sogou.maps.Point(12948360.71, 4838662.95),
            new sogou.maps.Point(12948353.78, 4838603.1),
            new sogou.maps.Point(12948363.08, 4838568.1),
            new sogou.maps.Point(12948347.55, 4838463.49),
            new sogou.maps.Point(12948339.54, 4838402.55),
            new sogou.maps.Point(12948338.29, 4838339.24),
            new sogou.maps.Point(12948364.52, 4838193.98),
            new sogou.maps.Point(12948375.03, 4838039.49),
            new sogou.maps.Point(12948058.09, 4838020.72),
            new sogou.maps.Point(12948037.38, 4838035.77),
            new sogou.maps.Point(12947982.97, 4838063.59),
            new sogou.maps.Point(12947964.18, 4838135.91),
            new sogou.maps.Point(12947964.74, 4838170.85),
            new sogou.maps.Point(12947964.52, 4838203.33),
            new sogou.maps.Point(12947973.94, 4838233.84),
            new sogou.maps.Point(12948027.62, 4838215.34),
            new sogou.maps.Point(12948063.1, 4838201.86),
            new sogou.maps.Point(12948135.52, 4838163.8),
            new sogou.maps.Point(12948172.3, 4838168.4),
            new sogou.maps.Point(12948204.35, 4838176.59),
            new sogou.maps.Point(12948228.86, 4838192.22),
            new sogou.maps.Point(12948263.08, 4838244.53),
            new sogou.maps.Point(12948245.94, 4838273.26),
            new sogou.maps.Point(12948205.95, 4838307.32),
            new sogou.maps.Point(12948162.04, 4838317.28)
        ];
        let flightPath = new sogou.maps.Polyline({
          path: flightPlanCoordinates,
          // strokeColor: "#F0FF77",
          strokeColor: "#6eff00",
          strokeOpacity: 1.0,
          strokeWeight: 10
        });
         
        flightPath.setMap(map);
    }

    guideShow (map){
        let myPoint = new sogou.maps.Point(12948656, 4838204.52);
        let image = new sogou.maps.MarkerImage('/App/img/sec_door.jpg',
            // 标记图标宽20像素，高32像素
            new sogou.maps.Size(550, 367),
            // 原点在图片左上角，设为(0,0)
            new sogou.maps.Point(0,0),
            // 锚点在小旗的旗杆脚上，相对图标左上角位置为(0,32)
            new sogou.maps.Point(0, 367),
            // 如果是合并的图片，必须设置此项，指定图片大小
            // 如果是一张图片一个图标，此项可缺省。
            new sogou.maps.Size(20, 32));
        var shadow = new sogou.maps.MarkerImage('http://api.go2map.com/maps/images/v2.0/flag_shadow.png',
            //阴影图标宽高
            new sogou.maps.Size(37, 32),
            new sogou.maps.Point(0,0),
            new sogou.maps.Point(0, 32));
        /*************************************
         *  MarkerShape  对象规范 示例         *
         *************************************/
        //shape定义点击的图标区域
        //图片即使透明也是矩形的
        //设置shape后，可以看到鼠标放在旗杆旁的右侧是不变小手的
        let shape = {
            coord: [7, 8, 15],
            type: 'circle'
        };
        /*************************************
         *      MarkerOptions 对象规范 示例    *
         *************************************/
        let markerOptions={
            //设置是否在鼠标悬停时显示Label
            disableLabel: true,
            //如果为 true，则可拖动标记。默认值为 false。
            draggable: false,
            //前景的默认图标 icon和icons使用其中一个即可
            //如果同时存在，优先使用icons
            //取值类型 String|MarkerImage|MarkerStyle
            //可以是一个图片地址，也可以是MarkerImage或者MarkerStyle对象
            icon: image,
            //0 前景的默认图标，1 前景鼠标悬停时的图标
            //icons:[],
            //Marker的编号标识。
            id:"ID00001",
            //设置Label对象的参数。
            //设置成初始即可见，相对于Marker居下对齐，
            label:{ visible: true, align: "BOTTOM"},
            //显示标记的地图。
            map: map,
            //标记位置。必填。
            position: myPoint,
            //阴影图像。shadow和shadows使用其中一个即可
            //如果同时存在，优先使用shadows
            //取值类型 String|MarkerImage|MarkerStyle
            //可以是一个图片地址，也可以是MarkerImage或者MarkerStyle对象
            // shadow:shadow,
            //0 阴影默认图像，1 阴影鼠标悬停时图像。
            //shadows:[],
            //用于拖动/点击的图像地图区域定义。
            shape: shape,
            //Label文本或者鼠标悬停时显示的tip。
            title:"二校门",
            //如果为 true，则显示标记。默认为true
            visible: true,
            //叠加顺序
            zIndex: 0
        };
        var marker = new sogou.maps.Circle(markerOptions);
    }

    detailShow (){

    }

    goChat = () => {
        this.dong.play();
        setTimeout(function(){
            location.href="/chat/";
        }, 500);
    }

    playMusic = () => {
        this.music.play();
    }

    // echo = () => {
    //     console.log(JSON.stringify(this.points, null,4));
    //     console.log(this.map);
    //     this.flightPath(this.map);
    // }

    render() {
        const {style, params: {name}} = this.props;
        return (
            <div className="map-container" onClick={this.playMusic}>
                <audio src="/App/audio/music.m4a" id="backAudio" ref={(c)=>this.music = c}/>
                <div id="MapGuide" ref={(c)=>this.mapDom = c} ></div>
                <a id="ImgShow1" className="imgShow" href="/info/1"></a>
                <a id="ImgShow2" className="imgShow" href="/info/2"></a>
                <a id="ImgShow3" className="imgShow" href="/info/3"></a>
                <div className="tip-container">
                    <a id="bars" href="javascript:;" onClick={this.goChat}>
                        <audio src="/App/audio/dongdong.mp3" id="Dong" ref={(c)=>this.dong = c}/>
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
                    </a>
                    <div className="tip">正在为您导游</div>
                </div>
            </div>
        )
    }
}