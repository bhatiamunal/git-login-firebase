import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private Http:HttpClient) { }
  getUserDetails(userName:string){
    debugger
    return this.Http.get(`https://api.github.com/users/${userName}`)
  }
  getRepo(repoUrl:string){
    return this.Http.get(repoUrl)

  }
}
