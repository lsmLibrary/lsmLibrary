/**
 * Created by Administrator on 2016/10/7.
 */

$(function () {
    var j;
    var nums=$(".number");

    $.each($(".delet"),function (num) {
        $(".delet").eq(num).click(function () {
            console.log($(this).parent().parent().parent("li").eq(0));
            $($(this).parent().parent().parent("li")).remove( "li:eq(0)")
        })
    });
    $.each(nums, function (num) {
        var kongInput=nums.eq(num).children("p:eq(0)").children("span").children("input");
        nums.eq(num).children(".kongzhi").children("span").children("button:eq(0)").click(function () {
            if (num <= 2) {
                j = parseInt(kongInput.val());
                var jiaGe = nums.eq(num).children("p:eq(1)").children("span").html();
                console.log(jiaGe);
                nums.eq(num).children("p:eq(1)").children("span").html(jiaGe/j*(j+1));
                j+=1;
                kongInput.val(j)
            }

        });
        nums.eq(num).children(".kongzhi").children("span").children("button:eq(1)").click(function () {
            j = parseInt(kongInput.val());
            var jiaGe = nums.eq(num).children("p:eq(1)").children("span").html();
            console.log(jiaGe);
            nums.eq(num).children("p:eq(1)").children("span").html(jiaGe/j*(j-1));

            if (j<=1) {
                j=1;
                nums.eq(num).children("p:eq(1)").children("span").html(jiaGe);
            }
            j-=1;
            kongInput.val(j);
        })
    })
});