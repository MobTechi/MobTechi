import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { CONFIG } from 'src/config';

@Directive({
  selector: '[firebaseImgLoader]'
})
export class FirebaseImgLoaderDirective implements OnInit {
  @Input('firebaseImgLoader') imageUrl: string;


  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    if (this.imageUrl) {
      const suffix: string = '?alt=media';
      // Replace '/' with '%2F'
      const encodedUrlSegment = this.imageUrl.replace(/\//g, '%2F');
      const finalUrl = `${CONFIG.firebaseStorageURL}${encodedUrlSegment}${suffix}`;
      // Set the src attribute of the element
      this.el.nativeElement.src = finalUrl;
    }
  }
}