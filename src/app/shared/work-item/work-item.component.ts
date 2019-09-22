import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.css']
})
export class WorkItemComponent implements OnInit {

  showOverlay = false;

  showModal = false;

  @Input() workData;

  @HostListener('mouseenter') 
  onMouseEnter() {
    this.showOverlay = true;
  }

  @HostListener('mouseleave') 
  onMouseLeave() {
    this.showOverlay = false;
  }

  constructor() { }

  ngOnInit() {
    console.log(this.workData)
  }

  openModal() {
    this.showModal = !this.showModal;
  }

}
