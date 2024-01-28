import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']

})
export class CardComponent implements OnInit {
  @Input() public gif!: Gif;
  constructor() {

  }
  ngOnInit(): void {
    if (this.gif === undefined) {
      throw new Error('gif property is required');
    }
  }

}
