
let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('btn'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'AC':
                display.innerText = '';
                break;
            case '←':
                if (display.innerText){
                    display.innerText =  display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error!';
                }
                
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});





// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function () {
//         var value = this.getAttibute('data-value');
//         if (value == '+') {

//         } else if (value == '='){

//         } else {
//             display.innerText += value;
//         }
//     });
    
// }

// console.log("hello")