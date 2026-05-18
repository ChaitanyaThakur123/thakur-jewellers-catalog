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
    { name: 'Long Poth', route: '/gallery/ladies/long-poth' },
    { name: 'Short Poth', route: '/gallery/ladies/short-poth' },
    { name: 'Har', route: '/gallery/ladies/har' },
    { name: 'Necklace', route: '/gallery/ladies/necklace' },
    { name: 'Earrings', route: '/gallery/ladies/earrings' },
    { name: 'Bracelet', route: '/gallery/ladies/bracelet' },
    { name: 'Bangdya', route: '/gallery/ladies/bangdya' },
    { name: 'Baju Bandha', route: '/gallery/ladies/baju-bandha' },
    { name: 'Chains', route: '/gallery/ladies/chains' },
    { name: 'Dorla', route: '/gallery/ladies/dorla' },
    { name: 'Kudke', route: '/gallery/ladies/kudke' },
    { name: 'Ladies Kada', route: '/gallery/ladies/ladies-kada' },
    { name: 'Patlya', route: '/gallery/ladies/patlya' },
    { name: 'Thushi', route: '/gallery/ladies/thushi' },
    { name: 'Pendents', route: '/gallery/ladies/pendents' },
    { name: 'Tode', route: '/gallery/ladies/tode' },
    { name: 'Vatya', route: '/gallery/ladies/vatya' }
  ];

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }

}