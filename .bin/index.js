#!/usr/bin/env node




require('console.table');

var http = require('http'),
	iconv = require('iconv-lite'),
	name = process.argv[2];


http.get("http://hq.sinajs.cn/list=" + name, function(res) {
	res.pipe(iconv.decodeStream('gbk')).collect(function(err, decodedBody) {

		var list = decodedBody.match(/\"(.+?)\"/g) || [];

		if(!list.length) {
			console.log('No Match stock,please check');
		}else{
			var table = [];
			table = list.map(function(v) {
				var item = v.replace(/\"/g,'').split(',');
				return {
					StockName: item[0],
					Yesterday: item[2],
					Highest: item[4],
					Lowest: item[5],
					Current: item[3],
					Range: ((item[3] - item[2]) / item[2] * 100).toFixed(2)
				};
			});
			console.table(table);
		}

		console.log('sdfsdf');
		
		// console.log('sdfsdf \033[31m sdfsd fsdf sdf')

		process.exit(0);
	});
});