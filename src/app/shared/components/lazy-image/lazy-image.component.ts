
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent implements OnInit {
  @Input() public url!: string;
  @Input() public alt!: string;
  public isLoaded: boolean = false;
  constructor() {

  }
  ngOnInit(): void {
    if (!this.url) {
      throw new Error('url property is required');
    }
    this.alt ? this.alt : 'image';

  }
  onLoad():void {
    this.isLoaded = true;
  }
}
