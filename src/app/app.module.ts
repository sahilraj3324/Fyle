import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // <<<< import it here
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { RepositoryComponent } from './repository/repository.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ProfileComponent,
    RepositoryComponent
  ],
  imports: [
    BrowserModule,FormsModule // <<<< And here
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }