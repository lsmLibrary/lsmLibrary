/**
 * Created by Administrator on 2016/10/6.
 */

$(function () {
    var per = $(".per-nav li");

    $.each(per, function (num) {
        per.eq(num).click(function () {
            $(".per-cent .w>div:gt(0)").css("display", "none");
            per.css("background-color", "#FAF9F6");
            per.children("span").css("display", "none");
            per.eq(num).css("background-color", "#F1EFEB");
            per.eq(num).children("span").css("display", "block");
            if (num == 0) {
                $(".acco-Set").css("display", "block")
            }else if (num == 1) {
                $(".indent").css("display", "block");
            }else {
                $(".balan").css("display", "block");
            }
        })
    });
    $.each($(".delet"),function (num) {
        $(".delet").eq(num).click(function () {
            console.log($(this).parent().parent().parent("li").eq(0));
            $($(this).parent().parent().parent("li")).remove( "li:eq(0)")
        })
    });
//    余额充值
    $(".balan>p").eq(1).children("input").blur(function () {
        var value = $(this).val();
        console.log(value);
        if (isNaN(value) || value.length>=10) {
            $("#error").html("请输入正确金额");

        }
    })
});

