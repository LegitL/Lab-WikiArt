import { Component, OnInit } from '@angular/core';
import { WikiArtService } from '../services/wiki-art.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.page.html',
  styleUrls: ['./artists.page.scss'],
})
export class ArtistsPage implements OnInit {
  allArtists: any[];
  artists: any[];

  constructor(
    private wikiArtService: WikiArtService
  ) { }

  public ngOnInit(): void {
    this.wikiArtService.artists().subscribe(artists => {
      this.allArtists = artists;
      this.artists = artists;
    });
  }

  public onSearchTerm(event: any): void {
    this.artists = this.allArtists;
    const val = event.detail.value;
    console.log(val);
    this.artists = this.allArtists.filter(term => {
      return term.artistName.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
    });
  }

  public filterImageUrl(url: string): string {
    return url
      .replace(/jpg\!.*$/, 'jpg!PortraitSmall.jpg')
      .replace(/png\!.*$/, 'png!PortraitSmall.png');
  }
}
