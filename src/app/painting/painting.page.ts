import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { WikiArtService } from '../services/wiki-art.service';
import { WikipediaService } from '../services/wikipedia.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.page.html',
  styleUrls: ['./painting.page.scss'],
})
export class PaintingPage implements OnInit {
  id: string;
  painting: any;

  constructor(
    private router: Router,
    private wikiArtService: WikiArtService,
    private wikipediaService: WikipediaService,
  ) { }

  public ngOnInit(): void {
    const extras = this.router.getCurrentNavigation().extras;
    if (extras && extras.state) {
      this.painting = this.router.getCurrentNavigation().extras.state.painting;
    }
  }

  public fullImageUrl(url: string): string {
    return url.toLowerCase()
      .replace(/jpg\!.*$/, 'jpg')
      .replace(/png\!.*$/, 'png');
  }
}
