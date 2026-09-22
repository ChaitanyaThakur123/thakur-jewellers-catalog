import { Component, OnInit, HostListener } from '@angular/core';
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
  selectedImageIndex = 0;

  isViewerOpen = false;


  constructor(private route: ActivatedRoute) {}


  ngOnInit(): void {

    this.section =
      this.route.snapshot.paramMap.get('section') || '';

    this.category =
      this.route.snapshot.paramMap.get('category') || '';

    this.loadImages();

  }


  // =====================================================
  // LOAD IMAGES
  // =====================================================

  loadImages(): void {

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


    const totalImages =
      imageCounts?.[this.section]?.[this.category] || 0;


    this.images = [];


    for (let i = 1; i <= totalImages; i++) {

      this.images.push(
        `assets/${this.section}/${this.category}/${i}.JPG`
      );

    }

  }


  // =====================================================
  // OPEN IMAGE
  // =====================================================

  openImage(image: string, index: number): void {

    this.selectedImage = image;

    this.selectedImageIndex = index;

    this.isViewerOpen = true;


    // Prevent background page scrolling
    document.body.style.overflow = 'hidden';

  }


  // =====================================================
  // NEXT IMAGE
  // =====================================================

  nextImage(): void {

    if (this.images.length === 0) {
      return;
    }


    this.selectedImageIndex++;


    // If last image is reached,
    // go back to first image

    if (
      this.selectedImageIndex >= this.images.length
    ) {

      this.selectedImageIndex = 0;

    }


    this.selectedImage =
      this.images[this.selectedImageIndex];

  }


  // =====================================================
  // PREVIOUS IMAGE
  // =====================================================

  previousImage(): void {

    if (this.images.length === 0) {
      return;
    }


    this.selectedImageIndex--;


    // If first image is reached,
    // go to last image

    if (this.selectedImageIndex < 0) {

      this.selectedImageIndex =
        this.images.length - 1;

    }


    this.selectedImage =
      this.images[this.selectedImageIndex];

  }


  // =====================================================
  // CLOSE VIEWER
  // =====================================================

  closeViewer(): void {

    this.isViewerOpen = false;


    // Enable background scrolling again
    document.body.style.overflow = '';

  }


  // =====================================================
  // KEYBOARD CONTROLS
  // =====================================================

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {

    // Do nothing when image viewer is closed
    if (!this.isViewerOpen) {
      return;
    }


    // LEFT ARROW
    if (event.key === 'ArrowLeft') {

      event.preventDefault();

      this.previousImage();

    }


    // RIGHT ARROW
    if (event.key === 'ArrowRight') {

      event.preventDefault();

      this.nextImage();

    }


    // ESCAPE
    if (event.key === 'Escape') {

      event.preventDefault();

      this.closeViewer();

    }

  }

}