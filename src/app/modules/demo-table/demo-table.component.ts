import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-demo-table',
  templateUrl: './demo-table.component.html',
  styleUrls: ['./demo-table.component.css']
})
export class DemoTableComponent implements OnInit, OnChanges {
  @Input() options: any = {};
  @Input() data: any[];

  @Output()
  originItems: any[];
  items: any[];
  selectionRowspan: Number;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: any) {
    if (changes.data) {
      this.originItems = changes.data.currentValue;
      if (this.originItems) {
        this.items = this.originItems;
        for (let item of this.items) {

        }
      }
      if (this.options.subs && this.items) {
        this.options.subs.array.forEach(sub => {
          this.items.forEach(record => {
            if (sub.convertToJson) {
              if (typeof record[sub.subName] === 'string') {
                record[sub.subName] = JSON.parse(record[sub.subName]);
              }
            }
            record[sub.destination] = record[sub.subName] ? record[sub.subName][sub.origin] ? record[sub.subName][sub.origin] : '' : '';
          });
        });
      }
    }
    if (changes.options) {
      this.selectionRowspan = this.options.selectable ? 2 : 1;
    }
  }

}
