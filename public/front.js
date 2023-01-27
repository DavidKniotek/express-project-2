const numberAInput = document.querySelector('#number-a');
const numberBInput = document.querySelector('#number-b');
const form = document.querySelector('form');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', async event => {
    event.preventDefault();

    const numberA = Number(numberAInput.value);
    const numberB = Number(numberBInput.value);

    resultDiv.innerText = 'Loading... Please wait.';
    resultDiv.style.border = 'none';

    const result = await fetch('/calc/check', {
        method: 'POST',
        body: JSON.stringify({
            numberA,
            numberB,
        }),
        headers: {
            'Content-type': 'application/json',
        },
    });
    const data = await result.json();

    if (data.divider) {
        resultDiv.innerText = 'Number B is a divider of number A.';
        resultDiv.style.border = '2px solid green';
    } else {
        resultDiv.innerText = 'Number B isn\'t a divider of number A.';
        resultDiv.style.border = '2px solid red';
    }
});