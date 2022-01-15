const Greeting = require("./Base");

module.exports = class Goodbye extends Greeting {
    constructor() {
        super();
        this.textTitle = "GÖRÜŞÜRÜZ";
        this.textMessage = "{server} sunucusundan ayrıldı.";
        this.colorTitle = "#df0909";
    }
};
