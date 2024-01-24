const table = document.createElement('table');

for ( let i = 1; i <= 10; i++) {
    const row = table.insertRow();

    for (let j = 1; j <= 10; j++) {
        const cell = row.insertCell();

        const number = (i - 1) * 10 + j;

        cell.innerText = number;
    }
}

document.body.appendChild(table);