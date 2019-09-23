import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { OdinawardsComponent } from './pages/odinawards/odinawards.component';
import { WorkComponent } from './pages/work/work.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { WorkItemComponent } from './shared/work-item/work-item.component';

const config = {
  apiKey: "AIzaSyDRkicuhpIOuTVL8CdyigbTVht8zx8DxbM",
  authDomain: "odin-cms.firebaseapp.com",
  databaseURL: "https://odin-cms.firebaseio.com",
  projectId: "odin-cms",
  storageBucket: "",
  messagingSenderId: "619206892608",
  appId: "1:619206892608:web:68f74873577ed387b3d3a5"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    OdinawardsComponent,
    WorkComponent,
    FooterComponent,
    HeaderComponent,
    WorkItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
