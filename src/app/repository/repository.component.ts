import { Component, Input , OnInit, inject  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-repository',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repository.component.html',
  styleUrl: './repository.component.css'
})


export class RepositoryComponent implements OnInit {


  @Input() userData: any;
  
  
  repositories: any[] = [];
  page = 1;
  perPage = 10;
  isLoading = false;

  http =inject(HttpClient);
  
  ngOnInit():void {
    if (this.userData) {
      this.fetchRepositories();
    }
  }

  fetchRepositories() {
    this.isLoading = true; 
    this.http.get(`https://api.github.com/users/${this.userData.login}/repos?page=${this.page}&per_page=${this.perPage}`).subscribe(
      (data: any) => {
        this.repositories=data;
        console.log(data);
        this.isLoading = false;
      },
      (error: any) => {
        console.log(this.userData);
        console.error('Error fetching user details:', error);
        this.isLoading = false;
      }
    );
  }

  nextPage() {
    this.page++;
    this.fetchRepositories(); // Fetch repositories for the next page
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.fetchRepositories(); // Fetch repositories for the previous page
    }
  }

}
