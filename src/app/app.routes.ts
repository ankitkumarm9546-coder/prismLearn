import { Routes } from '@angular/router';
import { SchoolComponent } from './component/home/school/school.component';
import { PlatformComponent } from './component/home/platform/platform.component';

export const routes: Routes = [
  { path: '', component: SchoolComponent },
  { path: 'platform', component: PlatformComponent }
];
