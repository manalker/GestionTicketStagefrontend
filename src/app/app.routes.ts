import { Routes } from '@angular/router';
import { ImageContainerComponent } from './image-container/image-container.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

export const routes: Routes = [
  { path: '', component: ImageContainerComponent },
  { path: 'contact', component: ContactFormComponent },
  // Ajouter d'autres routes si nécessaire
];
