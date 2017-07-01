import {Animal} from './../aula07-classes/animal';
import {DaoInterface} from './dao.interface';

export class Dao<T> implements DaoInterface<T> {

    tableName : "";

    insert(object : T) : boolean {
        console.log("inserting... ");
        return true;
    }

    update(object : T) : boolean {
        return true;
    }


    delete(id : number) : T {
        return null;
    }

    find(id : number) : T {
        return null;
    }

    findAll() : Array<T> {
        return [null];
    }


}
