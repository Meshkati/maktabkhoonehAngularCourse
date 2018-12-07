import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  message: string = 'صفحه‌ی مورد نظر وجود ندارد';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.message = this.activatedRoute.snapshot.data['errorMessage'];
    this.message += this.activatedRoute.snapshot.data['date'];
  }

}
