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


    const bombs = generateBoms();
    console.log(bombs);

    function generateBoms() {
        const arrayBombs = [];

        while (arrayBombs.length < bombsNumber) {
            const numeroRandom = getRndInteger(1, cellsNumber);
            if (!arrayBombs.includes(numeroRandom)) {
                arrayBombs.push(numeroRandom);
            }
        }

        return arrayBombs;

    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    cellForSide = Math.sqrt(cellsNumber);
    // console.log(cellForSide);

    generatePlayground();

    function generatePlayground() {


        const box = document.querySelector('.container-square');

        for (let i = 1; i <= cellsNumber; i++) {
            const grid = createItem(i);

            grid.addEventListener('click', function () {
                this.classList.add('selected');
            });

            // console.log(grid);
            box.appendChild(grid);
        }
        // console.log(size);        
    }

    function createItem(num) {
        const cell = document.createElement('div');
        cell.classList.add('square');
        const size = `calc(100% / ${cellForSide})`;
        cell.style.width = size;
        cell.style.height = size;

        cell.innerHTML = num;

        return cell;

    }

}