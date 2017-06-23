var code_key;
function sendCode(){
    var sendData=$("#register_form").serialize();
    $.ajax({
        type: "POST",
        url: project_path+"/v1/login/send/code/register",
        data: sendData+"&code_key="+code_key,
        success: function(msg){
            if(msg.success){
                alert("发送成功")
            }else{
                alert(msg.msg)
            }
        }
    });
}
$(function(){
    var time= new Date();
    code_key=time.getTime();
    $("#code_key").attr("src",project_path+"/front/verifycode/code?code_key="+code_key);


});
var mm1 = document.querySelector('#mm1');
var mm2 = document.querySelector('#mm2');
var mm21 = document.querySelector('#mm21');
var phone = document.querySelector('#phone');
var phone1 = document.querySelector('#phone1');
var pw = document.querySelector('#password1');
var pid = document.querySelector('#pid');
phone.onblur = function() {
    if (phone.value.length < 11) {
        phone1.style.display = 'block'
    } else {
        phone1.style.display = 'none'
    }
}

mm1.onblur = function() {
    if (mm1.value.length < 6) {
        pw.style.display = 'block'
    } else {
        pw.style.display = 'none'
    }
}

mm2.onblur = function() {
    if (mm1.value !== mm2.value) {
        mm21.style.display = 'block'
    } else {
        mm21.style.display = 'none'
    }
}

var wait = 10;

function time(e) {
    if (wait == 0) {
        e.removeAttribute("disabled");
        e.value = "获取验证码";
        pid.style.background = 'red';
        pid.style.cursor = 'pointer';
        wait = 10;
    } else {
        e.setAttribute("disabled", true);
        e.value = "重新发送(" + wait + ")";
        pid.style.background = 'gray';
        pid.style.cursor = 'not-allowed';
        wait--;
        setTimeout(function() {
                time(e)
            },
            1000)
    }
}
document.getElementById("pid").onclick = function() {
    time(this);
}