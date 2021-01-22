import { Component} from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent {

  myForm: FormGroup;
  id: AbstractControl;
  userName: AbstractControl;
  password: AbstractControl;
  users$: Observable<User>;
  baseUrl = 'http://192.168.0.7:3000/';
  currentUser: User;

  constructor(private fb: FormBuilder, private httpClient: HttpClient, private router: Router) {
    this.myForm = this.fb.group({
      'id': [''],
      'userName': [''],
      'password': [''],
    });
    this.id = this.myForm.controls['id'];
    this.userName = this.myForm.controls['userName'];
    this.password = this.myForm.controls['password'];
  }

  adduser() {
    this.httpClient.post(this.baseUrl + 'registered', this.myForm.value).subscribe(
      (val: any) => {
        if (val.succ) {
          alert('注册成功！');
          this.router.navigate(['/manage']);
        }
      }
    );
  }
}