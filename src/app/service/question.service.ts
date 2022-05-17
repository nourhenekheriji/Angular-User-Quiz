import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  

  constructor(private _http:HttpClient) { }

  getQuestionJson(){
    //lien eli fel spring 7otou lhne f 3oudh assets 
    return this._http.get<any>("assets/question.json");
  }
getAllquestion(){
  return this._http.get<any>("http://localhost:8082/question/allquestion");
}
}
