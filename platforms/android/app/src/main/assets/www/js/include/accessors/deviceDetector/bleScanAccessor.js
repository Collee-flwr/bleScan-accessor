exports.setup = function() {

    //establish outputs
    this.output("dataOut");

};

exports.initialize = function () {

	    document.querySelector('#found-devices').innerHTML = "IN STARTSCAN";

        var devices = "ble device";
        this.send("dataOut", devices);



};




