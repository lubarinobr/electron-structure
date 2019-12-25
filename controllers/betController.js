const AbstractController = require("./abstractController.js");

class BetController extends AbstractController {

    constructor(event) {
        super(event);
        this._loadEvents();
    }

    _loadEvents() {
        this._ageConfimation();
        this._newGame();
    }

    _ageConfimation() {
        this._addEvents(".age-confirmation", "click", event => {
            if(event.target) {
                this._loadPage(event.target.dataset.section);
            }
        });
    }

    _newGame() {
        this._addEvents("#new-game", "click", event => {
            debugger;
            this._loadPage(event.target.dataset.section);
        });
    }
}

module.exports = new BetController(event);