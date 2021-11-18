document.getElementById('play').addEventListener('click', function () {
    play();

});

function play() {
    document.querySelector('.container-square').innerHTML = '';

    const levelSelected = parseInt(document.getElementById('level').value);
    // console.log(levelSelected);

    let cellsNumber, cellForSide;
    const bombsNumber = 16;

    switch (levelSelected) {
        case 1:
            cellsNumber = 100;

            break;
        case 2:
            cellsNumber = 81;
            break;
        case 3:
            cellsNumber = 49;
    }


    const bombs = generateBoms(bombsNumber, cellsNumber);
    console.log(bombs);

    // const random = getRndInteger(1, cellsNumber);



    cellForSide = Math.sqrt(cellsNumber);
    // console.log(cellForSide);

    generatePlayground(cellsNumber, cellForSide, bombs);



}

function generatePlayground(celle, celleLato, bombs) {

    const box = document.querySelector('.container-square');

    for (let i = 1; i <= celle; i++) {
        const grid = createItem(i, celleLato);

        grid.addEventListener('click', function () {
            this.classList.add('selected');
            let numCella = this.innerHTML;
            for (let i = 0; i < bombs.length; i++) {
                if (bombs[i] == numCella) {
                    this.classList.add('bomb');
                    document.getElementById('lose').innerHTML = "hai perso :(";
                }
            }
        });

        // console.log(grid);
        box.appendChild(grid);
    }
    // console.log(size);        
}

function createItem(num, celleLato) {
    const cell = document.createElement('div');
    cell.classList.add('square');
    const size = `calc(100% / ${celleLato})`;
    cell.style.width = size;
    cell.style.height = size;

    cell.innerHTML = num;

    return cell;

}

function generateBoms(bomb, celle) {
    const arrayBombs = [];

    while (arrayBombs.length < bomb) {
        const numeroRandom = getRndInteger(1, celle);
        if (!arrayBombs.includes(numeroRandom)) {
            arrayBombs.push(numeroRandom);
        }
    }
    return arrayBombs;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
