import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable({
  providedIn: 'root'
})
export class TeamMakerService {

  private url = 'https://localhost:8200/api/team-maker/';

  constructor(private httpClient : HttpClient) { }

  getTeams(characterNames : any){
    return this.httpClient.get(this.url + 'get-teams', {
      params: {
        CharacterNames : characterNames
      }
    });
  }
}
