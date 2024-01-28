
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})

export class GifsService {
  public gifsList: Gif[] = [];
  private _history: string[] = [];
  private _apiKeyGifs: string = 'lgkdThlKkRddzePbY1szkLA7evDiGipE';
  private _url: string = 'https://api.giphy.com/v1/gifs'

  constructor(private _http: HttpClient) {
    this.loadLocalStorage();
  }
  get history(): string[] {
    return [...this._history];
  }

  searchTag(tag: string): void {
    this._http.get(this._url)
    if (tag.trim().length === 0) return;
    this.organizeHistory(tag);
    this._history.unshift(tag.toLowerCase());
    this.saveLocalStorage();
    const params = new HttpParams()
      .set('api_key', this._apiKeyGifs)
      .set('q', tag)
      .set('limit', '10')

    this._http.get<SearchResponse>(`${this._url}/search`, { params }).subscribe((resp: SearchResponse) => {
      this.gifsList = resp.data;
      console.log(this.gifsList)
    })

  }
  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this.history))

  }
  private loadLocalStorage(): void {
    if (!localStorage.getItem('history')) {
      return;
    }
    this._history = JSON.parse(localStorage.getItem('history')!)
    if (this._history.length === 0) return
    this.searchTag(this._history[0])

  }
  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase();
    if (this._history.includes(tag)) {
      this._history = this._history.filter(item => item !== tag);
    }
    this._history = this._history.splice(0, 10);
  }
}
