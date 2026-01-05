import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

interface PlatformPillar {
  icon: string;
  title: string;
  subtitle: string;
  features: string[];
  quote: string;
}

interface Outcome {
  text: string;
  icon: string;
}

@Component({
  selector: 'app-platform',
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './platform.component.html',
  styleUrl: './platform.component.css'
})
export class PlatformComponent implements OnInit {
  currentYear: number = new Date().getFullYear();

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
    // Scroll to top on component load
    window.scrollTo(0, 0);
  }
}

