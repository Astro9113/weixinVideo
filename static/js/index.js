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

    wx.onMenuShareAppMessage({
        title: '测试', // 分享标题
        desc: '测试测试', // 分享描述
        link: 'www.baidu.com', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        // imgUrl: '', // 分享图标
        // type: '', // 分享类型,music、video或link，不填默认为link
        // dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
            alert('success')
        },
        cancel: function () {
            alert('failed')
        }
    });

});

wx.error(function(res){
	JSON.stringify(res)
});
