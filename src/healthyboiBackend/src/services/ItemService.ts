// /**
//  * Data Model Interfaces
//  */
 import { ExerciseEntry, ExerciseInterface } from '../../types';
import { Items } from "../models/items.interface";

// /**
//  * In-Memory Store
//  */
let items: Items = {
    1:{ 
        id: 1,
        name: 'Squats',
        repRange: '10-12',
        bodyPart: 'legs'
    },
    2:{ 
        id: 2,
        name: 'Bench Press',
        repRange: '10-12',
        bodyPart: 'chest'
    },
    3:{ 
        id: 3,
        name: 'Military Press',
        repRange: '10-12',
        bodyPart: 'Shoulders'
    },
    4:{ 
        id: 4,
        name: 'Hammer Curl',
        repRange: '10-12',
        bodyPart: 'arms'
    },
    
}

/**
 * Service Methods
 */
export const findAll = async(): Promise<ExerciseInterface[]> => Object.values(items);

export const find = async(id:number): Promise<ExerciseInterface> => items[id];

export const create = async(newExercise: ExerciseEntry): Promise<ExerciseInterface> =>{
    const id = new Date().valueOf();
    items[id] ={
        id,
        ...newExercise,
    };

    return items[id];
}

export const update = async(id:number, exerciseUpdate:ExerciseEntry): Promise<ExerciseInterface | null> =>{
    const exercise = await find(id);
    if(!exercise){
        return null;
    }
    items[id] = {id,...exerciseUpdate};
    
    return items[id];
}

export const remove = async(id:number): Promise<null | void> =>{
    const exercise = await find(id);

    if(!exercise){
        return null;
    }

    delete items[id];
}