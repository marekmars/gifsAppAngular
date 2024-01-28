import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { Observer } from 'rxjs';


@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'

})
export class SidebarComponent implements OnInit {

  constructor(private gifsService: GifsService) {

  }
  ngOnInit(): void {
    if (localStorage.getItem('history')) {

    }
  }
  get tags(): string[] {
    return this.gifsService.history;
  }
  search(tag: string) {
    this.gifsService.searchTag(tag);
  }

}
