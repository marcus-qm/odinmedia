import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navItems = [
    {
      "name": "About",
      "link": "/about"
    }, {
      "name": "Work",
      "link": "/work"
    }, {
      "name": "Odin Awards",
      "link": "/award"
    }, {
      "name": "Blog",
      "link": "/blog"
    }, {
      "name": "Contact",
      "link": "/contact"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
