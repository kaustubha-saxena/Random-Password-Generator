let limit = document.body.querySelector(".limit");
let Length = document.body.querySelector(".length");
let Lower_case = document.querySelector("#Lower-Case");
let Upper_case = document.querySelector("#Upper-Case");
let Numbers = document.querySelector("#Numbers");
let Symbols = document.querySelector("#Symbols");
var Text = document.querySelector(".text");
let btn = document.body.querySelector(".btn");
let password = "";
var value;

limit.children[1].value = 14;
value = Math.round(14 / 100 * 28) + 4;
Lower_case.checked=true;
Upper_case.checked=true;
Numbers.checked=true;
Symbols.checked=true;

limit.children[1].addEventListener("change", () => {
    value = limit.children[1].value;
    value = Math.round(value / 100 * 28) + 4;
    Length.innerHTML = `Length: ${value} `;
})
function generate_char(a) {
    return String.fromCharCode(a);
}
function generate_password() {
password="";

    for (i = 1; i <= value; i++) {
        let integer = Math.floor(Math.random() * 89 + 33);
        if (Lower_case.checked == true && integer >= 97 && integer <= 122) {
            let char = generate_char(integer);
            password = password.concat(char);
        }
        else if (Upper_case.checked == true && integer >= 65 && integer <= 90) {
            let char = generate_char(integer);
            password = password.concat(char);
        }
        else if (Numbers.checked == true && integer >= 48 && integer <= 57) {
            let char = generate_char(integer);
            password = password.concat(char);
        }
        else if (Symbols.checked == true && integer >= 33 && integer <= 47 || Symbols.checked == true && integer >= 58 && integer <= 64) {
            let char = generate_char(integer);
            password = password.concat(char);
        }
        else {
            i--;
        }
    }
    Text.innerHTML="";

    Text.innerHTML = password;
    
}

function copy()
{
var r = document.createRange();
r.selectNode(document.querySelector(".text"));
window.getSelection().removeAllRanges();
window.getSelection().addRange(r);
document.execCommand('copy');
window.getSelection().removeAllRanges();
alert("Password Copied To Clipboard")
}


