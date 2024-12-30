import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];
  ngOnInit(): void {
    fetch('../../assets/projects.json')
      .then(response => response.json())
      .then(data => {
        this.projects = data;
      });
  }
}
