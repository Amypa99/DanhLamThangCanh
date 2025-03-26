// var json_Thngcnh_2 = {"type":"FeatureCollection","name":"Thngcnh_2","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"Tên_điểm":"Vịnh Hạ Long","Latitude":20.9101,"Longitude":107.1839,"image_path":"https://halongbay.com.vn/Data/files/v%E1%BB%8Bnh%20H%E1%BA%A1%20Long%20t%E1%BB%AB%20tr%C3%AAn%20cao%20_%20Nh%C3%A2n%20d%C3%A2n%205.png"},"geometry":{"type":"Point","coordinates":[107.1839,20.9101]}},{"type":"Feature","properties":{"Tên_điểm":"Phố cổ Hội An","Latitude":15.8801,"Longitude":108.3383,"image_path":"https://i2.ex-cdn.com/crystalbay.com/files/content/2024/06/03/du-lich-hoi-an-1-1542.jpg"},"geometry":{"type":"Point","coordinates":[108.3383,15.8801]}}]}

var map = L.map('map', {
    zoomControl:false, maxZoom:28, minZoom:1
}).fitBounds([[18.820186057253608,106.19279327098556],[21.460936057253633,109.39253414689799]]);

var layer_VietbandoMaps_0 = L.tileLayer('http://images.vietbando.com/ImageLoader/GetImage.ashx?Ver=2016&LayerIds=VBD&Y={y}&X={x}&Level={z}', {
    pane: 'pane_VietbandoMaps_0',
    opacity: 1.0,
    attribution: '',
    minZoom: 1,
    maxZoom: 28,
});

var layer_GoogleSatelliteHybrid_1 = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
    pane: 'pane_GoogleSatelliteHybrid_1',
    opacity: 1.0,
    attribution: '',
    minZoom: 1,
    maxZoom: 28,
});

var point1 = L.circle([20.9101, 107.1839], radis=10000).bindPopup("<div class='img_popup'>Vịnh Hạ Long<img src='https://halongbay.com.vn/Data/files/v%E1%BB%8Bnh%20H%E1%BA%A1%20Long%20t%E1%BB%AB%20tr%C3%AAn%20cao%20_%20Nh%C3%A2n%20d%C3%A2n%205.png' style='width:100%'></div>", {minwidth:200})
var point2 = L.marker([15.8801, 108.3383]).bindPopup("<div class='img_popup'>Phố cổ Hội An<img src='https://i2.ex-cdn.com/crystalbay.com/files/content/2024/06/03/du-lich-hoi-an-1-1542.jpg' style='width:100%'</div>", {minwidth:450})
var point_group = L.layerGroup([point1, point2])

// Tạo control panel
var baseLayer = {
    "Google Satellite Hybrid": layer_GoogleSatelliteHybrid_1,
    "Vietbando Maps": layer_VietbandoMaps_0
}
var overlays = {
    "Danh lam thắng cảnh": point_group
}
var controlLayer = L.control.layers(baseLayer, overlays, {
    position: "topright",
    collapse: true // ẩn đi khi di chuột vào mới hiện ra
})
map.addControl(controlLayer)