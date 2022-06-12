import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.scss'],
})
export class TestErrorsComponent implements OnInit {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  get404Error() {
    this.http.get(this.baseUrl + 'Buggy/notFound').subscribe(
      (response) => {
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

  get500Error() {
    this.http.get(this.baseUrl + 'Buggy/serverError').subscribe(
      (response) => {
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

  get400Error() {
    this.http.get(this.baseUrl + 'Buggy/badrequest').subscribe(
      (response) => {
        console.log(response);
      },
      (error) => console.log(error)
    );
  }
}
