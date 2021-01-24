import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms'
import { Router} from '@angular/router'
import { AuthService} from './../../services/auth.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router:Router,private auth : AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    const {email,password} = f.form.value;
    this.auth.signIn(email,password)
      .then(
        (res)=>{
          this.router.navigateByUrl('/')
          console.log('signup')
        }
      )
      .catch((err)=>{
        console.log('error')
      });
  }

}
