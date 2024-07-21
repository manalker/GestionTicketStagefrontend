import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http'; ;

@Injectable({
  providedIn: 'root'
})
export class HelpDeskService {

  readonly API_URL="http://localhost:8080"
  //readonly ENDPOINT="http://localhost:8080";

  constructor(private httpClient: HttpClient) {

  }
}
