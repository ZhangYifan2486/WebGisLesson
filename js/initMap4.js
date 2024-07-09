function mapInit(id){
	
	let projection = new ol.proj.Projection({
		code:'EPSG:4326',
		units:'degrees'
	});
	
	let map = new ol.Map({
				target:id,
				view:new ol.View({
					// center:ol.proj.fromLonLat([120, 30]),
					projection:projection,
					// center:[120, 30],
					center:[120.1772296,30.1900815],
					maxZoom:15,
					minZoom:7,
					zoom:13
				}),
				controls:[]
			});
			
			let tdtveclayer = new ol.layer.Tile({
				title:'天地图影像',
				source: new ol.source.XYZ({
			        url:"http://t0.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=79902e76677506eb643c9547de6f0d2e",
			        wrapX:false
			    })
			});
			map.addLayer(tdtveclayer)
			
			var tdtcialayer = new ol.layer.Tile({
				title:'地图注记',
				source: new ol.source.XYZ({
					url:"http://t0.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=79902e76677506eb643c9547de6f0d2e",
					wrapX:false
					})
					});
			map.addLayer(tdtcialayer)
			
			// 添加滨江区栅格影像
			var wmsLayers = new ol.layer.Image({
				title:'滨江区栅格影像',
				source:new ol.source.ImageWMS({
					url:'http://localhost:8080/geoserver/road/wms',
						params:{
							'FORMAT':'image/png',
							'VERSION':'1.1.1',
							'LAYERS':'road:bingjiang',
							tiled:true
						}
				})
			})
			map.addLayer(wmsLayers)
			
			// 添加滨江区影影响以及道路
			var wmstiledLayers = new ol.layer.Tile({
				title:'wmstile道路',
				source:new ol.source.TileWMS({
					url:'http://localhost:8080/geoserver/road/wms',
						params:{
							'FORMAT':'image/png',
							'VERSION':'1.1.1',
							'LAYERS':'road:roadLayers',
							tiled:true
						}
				})
			})
			
			map.addLayer(wmstiledLayers)
			
			// 添加鹰眼控件
			let tdtshilayer = new ol.layer.Tile({
				title:'天地图影像',
				source: new ol.source.XYZ({
			        url:"http://t0.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=79902e76677506eb643c9547de6f0d2e",
			        wrapX:false
			    })
			});
			var overViewMap = new ol.control.OverviewMap({
						layers:[
							tdtshilayer,
						],
						collapsible:true
					})
			map.addControl(overViewMap);
			
	map.addControl(new ol.control.ZoomSlider());
	map.addControl(new ol.control.Zoom({zoomInTipLabel:'放大',zoomOutTipLabel:'缩小'}));
	map.addControl(new ol.control.ScaleLine());
	map.addControl(new ol.control.FullScreen());
	
	var ZoomToEx = new ol.control.ZoomToExtent({tipLabbel:'初始区域',extent:[120.08573408608399,30.1267384519043,120.26872511391602,30.253424548095705]})
	map.addControl(ZoomToEx);
			
		
	let mousePositionCtrl = new ol.control.MousePosition({
		target:'mousePosition',
		projection:'EPSG:4326',
		coordinateFormat:ol.coordinate.createStringXY(5),
		className:'custom-mouse-position'
	});
	map.addControl(mousePositionCtrl);

	return map;
}