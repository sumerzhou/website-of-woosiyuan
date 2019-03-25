//百度地图API
function mapLoad() {
    // 创建地图实例
    var map = new BMap.Map("container");
    // 创建点坐标
    var point = new BMap.Point(120.081385,30.322599);//120.070385,30.318149
    // 初始化地图，设置中心点坐标和地图级别
    map.centerAndZoom(point, 15);

    map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
    map.addControl(new BMap.OverviewMapControl({isOpen:1}));  //缩略图控件
    map.addControl(new BMap.NavigationControl());    //缩放控件
    map.addControl(new BMap.ScaleControl ());      //比例尺控件

    map.enableScrollWheelZoom(true);             //开启鼠标滚轮缩放
    var marker = new BMap.Marker(point);  // 创建标注
    map.addOverlay(marker);               // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_DROP); //跳动的动画
    var opts = {
        width : 200,     // 信息窗口宽度
        height: 40,     // 信息窗口高度
        title : "" , // 信息窗口标题
        enableMessage:false//设置允许信息窗发送短息
    };
    var infoWindow = new BMap.InfoWindow("地址：杭州市西湖区紫萱路158号西城博司6幢4楼",opts);    // 创建信息窗口对象
    map.openInfoWindow(infoWindow,point);                 //开启信息窗口
    marker.addEventListener("click", function(){
        map.openInfoWindow(infoWindow,point);
    });

}
