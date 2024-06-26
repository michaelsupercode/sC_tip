const billElement = document.getElementById('bill');
const personsElement = document.getElementById('persons');
const serviceElement = document.getElementById('service');
const out = document.getElementById('out');

function calc() {
    let bill = Number(billElement.value);
    let persons = Number(personsElement.value);
    let percent = Number(serviceElement.value);

    let tip = (bill * (percent / 100));
    let fullPrice = (bill + tip);
    let singlePrice = (fullPrice / persons);

    out.innerHTML = `
    <p>bill: <b>${bill.toFixed(2)}€</b><p>
    <p>tip: <b>${tip.toFixed(2)}€</b><p>
    <p>total: <b>${fullPrice.toFixed(2)}€</b><p>
    <p>each: <b>${singlePrice.toFixed(2)}€</b><p>
  `

    if (percent === 0) {
        out.innerHTML = `
      <p>welche Servicequalität?</p>
    `
    }
}