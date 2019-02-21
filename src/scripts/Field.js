/**
 * Field class
 */
export default class Field {

    /**
     * Field constructor
     * @param sweeper
     * @param x
     * @param y
     */
    constructor(sweeper, x, y) {
        this.sweeper = sweeper;
        this.x = x;
        this.y = y;
        this.isMine = false;
        this.threat = 0;
        this.hidden = true;
        this.marked = false;
    }

    /**
     * Set field as mine
     */
    setMine = () => {
        this.isMine = true;
    }

    /**
     * Set threat number
     * @param threat
     */
    setThreat = threat => {
        this.threat = threat;
    }

    /**
     * Show field
     * @param clean
     * @param skipStatus
     */
    show = (clean = true, skipStatus = false) => {
        const el = this._el;

        el.classList.remove('hidden');
        if (!this.isMine) {
            el.innerHTML = this.threat > 0 ? this.threat : '';
            el.classList.add('not-mine');
            if (this.threat === 0 && clean) {
                this.sweeper.cleanSurround(this);
            }
        } else {
            el.classList.add('mine');
        }
        this.hidden = false;
        this.marked = false;

        if (!skipStatus) {
            this.sweeper.checkStatus(this);
        }
        this._el.classList.remove('marked');
        el.removeEventListener('click', this._clickHandler);
    }

    /**
     * Left click handler
     * @private
     */
    _clickHandler = () => {
        this.show();
    }

    /**
     * Render
     */
    render = () => {
        const el = document.createElement('div');
        el.classList.add('field');
        el.classList.add('hidden');
        el.dataset.x = this.x;
        el.dataset.y = this.y;

        this._el = el;
        this.sweeper.board.appendChild(el);
        this._el.addEventListener('click', this._clickHandler);
        this._el.addEventListener('contextmenu', this._mark);
    }

    /**
     * Mark field as known mine
     * @param evt
     * @private
     */
    _mark = evt => {
        evt.preventDefault();
        if (this.hidden) {
            this.marked = !this.marked;
            this._el.classList.toggle('marked');
        }
    }
}