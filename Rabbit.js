class Rabbit {
    constructor(type) {
        this.type = type;
    }

    makeNoise(phrase) {
        console.log(`${this.type} rabbit says ${phrase}!`);
    }
}

const rabbit1 = new Rabbit("My")
rabbit1.makeNoise("Hello, World!")