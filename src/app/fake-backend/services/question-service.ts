import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../models/question';
import { Answer } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  apiUrl = 'http://localhost:3000/api/questions';

  constructor(
    private http: HttpClient,
  ) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.apiUrl);
  }

  getQuestion(questionId: number): Observable<Question> {
    return this.http.get<Question>(`${this.apiUrl}/${questionId}`);
  }

  addQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(this.apiUrl, question);
  }

  updateQuestion(question: Question): Observable<any> {
    return this.http.put<void>(`${this.apiUrl}/${question.id}`, question);
  }

  deleteQuestion(questionId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${questionId}`);
  }

  getAnswersByQuestionId(questionId: number): Observable<Answer[]> {
    return this.http.get<Answer[]>(`${this.apiUrl}/answers?questionId=${questionId}`);
  }

  addAnswer(answer: Answer): Observable<Answer> {
    return this.http.post<Answer>(`${this.apiUrl}/answers`, answer);
  }

  updateAnswer(answer: Answer): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/answers/${answer.id}`, answer);
  }

  deleteAnswer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/answers/${id}`);
  }
}