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
    this.artists = this.allArtists.filter(term => {
      return term.artistName.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
    });
  }

  public smallImageUrl(url: string): string {
    return this.wikiArtService.smallImageUrl(url);
  }
}
