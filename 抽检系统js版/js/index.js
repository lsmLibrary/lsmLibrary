$(function () {
    var json = [
        {'id': 1, 'min': 1, 'max': 29, 'prize': '一等奖', 'v': 1},
        {'id': 2, 'min': 302, 'max': 328, 'prize': '二等奖', 'v': 2},
        {'id': 3, 'min': 242, 'max': 268, 'prize': '三等奖', 'v': 5},
        {'id': 4, 'min': 182, 'max': 208, 'prize': '四等奖', 'v': 7},
        {'id': 5, 'min': 122, 'max': 148, 'prize': '五等奖', 'v': 10},
        {'id': 6, 'min': 62, 'max': 88, 'prize': '六等奖', 'v': 25},
        {
            'id': 7,
            'min': [32, 92, 152, 212, 272, 332],
            'max': [58, 118, 178, 238, 298, 358],
            'prize': '七等奖',
            'v': 50
        }
    ];
    var number = 3;
    var value = 10;
    $(".btn").click(function () {
        $("#btn").attr("disabled", "");
        $("#startbtn").click(function () {
            number--;
            lottery(getRand(json));
            $(".top_title span").html("还剩" + number + "次");
        });
    });
    $("#btn-start").click(function () {
        $("#btn-start").attr("disabled", "");
    });
    function getRand(proArr) {
        var result = '';
        var proSum = 0;
        var randNum;
        var proCur;
        //概率数组的总概率精度
        for (var i = 0; i < proArr.length; i++) {
            proSum += proArr[i].v;
        }
        //概率数组循环
        for (var key in proArr) {
            randNum = parseInt(Math.random() * proSum);
            proCur = proArr[key].v;
            if (randNum <= proCur) {
                result = key;
                break;
            } else {
                proSum -= proCur;
            }
        }
        return proArr[result];
    }

    function lottery(json) {
        $("#startbtn").unbind('click').css("cursor", "default");
        console.log(json);
        var p = json.prize; //奖项
        var num = json.id;
        if (json.id == 7) {
            var n = parseInt(Math.random() * 6);
            var a = parseInt(json.min[n] + Math.random() * (json.max[n] - json.min[n]))
        }
        console.log(json.min);
        a =  parseInt(json.min +parseInt(Math.random() * (json.max - json.min))); //角度
        console.log(a);
        console.log(p);
        $("#startbtn").rotate({
            duration: 3000, //转动时间
            angle: 0,
            animateTo: 1800 + a ,//转动角度
            easing: $.easing.easeOutSine,
            callback: function () {
                if (value >= num) {
                    value = num;
                    $(".prize").html(p);
                }
                if (p == "一等奖") {
                    alert('恭喜你中得终极大奖:一等奖。');
                } else if (number > 0) {
                    alert('恭喜你，中得' + p + '\n还要再来一次吗？');
                    $("#btn").removeAttr("disabled")
                } else {
                    alert("这次" + p + "抽奖结束" + "\n恭喜你，最终抽到" + $(".prize").html())
                }
            }
        });

    }
});