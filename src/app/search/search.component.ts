

import { Component, OnInit, inject } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RepositoryComponent } from '../repository/repository.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ProfileComponent,FormsModule,HttpClientModule,RepositoryComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit{
  profile: string = "";
  userData: any; // Define a property to hold the fetched user data
  submitted: boolean = false;

  http =inject(HttpClient);

  ngOnInit(): void {
    this.handleSubmit()
  }

  

  handleSubmit(): void {
    // Fetch user details from GitHub API using the username input
    this.http.get(`https://api.github.com/users/${this.profile}`).subscribe(
      (data: any) => {
        this.userData = data;
        this.submitted = true;
        console.log(data);
      },
      (error: any) => {
        console.error('Error fetching user details:', error);
      }
    );
    
    
  }
}
