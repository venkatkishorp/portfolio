import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  resumeScroll: boolean = false;

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      const footer = <HTMLElement>document.querySelector('.footer');
    })
  }

  onResumeClick(event: string): void {
    this.resumeScroll = true;
  }
}
