//bai1
let ly= + prompt("Nhập điểm lý")
let hoa= + prompt("Nhập điểm hoá")
let sinh= + prompt("Nhập điểm sinh")

let TB = (ly+hoa+sinh)/3
let tb = Math.round(TB*100)/100
document.write("Điểm TB là : " + tb )
