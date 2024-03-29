import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  private display: BehaviorSubject<'open' | 'close'> = new BehaviorSubject<any>('close');

  watch(): Observable<'open' | 'close'> {
    return this.display.asObservable();
  }

  open() {
    this.display.next('open');
  }

  close() {
    this.display.next('close');
  }

  openClose() {
    const valueStaOfNav = this.display.getValue()
    switch(valueStaOfNav){
      case "open":  
        this.close(); 
        break
      case "close": 
        this.open(); 
        break
    }
  }
}