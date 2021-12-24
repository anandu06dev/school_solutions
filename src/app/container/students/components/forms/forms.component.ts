import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MyErrorStateMatcher } from '@utils/utility';
import { studentDetail } from '../../models/studentDetail.model'

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
    clearableInputs:{[key:string]:string} = {}
    studentForms!:FormGroup;
    classes:{label:string,value:string}[]=[]
    gender:{label:string,value:string}[]=[{label:'Male',value:'male'},{label:'Female',value:'female'}]
   

    matcher = new MyErrorStateMatcher();

    get f(){
      return this.studentForms;
    }

    constructor(private fb:FormBuilder) {
      let temp:{[key:string]:any} ={}
      Object.keys(studentDetail).map((i) => {
        temp[i]=['']
      });
      this.studentForms = this.fb.group({...temp});
    }
    
    ngOnInit(): void {
      let i=0;
      this.classes = this.generateStudentClass();
    }


    generateStudentClass = ():any =>{
      let studentClass: string[]=['preKG','LKG','UKG'];
      return Array(15).fill(0).map((item,index)=>{
          if(index<=2){
  
              return {label:studentClass[index],value:studentClass[index]}
          }
          return {label: `class ${index+1}`,value:index+1}
      });
  }
  
  

  
}
