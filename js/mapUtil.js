//图层控制显示
function addChangeEvent(i){
	if(layerArr[i].getVisible() == false){
		for (let j = 0; j < layerArr.length; j++) {
			layerArr[j].setVisible(false)
		}
		layerArr[i].setVisible(true)
	}
}

function changeTableInfo(numFeatures){
	let table = document.getElementById("table")
	table.innerHTML = ""
	// 一行tr
	let thTr = document.createElement("tr")
	// 获取要素属性表表头数组
	for (let key in numFeatures[0].getProperties()) {
		if(key == "geometry") continue;
		// console.log(key)
		let th = document.createElement("th")
		th.innerHTML = key;
		th.style.margin = '10px'
		// 将th添加到表头thTr中
		thTr.appendChild(th)
	}
	table.appendChild(thTr)

	//遍历数据
	for (let i = 0; i < numFeatures.length; i++) {
		let obj = numFeatures[i].getProperties();
		// console.log(typeof(obj))
		let tr = document.createElement('tr')
		// 遍历一行的数据
		for (let j in obj) {
			// console.log(obj[j])
			if(j == "geometry") continue;
			let th =  document.createElement('th')
			th.innerHTML = obj[j]
			th.style.margin = "10px"
			th.title = obj[j]
			tr.appendChild(th)
		}
		table.appendChild(tr)
	}
}

