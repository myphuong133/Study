let table ;
table = "<table border = '1' width='50%'> "
for (i=1;i<10;i++){
    table += "<tr>" + "</tr>"
    for (j=2;j<10;j++){
        table += "<td>" + i + "x" + j + "=" + i*j + "</td>" ;
    }


}
table += "</table>"


document.write(table)
