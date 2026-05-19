import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

  isSidebarOpen = false;

  gentsMenu = [
    { name: 'Bracelet', route: '/gallery/gents/bracelet' },
    { name: 'Gents Ring', route: '/gallery/gents/gents-ring' },
    { name: 'Chains', route: '/gallery/gents/chains' },
    { name: 'Kada', route: '/gallery/gents/kada' },
    { name: 'Bali', route: '/gallery/gents/bali' }
  ];

  ladiesMenu = [
    { name: 'Long Mangalsutra', route: '/gallery/ladies/long-poth' },
    { name: 'Short Mangalsutra', route: '/gallery/ladies/short-poth' },
    { name: 'Bracelet', route: '/gallery/ladies/bracelet' },
    { name: 'Bangdya', route: '/gallery/ladies/bangdya' },
    { name: 'Baju Bandha', route: '/gallery/ladies/baju-bandha' },
    { name: 'Chains', route: '/gallery/ladies/chains' },
     { name: 'Chapla Har', route: '/gallery/ladies/chapla-har' },
      { name: 'Choker Har', route: '/gallery/ladies/choker-har' },
     { name: 'Couple Ring', route: '/gallery/ladies/couple-ring' },
    { name: 'Dorla', route: '/gallery/ladies/dorla' },
     { name: 'Earrings', route: '/gallery/ladies/earrings' },
    { name: 'Ladies Ring', route: '/gallery/ladies/ladies-ring' },
     { name: 'Necklace', route: '/gallery/ladies/necklace' },
    { name: 'Patlya', route: '/gallery/ladies/patlya' },
    { name: 'Pendents', route: '/gallery/ladies/pendents' },
    { name: 'Rani Har', route: '/gallery/ladies/rani-har' },
    { name: 'Thushi', route: '/gallery/ladies/thushi' },
    { name: 'Tode', route: '/gallery/ladies/tode' },
    { name: 'Vatya', route: '/gallery/ladies/vatya' },
    { name: 'Vel', route: '/gallery/ladies/vel' }
  ];

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }

}