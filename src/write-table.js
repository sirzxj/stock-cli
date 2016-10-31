var defaultStr = '           ';
var defaultSize = defaultStr.length;


function stringSplice(str, index, count, add) {
	return str.slice(0, index) + add + str.slice(index + count);
};


function getRenderStr(str) {
	var strLen = str.replace(/[^\x00-\xff]/g, '__').length;
	var index = parseInt((defaultSize - strLen) / 2, 10);
	return stringSplice(defaultStr, index, strLen, str);
}

function getHeader(data) {
	var header = '\n';
	var item = data[0];
	var size = 0;
	for (var i in item) {
		header += getRenderStr(i);
		size++;
	}
	header += '\n' + defaultStr.repeat(size).replace(/\ /g, '-');
	return header;
}


function getBody(data) {
	var body = '';
	data.forEach(function(v) {
		body += '\n';
		for (var i in v) {
			var item = v[i];
			body += getRenderStr(item);
		}
	});
	return body;
}

function writeTable(data) {
	var header = getHeader(data);
	var body = getBody(data);
	console.log(header + body);
}

module.exports = writeTable;