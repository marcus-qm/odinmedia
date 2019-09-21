import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutBody = {
    title: "",
    subtext: "",
    heroHeader1: "",
    heroContent1: "",
    heroHeader2: "",
    heroContent2: "",
    heroHeader3: "",
    heroContent3: "",
    heroHeader4: "",
    heroContent4: "",
    heroHeader5: "",
    heroContent5: "",
    heroHeader6: "",
    heroContent6: "",
  }

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    const aboutContent = this.db.collection('about').valueChanges();
    aboutContent.subscribe(value => this.parseAboutResponse(value));
  }

  parseAboutResponse(value) {
    const content = value[0];
    this.aboutBody.title = content.title;
    this.aboutBody.subtext = content.subtext;
    this.aboutBody.heroHeader1 = content.heroHeader1;
    this.aboutBody.heroHeader2 = content.heroHeader2;
    this.aboutBody.heroHeader3 = content.heroHeader3;
    this.aboutBody.heroHeader4 = content.heroHeader4;
    this.aboutBody.heroHeader5 = content.heroHeader5;
    this.aboutBody.heroHeader6 = content.heroHeader6;
    this.aboutBody.heroContent1 = content.heroContent1;
    this.aboutBody.heroContent2 = content.heroContent2;
    this.aboutBody.heroContent3 = content.heroContent3;
    this.aboutBody.heroContent4 = content.heroContent4;
    this.aboutBody.heroContent5 = content.heroContent5;
    this.aboutBody.heroContent6 = content.heroContent6;
    console.log(this.aboutBody)
  }


}
