import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.scss']
})
export class ProfessionalsComponent implements OnInit {
  experiences: any[] = [];

  ngOnInit(): void {
    fetch('../../assets/experiences.json')
      .then(response => response.json())
      .then(data => {
        this.experiences = data;
      });
  }
}
