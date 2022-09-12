let x = + parseInt(prompt("Enter a year")) ;
 //C1

if (x % 4 == 0) {
    if (x % 100 == 0) {
        if (x % 400 == 0) {
             alert("là năm nhuận")
        } else { alert("không phải năm nhuận")

        }

        }else { alert("là năm nhuận")
    }

} else {
    alert("không phải nă nhuận")
}
