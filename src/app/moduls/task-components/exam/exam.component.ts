import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/fake-backend/services/question-service';
import { Question, Answer } from 'src/app/fake-backend/models/question';
import { first } from 'rxjs';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent {
  questions: Question[] = [];
  currentQuestion: number = 0;
  currentAnswers: Answer[] = [];
  selectedAnswerId: number = 0

constructor(private questionService: QuestionsService) { }

ngOnInit(): void {
  this.getQuestions();
}

  getQuestions(): void {
    this.questionService.getQuestions().subscribe(data => {
      this.questions = data;
      this.getAnswersByQuestionId(this.questions[this.currentQuestion].id);
    });
  }

  getAnswersByQuestionId(questionId: number): void {
    this.questionService.getAnswersByQuestionId(questionId).subscribe(data => {
      this.currentAnswers = data;
    });
  }

  getNextQuestion(): void {
    this.selectedAnswerId = 0;
    this.currentQuestion++;
    if (this.isLastQuestion()) {
      const isCorrect = this.isAnswerCorrect();
      if (isCorrect) {
        alert('ВЕРНО!');
      } else {
        alert('НЕВЕРНО!');
      }
      alert('Вы ответили на все вопросы!');
    } else {
      this.getAnswersByQuestionId(this.questions[this.currentQuestion].id);
    }
  }

  isAllAnswersOnCurrentQuestion(): boolean {
    return this.currentAnswers.length === this.questions[this.currentQuestion].answers.length;
  }

  isAnswerCorrect(): boolean {
    const correctAnswer = this.questions[this.currentQuestion].answers.find(answer => answer.isCorrect);
    return correctAnswer !== undefined && correctAnswer.id === this.selectedAnswerId;
  }

  isLastQuestion(): boolean {
    return this.currentQuestion === this.questions.length - 1;
  }

  onAnswerSelected(answer: Answer): void {
    if (answer.isCorrect) {
      alert('ВЕРНО');
    } else {
      alert('НЕВЕРНО');
    }
    this.selectedAnswerId = answer.id;
  }
}
