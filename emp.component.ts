import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
empid:number=100;
ename:string="mouni";
deptno:number=10;
//personurl="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80";
//imageurl="D:\Mounika\Training\image.jpg";
  constructor() { }

  ngOnInit(): void {
  }

saveClick($event:any)//one way data binding
{
    //alert("Button clicked:");
    var a=this.empid;
    var b=this.ename;
    var c=this.deptno;

    // console.log(a);
    // console.log(b);
    // console.log(c);
    console.log($event.target.value.empid);
    console.log($event.target.value.ename);
    console.log($event.target.value.deptno);

    console.log('hello');
}


}
