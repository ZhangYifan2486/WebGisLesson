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
					center:[120.2072296,30.1900815],
					maxZoom:15,
					minZoom:7,
					zoom:13
				}),
				controls:[]
			});

	let mousePositionCtrl = new ol.control.MousePosition({
		target:'mousePosition',
		projection:'EPSG:4326',
		coordinateFormat:ol.coordinate.createStringXY(5),
		className:'custom-mouse-position'
	});
	map.addControl(mousePositionCtrl);

	return map;
}