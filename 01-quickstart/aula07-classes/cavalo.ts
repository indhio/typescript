import { Animal } from './animal';

export class Cavalo extends Animal {

    constructor(nome : string) {
        super(nome);
    }

    public mover(distanceEmMetros: number) : void {
        console.log("Galopando..");
        super.mover(50);
    }

}