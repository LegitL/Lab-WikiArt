import { Component, OnInit } from '@angular/core';
import { WikiArtService } from '../services/wiki-art.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  paintingOfTheDay: any = null;

  constructor(
    private wikiArtService: WikiArtService
  ) { }

  public ngOnInit(): void {
    this.wikiArtService.mostedViewedPaintings().subscribe(paintings => {
      this.paintingOfTheDay = paintings[Math.floor(Math.random() * paintings.length)];
    });
  }

}
