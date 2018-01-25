// document.getElementById('refresh').onclick = function(){location.reload();};

/**
 *  以下内容多摘自官方demo
 *
**/
wx.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: appId, // 必填，公众号的唯一标识
    timestamp: timestamp, // 必填，生成签名的时间戳
    nonceStr: nonceStr, // 必填，生成签名的随机串
    signature: signature,// 必填，签名，见附录1
    jsApiList: ['checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onRecordEnd',
        'playVoice',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'] // 必填，需要使用的JS接口列表，
});


wx.ready(function(){

    // wx.hideMenuItems({
    //             menuList: ['menuItem:share:timeline'] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
    // });

    wx.onMenuShareTimeline({
        title: '签到送积分', // 分享标题
        link: 'http://y58kg.cn/', // 分享链接
        imgUrl:'http://wechat.yiwang.com/appwxshare/img/shareImage/thumbnailImage.png', // 分享图标
        success: function () {
            // 用户确认分享后执行的回调函数
            immediaSign();
            alert('success');
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
            alert('cancel');
        }
    });

});

wx.error(function(res){
	JSON.stringify(res)
});
