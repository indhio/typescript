import {Dao} from './dao';
import {Animal} from './../aula07-classes/animal';
import {Cavalo} from './../aula07-classes/cavalo';


let dao : Dao<Animal> = new Dao<Animal>();

let animal = new Animal("Rex");
let cavalo = new Cavalo("Titan");

dao.insert(cavalo);