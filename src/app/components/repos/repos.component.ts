import { Component, OnInit,Input ,ChangeDetectorRef, OnChanges } from '@angular/core';
import {GithubService} from './../../services/github.service'
@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit,OnChanges {

  @Input() repoUrl:string;
  repos =[];
  constructor(private  GithubService : GithubService, private ref:ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    if(this.repoUrl)
    {
      this.GithubService.getRepo(this.repoUrl).subscribe(
        (repos:[])=>{
          
          this.repos = repos;
          this.ref.detectChanges();  
        },
        (err)=>{
          alert(err)
        }
      )
    }
  
  }

}
