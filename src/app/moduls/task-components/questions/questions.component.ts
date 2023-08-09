import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl, FormGroupName, FormArray } from '@angular/forms';
import { Question, Answer } from 'src/app/fake-backend/models/question';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/fake-backend/services/question-service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent  {
  
  questions: Question[] = []
  answers: Answer[] = []
  // newQuestion: Question = { id: 0, topic: 0, section: 0, text: '', answers:[] };
  // newAnswer: Answer = { id: 0, questionId: 0, text: '', isCorrect: true || false  }
  editingQuestion: Question | undefined; 
  editQuestionForm!: FormGroup; 
  questionForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private questionsService: QuestionsService) {
    this.questionForm = this.formBuilder.group({
      topic: ['', Validators.required],
      section: ['', Validators.required],
      text: ['', Validators.required],
      answers: this.formBuilder.array([
        this.createAnswerGroup()
      ])
    });
  }

  ngOnInit(){
    this.getQuestions();

    this.getQuestions();
    this.editQuestionForm = this.formBuilder.group({
      topic: ['', Validators.required],
      section: ['', Validators.required],
      text: ['', Validators.required],
      answers: this.formBuilder.array([], Validators.required)
    });
  }

  getQuestions(): void {
    this.questionsService.getQuestions()
      .subscribe(questions => this.questions = questions);
  }

  // addQuestion(topic: number, section: number, text: string, answers: []){
  //   topic = topic;
  //   section = section;
  //   text = text.trim();
  // }

  createAnswerGroup(): FormGroup {
    return this.formBuilder.group({
      text: ['', Validators.required],
      isCorrect: [false]
    });
  }

  editQuestion(question: Question): void {
    this.editingQuestion = question;
    this.editQuestionForm.patchValue({
      topic: question.topic,
      section: question.section,
      text: question.text,
      answers: question.answers.map(answer => this.formBuilder.group({
        text: answer.text,
        isCorrect: answer.isCorrect
      }))
    })
  }

  deleteQuestion(id: number): void {
    this.questions = this.questions.filter(question => question.id !== id);
    this.questionsService.deleteQuestion(id).subscribe();
  }

  addEditAnswer(): void {
    (this.editQuestionForm.controls['answers'] as FormArray).push(
      this.formBuilder.group({
        text: ['', Validators.required],
        isCorrect: false
      })
    );
  }

  removeEditAnswer(index: number): void {
    (this.editQuestionForm.controls['answers'] as FormArray).removeAt(index);
  }

  onEditSubmit(): void {
    if (this.editQuestionForm.valid) {
      const updatedQuestion = {
        ...this.editingQuestion,
        ...this.editQuestionForm.value,
        answers: this.editQuestionForm.value.answers.map((answer: Answer) => ({ ...answer }))
      };
      this.questionsService.updateQuestion(updatedQuestion).subscribe(question => {
        this.editingQuestion = undefined;
        const foundQuestion = this.questions.find(q => q.id === question.id);
        if (foundQuestion) {
          Object.assign(foundQuestion, question);
        }
      });
    }
  }

  cancelEdit(): void {
    this.editingQuestion = undefined;
    this.editQuestionForm.reset();
  }
  
  addAnswer(): void {
    const answers = this.questionForm.get('answers') as FormArray;
    answers.push(this.createAnswerGroup());
  }

  removeAnswer(index: number): void {
    const answers = this.questionForm.get('answers') as FormArray;
    answers.removeAt(index);
  }


  onSubmit() {
    const questionData = this.questionForm.value;
    const question: Question = {
      id: questionData ? (questionData.id + 1) : 1,
      topic: questionData.topic,
      section: questionData.section,
      text: questionData.text,
      answers: questionData.answers.map((answerData: any) => {
        const answer: Answer = {
          id: answerData ? (answerData.id + 1) : 1,
          questionId: questionData.id,
          text: answerData.text,
          isCorrect: answerData.isCorrect
        };
        return answer;
      })
    };
    this.questionsService.addQuestion(question).subscribe((newQuestion) => {
      console.log('New question added with id:', newQuestion.id);
      this.questionForm.reset();
    });
  }
}