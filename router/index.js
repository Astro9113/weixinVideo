exports.init = function (app) {
	var wechat_cfg = require('../config/wechat.cfg');
	var signature = require('../sign/signature');


	app.get('/',function(req,res){
		//var url = req.protocol + '://' + req.host + req.path;
		var url = req.protocol + '://' + req.host + req.originalUrl; //获取当前url
		signature.sign(url,function(signatureMap){
			signatureMap.appId = wechat_cfg.appid;

			console.log('signatureMap', signatureMap);
			res.render('index',signatureMap);
		});
	});

};
