const { fromEuroToDollar,fromDollarToYen,fromYenToPound } = require('./app.js');

test ('convierte 1 euro a  1.07 dolares', ()=> {
    let total = fromEuroToDollar(1);
    expect (total).toBe (1.07);
});

test ('convierte 4 dolares a 585.0467289719626 yen', () => {
    let result = fromDollarToYen (4);
    expect (result).toBe(585.0467289719626)
});

test ('convierte 5 yenes a 0.02779552715654952 libras', () => {
    let result = fromYenToPound (5);
    expect (result).toBe(0.02779552715654952)
});