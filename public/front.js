const numberAInput = document.querySelector('#number-a');
const numberBInput = document.querySelector('#number-b');
const form = document.querySelector('form');

form.addEventListener('submit', async event => {
    event.preventDefault();

    const numberA = Number(numberAInput.value);
    const numberB = Number(numberBInput.value);

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
});