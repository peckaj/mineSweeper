import Field from "./Field";

/**
 * MineSweeper
 */
export default class MineSweeper {

    /**
     * MineSweeper constructor
     * @param board
     * @param resolution
     */
    constructor(board, resolution) {
        this.board = board;
        this.fields = [];
        this._resolution = resolution;
        this._mineCount = this._resolution * 1.5;
    }

    /**
     * Starts game from scratch
     */
    play = () => {
        this.board.innerHTML = '';
        this.fields = [];

        for (let i = 0; i < this._resolution; i++) {
            let row = [];
            for (let j = 0; j < this._resolution; j++) {
                let field = new Field(this, i, j);
                row.push(field)
            }
            this.fields.push(row);
        }

        this.board.style.gridTemplate = 'repeat(' + this._resolution + ',1fr) / repeat(' + this._resolution + ',1fr)';
        this._addMines();
        this._countThreats();
        this._render();
    }

    /**
     * Explore and clean empty fields
     * @param field
     */
    cleanSurround = field => {
        let extended = field.threat === 0;
        this._getSurroundFields(field, extended).forEach(field => {
            if (field.hidden && !field.marked && !field.isMine) {
                field.show(false);
                if (field.threat === 0) {
                    this.cleanSurround(field);
                }
            }
        });
    }

    /**
     * Check if is not end of game
     * @param checkField
     */
    checkStatus = (checkField) => {
        if (checkField.isMine) {
            this._loss();
        }

        let isWin = true;
        //filter
        this.fields.forEach(row => {
            row.forEach(field => {
                if (!field.isMine && field.hidden) {
                    isWin = false;
                }
            })
        });

        if (isWin) {
            this._win();
        }
    }

    /**
     * Win handler
     * @private
     */
    _win = () => {
        setTimeout(() => {
            alert('Výhra! Gratuluji.');
            if (confirm('Chces hrát znovu?')) {
                this.play();
            }
        }, 100);
        this._showMines();
    }

    /**
     * Loss handler
     * @private
     */
    _loss = () => {
        setTimeout(() => {
            alert('Bohužel, ale prohrál si...');
            if (confirm('Chces hrát znovu?')) {
                this.play();
            }
        }, 100);
        this._showMines();

    }

    /**
     * Uncovers all mines
     * @private
     */
    _showMines = () => {
        this.fields.forEach(row => {
            row.forEach(field => {
                if (field.isMine && field.hidden) {
                    field.show(false, true);
                }
            })
        });
    }

    /**
     * Render
     * @private
     */
    _render = () => {
        this.fields.forEach(row => {
            row.forEach(field => {
                field.render();
            })
        });
    }

    /**
     * Add mines to board
     * @private
     */
    _addMines = () => {
        let count = 0;
        while (count < this._mineCount) {
            let x = Math.floor(Math.random() * (this._resolution));
            let y = Math.floor(Math.random() * (this._resolution));

            if (!this.fields[x][y].isMine) {
                this.fields[x][y].setMine();
                count++;
            }
        }
    }

    /**
     * Counts all threat numbers
     * @private
     */
    _countThreats = () => {
        this.fields.forEach(row => {
            row.forEach(field => {
                if (!field.isMine) {
                    field.setThreat(this._countThreat(field));
                }
            })
        });
    }

    /**
     * Counts threat number to field
     * @param field
     * @returns {number}
     * @private
     */
    _countThreat = field => {
        let threat = 0;
        this._getSurroundFields(field).forEach(field => {
            if (field.isMine) {
                threat++;
            }
        });
        return threat;
    }

    /**
     * Gets surroundings fields of field
     * @param field
     * @param extended
     * @returns {Array}
     * @private
     */
    _getSurroundFields = (field, extended = true) => {
        let x = field.x;
        let y = field.y;
        let fields = [];

        if (x >= 0 && y - 1 >= 0 && this.fields[x][y - 1] instanceof Field) {
            fields.push(this.fields[x][y - 1]);
        }
        if (x >= 0 && y + 1 <= (this._resolution - 1) && this.fields[x][y + 1] instanceof Field) {
            fields.push(this.fields[x][y + 1]);
        }
        if (x - 1 >= 0 && y >= 0 && this.fields[x - 1][y] instanceof Field) {
            fields.push(this.fields[x - 1][y]);
        }
        if (x + 1 <= (this._resolution - 1) && y >= 0 && this.fields[x + 1][y] instanceof Field) {
            fields.push(this.fields[x + 1][y]);
        }

        if (extended) {
            if (x - 1 >= 0 && y - 1 >= 0 && this.fields[x - 1][y - 1] instanceof Field) {
                fields.push(this.fields[x - 1][y - 1]);
            }
            if (x + 1 <= (this._resolution - 1) && y + 1 <= (this._resolution - 1) && this.fields[x + 1][y + 1] instanceof Field) {
                fields.push(this.fields[x + 1][y + 1]);
            }
            if (x + 1 <= (this._resolution - 1) && y - 1 >= 0 && this.fields[x + 1][y - 1] instanceof Field) {
                fields.push(this.fields[x + 1][y - 1]);
            }
            if (x - 1 >= 0 && y + 1 <= (this._resolution - 1) && this.fields[x - 1][y + 1] instanceof Field) {
                fields.push(this.fields[x - 1][y + 1]);
            }
        }

        return fields;
    }
}