import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-portfolio-body',
  templateUrl: './portfolio-body.component.html',
  styleUrls: ['./portfolio-body.component.scss']
})
export class PortfolioBodyComponent {
  constructor(private snackBar: MatSnackBar) {}
  
  copyToClipboard(): void {
    navigator.clipboard.writeText('venkatkishorp@gmail.com').then(
      () => this.snackBar.open('Text copied to clipboard!', 'Close', { duration: 2000 }),
      (err) => this.snackBar.open('Failed to copy text: ' + err, 'Close', { duration: 2000 })
    );
  }
}
