function addEvent(element,layer){
	element.onclick = function(){
		if(element.checked)
		{
			layer.setVisible(true);
		}else
		{
			layer.setVisible(false);
		}
	}
}


/**
 * @param {Object} element
 * @param {Object} text
 */
function setInnerText(element,text){
	if(typeof element.textContent == 'string')
	{element.textContent = text;
	}else
	{element.innerText = text;
	}
}


/**
 * @param {Object} map 地图对象
 * @param {Object} id 图层列表id
 */

function loadlayerControl(map,id){
	//ul父标签获取以及获取图层
	var treeContent = document.getElementById(id);
	var layers = map.getLayers();
	//遍历图层循环
	for(var i = 0;i<layers.getLength();i++)
	{
		//获取图层以及名称以及显示状态
		var layer = layers.item(i);
		var layerName = layer.get('title');
		var layerVisibility = layer.getVisible();
		// console.log(layerVisibility)
		//创建li第一子级标签
		var Eleli = document.createElement('li');
		treeContent.appendChild(Eleli);
		//创建input选项父级为li
		var Elelinput = document.createElement('input');
		Elelinput.type = 'checkbox';
		// 添加显示
		Elelinput.value = layer.getVisible();
		Eleli.appendChild(Elelinput);
		//创建lable并且赋值名字
		var Elelable = document.createElement('label');
		Elelable.className = 'layerItem';
		setInnerText(Elelable,layerName)
		Eleli.appendChild(Elelable)
		//设置默认为true
		if(!Elelinput.checked)
		{
			Elelinput.checked = true;
		}
		Elelinput.checked = layer.getVisible();
		//调用点击事件
		addEvent(Elelinput,layer)
	}
}