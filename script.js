const display = document.getElementById("display");
const buttons = document.querySelectorAll('td:not(#display)');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.innerText;

        if (value === 'C') {
            display.innerText = '';
        } else if (value === '=') {
            try {
                if (display.innerText !== '') {
                    display.innerText = eval(display.innerText);
                }
            } catch {
                display.innerText = 'Error';
            }
        } else if (value === '√') {
            if (display.innerText !== '') {
                try {
                    display.innerText = Math.sqrt(eval(display.innerText));
                } catch {
                    display.innerText = 'Error';
                }
            }
        } else if (value === 'x2') {
            if (display.innerText !== '') {
                try {
                    display.innerText = Math.pow(eval(display.innerText), 2);
                } catch {
                    display.innerText = 'Error';
                }
            }
        } else {
            if (display.innerText === 'Error') display.innerText = '';
            display.innerText += value;
        }
    });
});
