export type ExerciseEntry = {
    name: string,
    repRange: string,
    bodyPart: string
  }
export interface ExerciseInterface extends ExerciseEntry{
      id: number;
}