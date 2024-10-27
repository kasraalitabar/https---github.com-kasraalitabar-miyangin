let num1 = prompt("enter your mark");
let num2 = prompt("enter your mark");
let num3 = prompt("enter your mark");
let num4 = prompt("enter your mark");
let num5 = prompt("enter your mark");





if ((+num1 > 20 || +num1 < 0) || (+num2 > 20 || +num2 < 0) || (+num3 > 20 || +num3 < 0) || (+num4 > 20 || +num4 < 0) || (+num5 > 20 || +num5 < 0) || num1 === null || num2 === null || num3 === null || num4 === null || num5 === null) {
    alert("error")
} else {
    num1 = +num1
    num2 = +num2
    num3 = +num3
    num4 = +num4
    num5 = +num5
    
    const result = (num1 + num2 + num3 + num4 + num5) / 5
    if (result >= 10) {
        alert("pass")
    } else if (result < 10) {
        alert("faild")
    }



}



