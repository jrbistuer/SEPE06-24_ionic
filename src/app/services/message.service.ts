import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private subject = new Subject<any>();

    sendMessage(message: boolean) {
        this.subject.next({ text: message });
    }

    onMessage(): Observable<any> {
        return this.subject.asObservable();
    }

}