import mongoose from 'mongoose';
interface ExerciseEntry {
    name: string,
    repRange: string,
    bodyPart: string
}
interface exerciseModelInterface extends mongoose.Model<ExerciseDoc>{
    build(attr:ExerciseEntry): ExerciseDoc;
}
interface ExerciseDoc extends mongoose.Document{
    name: string,
    repRange: string,
    bodyPart: string
}
const exerciseSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        repRange: {
            type: String,
            required: true
        },
        bodyPart: {
            type: String,
            required: true
        },
}, {versionKey: false});
exerciseSchema.statics.build = (attr: ExerciseEntry) =>{
    return new Exercise(attr);
}
const Exercise = mongoose.model<ExerciseDoc, exerciseModelInterface>('Exercise', exerciseSchema);
Exercise.build({
    name: 'Testorooni',
    repRange: 'exercise',
    bodyPart: 'schema'
})
export {Exercise};
// export interface ExerciseEntry {
//     name: string,
//     repRange: string,
//     bodyPart: string
//   }
//   export interface Exercise extends ExerciseEntry{
//       id: number;
//   }
