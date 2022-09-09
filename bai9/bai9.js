let x = prompt("Nhập tên của bạn",'');

if (x === "Admin"){
    var y= prompt("Nhập mật khẩu");
    if (y === "TheMaster" ) {
        alert("wellcome Bitch!")
    } else if (y == null) {
        alert("Canceled")
    } else {
        alert("Cút")
    }


} else if (x == null) {
    alert("Canceled")
} else {
    alert("Cút")
}
