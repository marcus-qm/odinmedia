import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.css']
})
export class WorkItemComponent implements OnInit {

  @Input() workData;

  @HostListener('mouseenter') 
  onMouseEnter() {
    console.log('enter')
  }

  @HostListener('mouseleave') 
  onMouseLeave() {
    console.log('leave')
  }

  constructor() { }

  ngOnInit() {
    console.log(this.workData)
  }

}
