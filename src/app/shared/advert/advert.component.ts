import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.scss'],
  standalone: true,
})
export class AdvertComponent {

  showSmiley = false;

  constructor(private headerService: HeaderService,
    private messageService: MessageService
  ) { }

  toggleSmiley() {
//    this.headerService.showSmiley();
    this.showSmiley = !this.showSmiley;
    this.messageService.sendMessage(this.showSmiley)
  }

}
