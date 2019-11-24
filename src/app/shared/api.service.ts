import {Injectable} from '@angular/core';
import {User} from '../../data/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  postUrl = 'https://eu-west-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/espacemember-homol-cwkkq/service/test/incoming_webhook/addUser';

  constructor(private http: HttpClient) {
  }

  addUser(user: User) {
    console.log(user);
    this.http.post<User>(this.postUrl, user, httpOptions)
      .subscribe(res => {
        console.log(res);
      });
  }
}
