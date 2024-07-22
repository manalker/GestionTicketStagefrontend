import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ImageContainerComponent } from './image-container/image-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HeaderComponent, ContactFormComponent, ImageContainerComponent]
})
export class AppComponent { }
