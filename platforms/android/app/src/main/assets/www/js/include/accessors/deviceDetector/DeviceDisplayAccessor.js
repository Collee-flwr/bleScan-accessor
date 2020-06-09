exports.setup = function() {

    this.input('dataIn');
};

exports.initialize = function() {
     this.addInputHandler("dataIn", display.bind(this));

};

function display() {
    var devices = this.get("dataIn");
    document.querySelector('#found-devices').innerHTML = devices + " display function";
}
