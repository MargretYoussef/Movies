import { AboutComponent } from './about/about.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GallaryComponent } from './gallary/gallary.component';
import { NotFoundedComponent } from './not-founded/not-founded.component';
import { TvComponent } from './tv/tv.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GallaryComponent },
  { path: 'moviedetails', component: MoviedetailsComponent },
  { path: 'tv', component: TvComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'moviedetails/:id', component: MoviedetailsComponent },
  { path: '**', component: NotFoundedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
