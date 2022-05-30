import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavItem } from '../interfaces/nav-item.interface';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class LayoutComponent {
  isNavExpanded = true;
  navMenu: NavItem[] = [
    {
      name: 'Home',
      path: 'home',
      icon: '/assets/icons/home-active.svg',
    },
    {
      name: 'Games',
      path: 'games',
      icon: '/assets/icons/game-active.svg',
    },
  ];

  constructor() {}

  toggleNav() {
    this.isNavExpanded = !this.isNavExpanded;
  }
}
