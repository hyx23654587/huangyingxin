
var $username = $("#username");
var $password = $("#password");
var $button = $("button");
//设置正则
var reg = /^[^\d]\w{5,11}$/;
//设置锁
var namelock = false;
var passlock = false;
//输入框失去焦点时，验证用户输入的是否符合正则
$username.blur(function () {
    //获取用户输注册的id
    var val = $username.val();
    if (!reg.test(val)) {
        $username.css("backgroundColor","red");
        $("#nameno").removeClass();
        namelock = false;
        return;
    } else {
        $.ajax({
            url:"/php/checkusername.php",
            type:"get",
            data:{username:val},
            dataType:"json",
            success(data) {               
                if (!data.error) {
                    namelock = true;
                    $username.css("backgroundColor","");
                    $("#nameno").addClass("none");
                } else {              
                    namelock = false;
                    $username.css("backgroundColor","red");
                    $("#nameno").removeClass();
                }
            }
        })
    }
})
$password.blur(function () {
    var val = $password.val();
    if (!reg.test(val)) {
        $password.css("backgroundColor","red");
        $("#passno").removeClass();
        passlock = false;
        return;
    } else {
        $password.css("backgroundColor","");
        $("#passno").addClass("none");
        passlock = true;
    }
})
$button.click(function () {
    if (!(namelock&&passlock)) {
        return;
    }
    $.ajax({
        url:"/php/regist.php/",
        type:"post",
        data:{
            username:$username.val(),
            password:$password.val()
        },
        dataType:"json",
        success:function (data) {
            if (!data.error) {
                location.href = "./login.html";
            } else {
                alert("注册失败");
            }
        }
    })

})

