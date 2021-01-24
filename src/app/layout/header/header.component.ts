import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../services/auth.service'
import  { Router} from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email:any=null
  constructor(private auth:AuthService,private router:Router) {
    this.auth.getUser().subscribe(
      (user:any)=>{
        console.log(user)
        this.email = user?.email;  
      },
      (err)=>{
        alert(err)
      }
    )
   }

  ngOnInit(): void {
  }
  async handleSignOut(){
    try {
      const res = await this.auth.signout()
      this.router.navigateByUrl('/signin')
      this.email = null
    } catch (error) {
      console.log(error)    
    }
  }
}
