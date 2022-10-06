import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {
  classCondition: string = '';
  isSidePanelOpen: boolean = false;
  role: string = '';
  theme:string= 'bg-primary';
  constructor() { }

  ngOnInit(): void {
  }
  onAdd() {
    this.isSidePanelOpen = false;

  }
  onClose() {
    this.isSidePanelOpen = true;
  }
  isSidePanel() {
    return this.isSidePanelOpen;
  }
  onFunction(type: string) {
    this.classCondition = type;
  }
  getClass() {
    return 'bg-danger';
  }
  // onUser() {

  // }
  // onAdmin() {

  // }
}
