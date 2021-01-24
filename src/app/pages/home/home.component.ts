import { Component, OnInit , ChangeDetectorRef } from '@angular/core';
import { GithubService } from './../../services/github.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user = null 
  error=null
  userName:string
  constructor(private GithubService: GithubService,private ChangeDetectorRef:ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  handlefind(){
    debugger
    this.GithubService.getUserDetails(this.userName).subscribe((user:any)=>{
      this.user=user;
      this.error = null;
      this.ChangeDetectorRef.detectChanges();
    })
  }

}
