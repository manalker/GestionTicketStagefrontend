import { Component } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { ImageContainerComponent } from '../image-container/image-container.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [ContactFormComponent, ImageContainerComponent]
})
export class HomeComponent {}
