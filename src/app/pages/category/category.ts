import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category.html',
  styleUrls: ['./category.css']
})
export class CategoryComponent implements OnInit {

  section = '';
  category = '';

  images: string[] = [];

  selectedImage = '';
  isViewerOpen = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.section = this.route.snapshot.paramMap.get('section') || '';
    this.category = this.route.snapshot.paramMap.get('category') || '';

    this.loadImages();
  }


  loadImages() {

    const imageCounts: any = {

      gents: {
        bracelet: 26,
        'gents-ring': 24,
        chains: 47,
        kada: 9,
        bali: 9
      },

      ladies: {
        'long-poth': 45,
        'short-poth': 66,
        'rani-har': 52,
        'chapla-har': 20,
        'choker-har': 10,
        necklace: 152,
        earrings: 55,
        bracelet: 21,
        bangdya: 20,
        'baju-bandha': 20,
        chains: 66,
        'couple-ring': 20,
        dorla: 10,
        'ladies-ring': 100,
        patlya: 20,
        thushi: 47,
        pendents: 38,
        tode: 20,
        vatya: 33,
        vel: 9
      }
    };


    const totalImages = imageCounts?.[this.section]?.[this.category] || 0;


    for (let i = 1; i <= totalImages; i++) {
      this.images.push(
        `assets/${this.section}/${this.category}/${i}.JPG`
      );
    }
  }


  openImage(image: string) {
    this.selectedImage = image;
    this.isViewerOpen = true;
  }


  closeViewer() {
    this.isViewerOpen = false;
  }

}