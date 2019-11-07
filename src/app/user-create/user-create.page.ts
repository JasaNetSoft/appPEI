import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.page.html',
  styleUrls: ['./user-create.page.scss'],
})
export class UserCreatePage implements OnInit {

  data: User

  constructor(
    public apiService: ApiService,
    public router: Router
  ) {
    this.data = new User();
  }

  ngOnInit() {
  }

  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['list']);
    });
  }

}
