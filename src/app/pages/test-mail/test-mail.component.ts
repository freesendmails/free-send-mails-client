import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-mail',
  templateUrl: './test-mail.component.html',
  styleUrls: ['./test-mail.component.css']
})
export class TestMailComponent implements OnInit {

  public action: any = 'http://www.api.freesendmails.com/v1/mails/youmail';

  constructor() { }

  ngOnInit() {
  }
}
