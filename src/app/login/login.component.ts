import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl,Validators, FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

function userNameValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^a/)) {
    return { invalidUser: true };
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  userName: AbstractControl;
  password: AbstractControl;
  baseUrl = 'http://172.20.10.4:3000/';
  name$: Observable<string>;

  constructor(private fb: FormBuilder,private router: Router,private httpClient:HttpClient,private authService: AuthService) { 

  this.myForm = this.fb.group(
    {
      'userName': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    }
  );
  this.userName = this.myForm.controls['userName'];
  this.password = this.myForm.controls['password'];
  this.name$ = this.userName.valueChanges;
  this.userName.valueChanges.subscribe(val => {
    console.log(val);
  });
}

ngOnInit(): void {
}

onSubmit(value: any) {
  console.log(value);

}
  login() {
   
 
  
 this.httpClient.post(this.baseUrl + 'login', this.myForm.value).subscribe((val: any) => {
        if (val.succ){
          if(this.myForm.valid){
            this.authService.login();
            this.router.navigate(['/manage']);
          } 
        }else{
          
          alert("账号或密码错误");
        }
      }
    );
    }

}
