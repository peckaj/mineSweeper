// Needed for hot-reload
import MineSweeper from "./scripts/MineSweeper";

if (module.hot) {
    module.hot.accept();
}

import './style.scss';

const board = document.querySelector('#board');
const sweeper = new MineSweeper(board, 15);
sweeper.play();




