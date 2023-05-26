import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Question, Answer } from 'src/app/fake-backend/models/question';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/fake-backend/services/question-service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions: Question[] = [];

  selectedQuestion: Question = { id: 0, topic: 0, section: 0, text: '', answers: [] };
  isNewQuestion: boolean = false;
  selectedAnswer: Answer = { id: 0, questionId: 0, text: '', isCorrect: false };
  isNewAnswer: boolean = false;

  constructor( private questionsService: QuestionsService ) {
    
  }

  ngOnInit() {
    this.getQuestions();
  }


  getQuestions(): void {
    this.questionsService.getQuestions()
      .subscribe(questions => this.questions = questions);
  }

  getAnswers(questionId: number): void {
    this.questionsService.getAnswersByQuestionId(questionId)
      .subscribe(answers => {
        const index = this.questions.findIndex(q => q.id === questionId);
        this.questions[index].answers = answers;
      });
  }

  addQuestion(): void {
    this.selectedQuestion.id = this.questions.length + 1;
    this.questions.push(this.selectedQuestion);
    this.selectedQuestion = { id: 0, topic: 0, section: 0, text: '', answers: [] }
  }

  editQuestion(question: Question): void {
    this.selectedQuestion = question;
    this.selectedAnswer = { id: 0, questionId: 0, text: '', isCorrect: false };;
  }

  updateQuestion() {
    const index = this.questions.findIndex(q => q.id === this.selectedQuestion.id);
    this.questions[index] = this.selectedQuestion;
    this.selectedQuestion = { id: 0, topic: 0, section: 0, text: '', answers: [] }
  }

  saveQuestion(): void {
    if (this.isNewQuestion) {
      this.questionsService.addQuestion(this.selectedQuestion)
        .subscribe(question => {
          this.questions.push(question);
        });
    } else {
      this.questionsService.updateQuestion(this.selectedQuestion)
        .subscribe(() => {
          const index = this.questions.findIndex(q => q.id === this.selectedQuestion.id);
          this.questions[index] = { ...this.selectedQuestion };
        });
    }
    this.cancelQuestion();
  }

  deleteQuestion(question: Question): void {
    const index = this.questions.findIndex(q => q.id === question.id);
    this.questions.splice(index, 1);
  }

  cancelQuestion(): void {
    this.selectedQuestion = { id: 0, topic: 0, section: 0, text: '', answers: [] };
    this.isNewQuestion = false;
    this.selectedAnswer = { id: 0, questionId: 0, text: '', isCorrect: false };;
    this.isNewAnswer = false;
  }

  addAnswer(): void {
    const answer = { id: 0, questionId: this.selectedQuestion.id, text: this.selectedAnswer.text, isCorrect: this.selectedAnswer.isCorrect };
    this.selectedQuestion.answers.push(answer);
    this.selectedAnswer = { id: 0, questionId: this.selectedQuestion.id, text: '', isCorrect: false } as Answer;
  }

  editAnswer(answer: Answer): void {
    this.isNewAnswer = false;
    this.selectedAnswer = { ...answer };
  }

  saveAnswer(): void {
    if (this.isNewAnswer) {
      this.questionsService.addAnswer(this.selectedAnswer)
        .subscribe(answer => {
          this.selectedQuestion.answers.push(answer);
        });
    } else {
      this.questionsService.updateAnswer(this.selectedAnswer)
        .subscribe(() => {
          const index = this.selectedQuestion.answers.findIndex(a => a.id === this.selectedAnswer.id);
          this.selectedQuestion.answers[index] = { ...this.selectedAnswer };
        });
    }
    this.cancelAnswer();
  }

  deleteAnswer(answer: Answer): void {
    if (confirm(`Are you sure you want to delete the answer '${answer.text}'?`)) {
      this.selectedQuestion.answers = this.selectedQuestion.answers.filter(a => a !== answer);
      this.questionsService.deleteAnswer(answer.id).subscribe();
    }
  }

  cancelAnswer(): void {
    this.selectedAnswer = { id: 0, questionId: 0, text: '', isCorrect: false };
    this.isNewAnswer = false;
  }

  updateAnswer() {
    const index = this.selectedQuestion.answers.findIndex(a => a.id === this.selectedAnswer.id);
    this.selectedQuestion.answers[index] = this.selectedAnswer;
    this.selectedAnswer = { id: 0, questionId: 0, text: '', isCorrect: false };;
  }
}