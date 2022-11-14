import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() template: TemplateRef<any>;

  constructor() {
    debugger;
    const data = this.template;
  }

  ngOnInit(): void {
    const data = this.template;
  }

}
