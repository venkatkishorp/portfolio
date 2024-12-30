import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-salutation',
  templateUrl: './portfolio-salutation.component.html',
  styleUrls: ['./portfolio-salutation.component.scss']
})
export class PortfolioSalutationComponent implements OnInit {
  opacity: number = 1;

  ngOnInit(): void {
    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;
      if (currentScroll <= 200) {
        this.opacity = 1 - currentScroll / 200;
      } else {
        this.opacity = 0;
      }

      const name_element = <HTMLElement>document.querySelector('.main-div');
      // const image_element = <HTMLElement>document.querySelector('.profile-pic');
      // const ruler_element = <HTMLElement>document.querySelector('.ruler');
      name_element.style.opacity = String(this.opacity);
      // image_element.style.opacity = String(this.opacity);
      // ruler_element.style.opacity = String(this.opacity);
    });
  }
}
