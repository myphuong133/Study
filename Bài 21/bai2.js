let j = 1;
let i = 1;
let a
a = "<table border='1' width='300' cellspacing='0' cellpadding='3'>"
while (i<=10) {
    a = a + "<tr>"  + "</tr>"  ;j = 1
    while (j<=10) {
        a = a + "<td>" + i*j + "</td>" ; j++
    }

    i++
}






a = a + "</table>"
document.write(a)
