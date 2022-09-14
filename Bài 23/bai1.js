let n = 100
let g = 0
let text;
text = ''
let countNb = +prompt("Nhập số số nguyên tố bạn muốn")
let nb = 0
while (nb < countNb ) {
    // if (n >= 2) {
    // text = '2' + '<br>'
    let flag = true
    if (g < 2) {
        flag = false

    } else {
        for (let b = 2; b < g; b++) {

            if (g % b == 0) {
                flag = false
            }
        }

    }
    if (flag) {
        text += g + '<br>';
        g++;
        nb++
    } else {
        g++
    }
}

        document.write(text)
    // } else document.write('2')

