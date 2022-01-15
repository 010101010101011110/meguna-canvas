const Greeting = require("./Base");

module.exports = class Welcome extends Greeting {
    constructor() {
        super();
        this.textTitle = "HOŞGELDİN";
        this.textMessage = "{server} Sunucusuna Hoşgeldin!";
        this.colorTitle = "#03A9F4";
    }
};
