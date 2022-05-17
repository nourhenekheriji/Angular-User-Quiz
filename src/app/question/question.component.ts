import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  checkboxValue: boolean = false;

  public name : string="";
  public questionList : any = [];
  public currentQuestion:number = 0;
  public points : number=0;
  counter=60;
  index = 0 ;
question :any ;
questionall :any ;
note :any;
scorefinal:any ; 
constructor(private questionService : QuestionService) { }

  ngOnInit(): void {
    //without ! we have err fel type of "this name" etheka aaleh aamalna !
    this.name = localStorage.getItem("name")!;
    this.getquestion();
  }
  getAllQuestion(){
    this.questionService.getQuestionJson()
    .subscribe(res=> {
      this.questionList = res.question;
      console.log(res)
    })

  }
 
  getquestion(){
    this.checkboxValue=false ;
    this.questionService.getAllquestion().subscribe((res)=>{

    this.question=res[this.currentQuestion];

    })
  }
  nextQuestion(opa:any,opb:any,opc:any,res :any,val :boolean){
    if(opa){
this.note =1 ; 
console.log(this.note)
  }
 else if(opb)
{this.note =2 ;
console.log(this.note)
} 
 else {
  this.note =3 ;
  console.log(this.note)
}

  if(this.note==res){
    this.points++ ;
  }

this.currentQuestion++;
if(this.currentQuestion>9){
  this.scorefinal;

  this.currentQuestion;}

this.getquestion();


}
score(){console.log(this.question.length())
}


 previousQuestion(){

   this.currentQuestion--;
   console.log(this.currentQuestion)
   if(this.currentQuestion<0){
     this.currentQuestion++;
   }
   this.getquestion() 
 }

}

