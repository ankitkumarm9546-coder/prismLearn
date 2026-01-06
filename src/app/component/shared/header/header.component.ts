import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  scrolled: boolean = false;
  isMenuOpen: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialization if needed
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.scrolled = window.scrollY > 50;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string): void {
    // Check if we're on the home page
    const currentUrl = this.router.url.split('#')[0];
    if (currentUrl === '/' || currentUrl === '') {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.isMenuOpen = false;
      }
    } else {
      // Navigate to home page first, then scroll
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          this.isMenuOpen = false;
        }, 200);
      });
    }
  }
}

