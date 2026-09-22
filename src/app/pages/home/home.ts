
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

  // GENTS COLLECTION
  gentsMenu = [
    {
      name: 'ब्रेसलेट',
      route: '/gallery/gents/bracelet'
    },
    {
      name: 'Gents अंगठ्या',
      route: '/gallery/gents/gents-ring'
    },
    {
      name: 'चैन',
      route: '/gallery/gents/chains'
    },
    {
      name: 'कडा',
      route: '/gallery/gents/kada'
    },
    {
      name: 'बाळी',
      route: '/gallery/gents/bali'
    }
  ];


  // LADIES COLLECTION
  ladiesMenu = [
    {
      name: 'Long मंगळसूत्र',
      route: '/gallery/ladies/long-poth'
    },
    {
      name: 'शॉर्ट मंगळसूत्र',
      route: '/gallery/ladies/short-poth'
    },
    {
      name: 'ब्रेसलेट',
      route: '/gallery/ladies/bracelet'
    },
    {
      name: 'बांगड्या',
      route: '/gallery/ladies/bangdya'
    },
    {
      name: 'बाजूबंद',
      route: '/gallery/ladies/baju-bandha'
    },
    {
      name: 'चैन',
      route: '/gallery/ladies/chains'
    },
    {
      name: 'चपला हार',
      route: '/gallery/ladies/chapla-har'
    },
    {
      name: 'चोकर हार',
      route: '/gallery/ladies/choker-har'
    },
    {
      name: 'कपल रिंग',
      route: '/gallery/ladies/couple-ring'
    },
    {
      name: 'दोरला',
      route: '/gallery/ladies/dorla'
    },
    {
      name: 'कानातले',
      route: '/gallery/ladies/earrings'
    },
    {
      name: 'Ladies अंगठ्या',
      route: '/gallery/ladies/ladies-ring'
    },
    {
      name: 'नेकलेस',
      route: '/gallery/ladies/necklace'
    },
    {
      name: 'पाटल्या',
      route: '/gallery/ladies/patlya'
    },
    {
      name: 'पेंडंट',
      route: '/gallery/ladies/pendents'
    },
    {
      name: 'राणी हार',
      route: '/gallery/ladies/rani-har'
    },
    {
      name: 'ठुशी',
      route: '/gallery/ladies/thushi'
    },
    {
      name: 'तोडे',
      route: '/gallery/ladies/tode'
    },
    {
      name: 'वाट्या',
      route: '/gallery/ladies/vatya'
    },
    {
      name: 'वेल',
      route: '/gallery/ladies/vel'
    }
  ];


  // OPEN SIDEBAR
  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }


  // CLOSE SIDEBAR
  closeSidebar(): void {
    this.isSidebarOpen = false;
  }

}

