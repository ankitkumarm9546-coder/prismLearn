import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  constructor(private router: Router) {
    // Listen for navigation end to handle fragment scrolling
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      if (event.urlAfterRedirects.includes('#')) {
        const fragment = event.urlAfterRedirects.split('#')[1];
        setTimeout(() => this.scrollToSection(fragment), 100);
      }
    });
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // If element not found, navigate to home page first, then scroll
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      });
    }
  }

  navigateToSection(sectionId: string): void {
    // Check if we're on the home page
    const currentUrl = this.router.url.split('#')[0];
    if (currentUrl === '/' || currentUrl === '') {
      // Already on home page, just scroll
      setTimeout(() => this.scrollToSection(sectionId), 50);
    } else {
      // Navigate to home page first, then scroll
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scrollToSection(sectionId);
        }, 200);
      });
    }
  }
}

