export interface Question {
  id: number,
  topic: number,
  section: number,
  text: string,
  answers: Answer[]
}   

export interface Answer {
  id: number,
  questionId: number,
  text: string,
  isCorrect: boolean
} 