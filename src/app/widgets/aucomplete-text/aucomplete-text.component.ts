import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './aucomplete-text.component.html',
  styleUrls: ['./aucomplete-text.component.css']
})
export class AucompleteTextComponent implements OnInit {

  @Input() colArr: any[]= [];
  @Input() gridData: any[]= [];

  constructor() { }

  ngOnInit(): void {
  }

}
