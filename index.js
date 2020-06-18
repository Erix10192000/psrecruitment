function login() {
    var username = document.getElementById("username");
    var pass = document.getElementById("password");
    if (username.value == "") {
    alert("請輸入使用者名稱");
    } else if (pass.value  == "") {
    alert("請輸入密碼");
    } else if(username.value == "admin" && pass.value == "123456"){
        document.cookie = "username = Admin; expires + 24*60*60*1000;path=/";
        window.location.href="home.html";
    } else if(username.value == "HR" && pass.value == "111111"){
        document.cookie = "username = HR; expires + 24*60*60*1000;path=/";
        window.location.href="home.html";
    } else if(username.value == "erix" && pass.value == "111111"){
        document.cookie = "username = erix; expires + 24*60*60*1000;path=/";
        window.location.href="home.html";
    }
    else {
    alert("請輸入正確的使用者名稱和密碼！")
    }
}