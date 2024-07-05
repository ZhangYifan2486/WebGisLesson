//添加6个图层,参数为地图
function initJsonLayer(map){
    let layerArr = []
    // 添加历史内涝区域图层
    let cityWaterArea = new ol.layer.Vector({
        title:'历史内涝区域',
        source:new ol.source.Vector({
            format:new ol.format.GeoJSON(),
            url:'../data/历史内涝区域.json'
        }),
        style:new ol.style.Style({
            stroke:new ol.style.Stroke({
                color:'#ff0000',
                width:5
            })
        }),
        visible:false
    })

    //添加历史内涝点
    let cityWaterPoint = new ol.layer.Vector({
        title:'历史内涝点',
        source:new ol.source.Vector({
            format:new ol.format.GeoJSON(),
            url:'../data/历史内涝点.json'
        }),
        style:new ol.style.Style({
            image:new ol.style.Icon({
        anchor:[0.5, 60],
        anchorOrigin:'top-right',
        anchorXUnits:'fraction',
        anchorYUnits:'pixels',
        scale:0.1,
        opacity:0.75,
        src:'../image/城市内涝应急.png'
    })
        }),
        visible:false

    })

    // 住宅地下空间
    let homeUnderGround = new ol.layer.Vector({
        title:'住宅地下空间',
        source:new ol.source.Vector({
            format:new ol.format.GeoJSON(),
            url:'../data/住宅地下空间.json'
        }),
        style:new ol.style.Style({
            image:new ol.style.Icon({
                anchor:[0.5, 60],
                anchorOrigin:'top-right',
                anchorXUnits:'fraction',
                anchorYUnits:'pixels',
                scale:0.1,
                opacity:0.75,
                src:'../image/地下室01.png'
            })
        }),
        visible:false
    })

    //城市洼地
    let cityLowArea = new ol.layer.Vector({
        title:'',
        source:new ol.source.Vector({
            format:new ol.format.GeoJSON(),
            url:'../data/城市洼地.json'
        }),
        style:new ol.style.Style({
            stroke:new ol.style.Stroke({
                color:'#ffffff',
                width:5
            })
        }),
        visible:false
    })

    //救援队
    let saveTeam = new ol.layer.Vector({
        title:'救援队',
        source:new ol.source.Vector({
            format:new ol.format.GeoJSON(),
            url:'../data/救援队.json'
        }),
        style:new ol.style.Style({
            image:new ol.style.Icon({
                anchor:[0.5, 60],
                anchorOrigin:'top-right',
                anchorXUnits:'fraction',
                anchorYUnits:'pixels',
                scale:0.1,
                opacity:1,
                src:'../image/应急救援队伍.png'
            })
        }),
        visible:false


    })

    //救援物资仓储点
    let saveMaterial = new ol.layer.Vector({
        title:'救援物资仓储点',
        source:new ol.source.Vector({
            format:new ol.format.GeoJSON(),
            url:'../data/救援物资仓储点.json'
        }),
        style:new ol.style.Style({
            image:new ol.style.Icon({
                anchor:[0.5, 60],
                anchorOrigin:'top-right',
                anchorXUnits:'fraction',
                anchorYUnits:'pixels',
                scale:0.1,
                opacity:0.75,
                src:'../image/救援物资.png'
            })
        }),
        visible:false
    })

    //将图层存入数组
    layerArr.push(cityWaterArea,cityWaterPoint,homeUnderGround,cityLowArea,saveTeam,saveMaterial)


    map.addLayer(cityWaterArea)
    map.addLayer(cityWaterPoint)
    map.addLayer(homeUnderGround)
    map.addLayer(cityLowArea)
    map.addLayer(saveTeam)
    map.addLayer(saveMaterial)

    return layerArr


}