import express, { Request, Response } from 'express'
import { Exercise } from '../models/exerciseSchema'

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
  const exercise = await Exercise.find({})
  return res.status(200).send(exercise)
})

router.post('/', async (req: Request, res: Response) => {
  const { name, repRange, bodyPart } = req.body;

  const exercise = Exercise.build({ name, repRange, bodyPart })
  await exercise.save()
  return res.status(201).send(exercise)
})
router.delete('/yougottameanit',  async (req: Request, res: Response) => {

    Exercise.deleteMany().then(function(){
        console.log("Data deleted"); // Success
        return res.status(204);
    }).catch(function(error){
        console.log(error); // Failure
        return res.status(500).send(error);
    });
  })
export { router as exerciseRouter }
// /**
//  * Required External Modules and Interfaces
//  */
// import express, { Request, Response } from 'express';
// import * as ItemService from '../services/ItemService'
// import { ExerciseEntry, ExerciseInterface } from '../../types';

// /**
//  * Router Definition
//  */

// export const exerciseRouter = express.Router();
// /**
//  * 
//  * Controller Definitions
//  */

// // GET items
// exerciseRouter.get('/', async(req: Request, res: Response)=>{
//     try{
//         const list: ExerciseInterface[] = await ItemService.findAll();

//         res.status(200).send(list);
//     }catch(e){
//         res.status(500).send(e.message);
//     }
// });
// // GET items/:id
// exerciseRouter.get('/:id', async(req: Request, res: Response)=>{
//     const id: number = parseInt(req.params.id, 10);

//     try{
//         const exercise: ExerciseInterface = await ItemService.find(id);
//         if(exercise){
//             return res.status(200).send(exercise);
//         }
//         res.status(404).send('Exercise not found');
//     }catch(err){
//         res.status(500).send(err.message);
//     }
// });
// // POST items
// exerciseRouter.post('/', async(req: Request, res: Response)=>{
//     try{
//         const exercise: ExerciseEntry = req.body;
//         const newExercise = await ItemService.create(exercise);
//         res.status(201).json(newExercise);
//     }catch(err){
//         res.status(500).send(err.message);
//     }
// });
// // PUT items/:id
// exerciseRouter.put('/:id', async(req: Request, res: Response)=>{
//     const id: number = parseInt(req.params.id, 10);
//     try{
//         const exerciseUpdate: ExerciseInterface = req.body;
//         const existingExercise: ExerciseInterface = await ItemService.find(id);
//         if(existingExercise){
//             const updatedExercise = await ItemService.update(id, exerciseUpdate);
//             return res.status(200).json(updatedExercise);
//         }
//         const newExercise = await ItemService.create(exerciseUpdate);
//         res.status(201).json(newExercise);
//     }catch(err){
//         res.status(500).send(err.message);
//     }
// });
// // DELETE items/:id
// exerciseRouter.delete('/:id', async(req: Request, res: Response)=>{
//     try{
//         const id: number = parseInt(req.params.id, 10);
//         res.sendStatus(204);
//     }catch(err){
//         res.status(500).send(err.message);
//     }
// })