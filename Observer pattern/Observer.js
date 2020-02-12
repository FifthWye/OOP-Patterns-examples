class Observer{
    constructor(name){
        this.name = name;
    }

    update(){
        console.log(this.name + " observer was notified");
    }
}

module.exports = {
    Observer: Observer
}