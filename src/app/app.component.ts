import { Component } from '@angular/core';
import { JOURNAL } from './journalEntry'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-eloquent-JS';
  journalData = JOURNAL;
  eventType = this.event(JOURNAL);
  table = this.tableFor(event,JOURNAL);
  filterPhi = function(eventType,journalData) {
    for(let event of eventType ) {
      let correlation = this.phi(this.tableFor(event, JOURNAL));
      if(correlation > 0.2 || correlation < -0.2) {
        console.log(event + ":", correlation);
      }
    }
  }


   event(params): Array<string> {
    let type = [];
    for (let events of params) {
      for (let event of events.events) {
        if (!type.includes(event)) type.push(event);
      }           
    }
  
    console.log(type);
    return type;
   
  };

  tableFor(event,journal:any): any{
    let table = [0,0,0,0];
    for (let i = 0; i< journal.length; i++) {
      let entry = journal[i], index = 0;
      if(entry.events.includes(event)) index += 1;
      if(entry.squirrel) index += 2;
      table[index] += 1;
    }
    return table;
  }

  phi([n00,n01,n10,n11]) : Number{
    return (n11 * n00 - n10 * n01)/
      Math.sqrt((n10 + n11)* (n00 + n01) * (n01 + n11) * (n00 + n10));
  }

  

}
