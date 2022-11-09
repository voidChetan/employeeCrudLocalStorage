import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() headerText: string;
  @Input() isAddButtonVisible: boolean;
  @Input() cardClass: string ;
  @Output() onAddEmit = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    debugger
    this.onAddEmit.emit('Hi');
  }
}
