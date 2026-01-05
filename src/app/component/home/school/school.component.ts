import { Component, OnInit, HostListener, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
}

interface ImprovementGoal {
  title: string;
  icon: string;
  description: string;
  image: string;
}

interface PlatformPillar {
  icon: string;
  title: string;
  subtitle: string;
  features: string[];
  quote: string;
}

interface Insight {
  question: string;
  answer: string;
}

interface RoleValue {
  role: string;
  icon: string;
  benefits: string[];
  image: string;
}

interface Outcome {
  text: string;
  icon: string;
}

@Component({
  selector: 'app-school',
  imports: [CommonModule, FormsModule, RouterModule, HeaderComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './school.component.html',
  styleUrl: './school.component.css'
})
export class SchoolComponent implements OnInit {
  scrolled: boolean = false;
  isMenuOpen: boolean = false;
  currentTestimonial: number = 0;
  currentYear: number = new Date().getFullYear();
  showPopup: boolean = false;
  selectedPillar: PlatformPillar | null = null;

  features: Feature[] = [
    {
      icon: '🎓',
      title: 'Expert Teachers',
      description: 'Learn from experienced educators dedicated to your success'
    },
    {
      icon: '📚',
      title: 'Comprehensive Curriculum',
      description: 'Well-structured courses covering all essential topics'
    },
    {
      icon: '💻',
      title: 'Online Learning',
      description: 'Access courses anytime, anywhere with our online platform'
    },
    {
      icon: '🏆',
      title: 'Certification',
      description: 'Get recognized certificates upon course completion'
    },
    {
      icon: '👥',
      title: 'Community Support',
      description: 'Join a vibrant community of learners and mentors'
    },
    {
      icon: '📱',
      title: 'Mobile Friendly',
      description: 'Learn on the go with our mobile-optimized platform'
    }
  ];

  testimonials: Testimonial[] = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Principal',
      image: './assets/images/faces/1.jpg',
      text: 'This platform has transformed how we assess and track student learning. The skill-based approach gives us insights we never had before.',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      role: 'Academic Head',
      image: './assets/images/faces/2.jpg',
      text: 'The exam generation feature alone saves us weeks of work. But more importantly, it ensures consistency across all our assessments.',
      rating: 5
    },
    {
      name: 'Meera Patel',
      role: 'Vice Principal',
      image: './assets/images/faces/3.jpg',
      text: 'Finally, a system that connects assessments, skills, and records. Our teachers love it, and our academic outcomes have improved significantly.',
      rating: 5
    }
  ];

  pricingPlans: PricingPlan[] = [
    {
      name: 'Basic',
      price: '$29',
      period: '/month',
      features: [
        'Access to basic courses',
        'Community forum',
        'Email support',
        'Certificate of completion'
      ],
      buttonText: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$59',
      period: '/month',
      features: [
        'All basic features',
        'Advanced courses',
        'Priority support',
        'Live sessions',
        'Career guidance',
        'Premium certificate'
      ],
      popular: true,
      buttonText: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      features: [
        'All professional features',
        '1-on-1 mentoring',
        'Custom learning path',
        '24/7 support',
        'Job placement assistance',
        'Lifetime access'
      ],
      buttonText: 'Contact Sales'
    }
  ];

  stats = [
    { number: '10K+', label: 'Students' },
    { number: '500+', label: 'Courses' },
    { number: '200+', label: 'Instructors' },
    { number: '95%', label: 'Success Rate' }
  ];

  improvementGoals: ImprovementGoal[] = [
    {
      title: 'Personalised Assessment',
      icon: '📊',
      description: 'Design assessments that accurately measure student understanding and track learning outcomes with precision.',
      image: 'https://unsplash.com/photos/fw7lR3ibfpU/download?force=true&w=800'
    },
    {
      title: 'Applied skill tracking',
      icon: '👁️',
      description: 'vocational exposure from Class 6. Enable skill modules (coding, financial literacy, design thinking), project-based learning templates, internship tracking, and comprehensive student skill portfolios.',
      image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Exam Paper Generator',
      icon: '⏱️',
      description: 'Create comprehensive examination papers quickly and efficiently, reducing preparation time from hours to minutes.',
      image: 'https://unsplash.com/photos/S11gLPPfpbc/download?force=true&w=800'
    },
    {
      title: 'Student portfolio',
      icon: '✅',
      description: 'Maintain accurate and comprehensive student records that ensure data integrity and easy accessibility.',
      image: 'https://unsplash.com/photos/ykgLX_CwtDw/download?force=true&w=800'
    }
  ];

  platformPillars: PlatformPillar[] = [
    {
      icon: '🔍',
      title: 'Assessment Generator with Skill Intelligence',
      subtitle: 'Design assessments that evaluate understanding, application, and growth.',
      features: [
        'Question creation mapped to skills & concepts',
        'Difficulty-balanced papers (easy → advanced)',
        'Section-wise and skill-wise weightage control',
        'Continuous assessment support',
        'Auto-generated insights after evaluation'
      ],
      quote: 'Every assessment becomes a learning signal.'
    },
    {
      icon: '🧾',
      title: 'Examination Generator Built on Academic Data',
      subtitle: 'Stop building exams from scratch. Start generating them from what you already teach.',
      features: [
        'Exam papers generated from stored syllabus & records',
        'Consistent blueprint across sections & classes',
        'Term exams, unit tests, practice exams',
        'Reduced dependency on individuals',
        'Repeatable academic standards year after year'
      ],
      quote: 'Exams aligned with learning—not guesswork.'
    },
    {
      icon: '🧠',
      title: 'Skill-Wise Tracking & Section Design',
      subtitle: 'Understand learning at the skill level, not just subject level.',
      features: [
        'Define skills within each subject',
        'Assign importance through weightage',
        'Auto-divide question papers into skill-focused sections',
        'Track mastery, progress, and gaps over time'
      ],
      quote: 'See where students struggle. Act before it\'s too late.'
    },
    {
      icon: '🎓',
      title: 'Student Management & Academic Continuity',
      subtitle: 'One student. One academic journey. Fully traceable.',
      features: [
        'Unified student profiles',
        'Year-on-year academic history',
        'Skill progression timelines',
        'Secure, structured records',
        'Easy access for teachers and leadership'
      ],
      quote: 'Progress is continuous—even when classes change.'
    }
  ];

  insights: Insight[] = [
    {
      question: 'Which skills are improving?',
      answer: 'Real-time skill progression tracking across all subjects'
    },
    {
      question: 'Which classes need intervention?',
      answer: 'Automated alerts for classes falling behind benchmarks'
    },
    {
      question: 'Which assessments are working?',
      answer: 'Performance analytics showing assessment effectiveness'
    },
    {
      question: 'Where is learning slowing down?',
      answer: 'Early warning system for learning gaps and bottlenecks'
    }
  ];

  roleValues: RoleValue[] = [
    {
      role: 'Teachers',
      icon: '👩‍🏫',
      benefits: [
        'Faster paper creation',
        'Clear assessment structure',
        'Less admin, more teaching'
      ],
      image: 'https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      role: 'Academic Heads',
      icon: '🏫',
      benefits: [
        'Standardized assessment quality',
        'Real learning visibility',
        'Evidence-based planning'
      ],
      image: 'https://images.unsplash.com/photo-1700631102134-9aef0b7fe818?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      role: 'School Management',
      icon: '🧑‍💼',
      benefits: [
        'Academic consistency at scale',
        'Transparent records',
        'Inspection-ready data anytime'
      ],
      image: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      role: 'Students',
      icon: '🎓',
      benefits: [
        'Track your own progress',
        'View skill development',
        'Access learning resources',
        'Monitor academic performance'
      ],
      image: 'https://images.unsplash.com/photo-1698993026848-f67c1eb7f989?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      role: 'Parents',
      icon: '👨‍👩‍👧‍👦',
      benefits: [
        'Student progress reports',
        'Identify lacking areas transparently',
        'Track skill development over time',
        'Everything transparent and accessible'
      ],
      image: 'https://images.unsplash.com/photo-1563066327-4b5de44b4b3a?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  outcomes: Outcome[] = [
    {
      text: 'Consistent assessment standards',
      icon: '✔'
    },
    {
      text: 'Reduced manual effort',
      icon: '✔'
    },
    {
      text: 'Early identification of learning gaps',
      icon: '✔'
    },
    {
      text: 'Skill-based academic clarity',
      icon: '✔'
    },
    {
      text: 'Stronger learning outcomes',
      icon: '✔'
    }
  ];

  ngOnInit(): void {
    // Initialize component
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.scrolled = window.scrollY > 50;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.isMenuOpen = false;
    }
  }

  nextTestimonial(): void {
    this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
  }

  prevTestimonial(): void {
    this.currentTestimonial = (this.currentTestimonial - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goToTestimonial(index: number): void {
    this.currentTestimonial = index;
  }

  handleImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img) {
      // For hero banner image, use a placeholder dashboard image
      if (img.classList.contains('hero-banner-image')) {
        img.src = `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#667eea;stop-opacity:1" /><stop offset="50%" style="stop-color:#764ba2;stop-opacity:1" /><stop offset="100%" style="stop-color:#f093fb;stop-opacity:1" /></linearGradient></defs><rect width="800" height="600" fill="url(#grad1)"/><rect x="50" y="50" width="700" height="80" rx="8" fill="rgba(255,255,255,0.2)"/><rect x="50" y="160" width="320" height="180" rx="8" fill="rgba(255,255,255,0.15)"/><rect x="390" y="160" width="360" height="180" rx="8" fill="rgba(255,255,255,0.15)"/><rect x="50" y="370" width="700" height="180" rx="8" fill="rgba(255,255,255,0.15)"/><text x="400" y="100" font-family="Arial" font-size="24" fill="white" text-anchor="middle" font-weight="bold">Dashboard Preview</text></svg>`)}`;
      } else if (img.closest('.feature-card-image')) {
        // For feature card images, use a placeholder gradient image
        img.src = `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><defs><linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#e9ecef;stop-opacity:1" /><stop offset="100%" style="stop-color:#dee2e6;stop-opacity:1" /></linearGradient></defs><rect width="800" height="600" fill="url(#grad2)"/><text x="400" y="300" font-family="Arial" font-size="24" fill="#6c757d" text-anchor="middle">Image</text></svg>`)}`;
      } else {
        const initial = this.testimonials[this.currentTestimonial]?.name?.charAt(0) || 'U';
        img.src = `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><circle cx="24" cy="24" r="20" fill="#6366f1"/><text x="24" y="28" font-size="20" fill="white" text-anchor="middle">${initial}</text></svg>`)}`;
      }
    }
  }

  // Show More functionality
  showMorePlatform: boolean = false;
  showMoreInsights: boolean = false;
  showMoreRoles: boolean = false;
  showMoreOutcomes: boolean = false;

  get institutionalRoles(): RoleValue[] {
    return this.roleValues.filter(r => ['Teachers', 'Academic Heads', 'School Management'].includes(r.role));
  }

  get studentParentRoles(): RoleValue[] {
    return this.roleValues.filter(r => ['Students', 'Parents'].includes(r.role));
  }

  toggleShowMore(section: string): void {
    switch(section) {
      case 'platform':
        this.showMorePlatform = !this.showMorePlatform;
        break;
      case 'insights':
        this.showMoreInsights = !this.showMoreInsights;
        break;
      case 'roles':
        this.showMoreRoles = !this.showMoreRoles;
        break;
      case 'outcomes':
        this.showMoreOutcomes = !this.showMoreOutcomes;
        break;
    }
  }

  shouldShowMoreButton(section: string, items: any[]): boolean {
    // Show button if more than 4 items
    return items.length > 4;
  }

  openPillarPopup(index: number): void {
    if (index >= 0 && index < this.platformPillars.length) {
      this.selectedPillar = this.platformPillars[index];
      this.showPopup = true;
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
  }

  closePopup(): void {
    this.showPopup = false;
    this.selectedPillar = null;
    document.body.style.overflow = ''; // Restore scrolling
  }
}

