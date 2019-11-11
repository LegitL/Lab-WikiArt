import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { WikiArtService } from '../services/wiki-art.service';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.page.html',
  styleUrls: ['./paintings.page.scss'],
})
export class PaintingsPage implements OnInit {
  title = '';
  artMovement: any;
  artStyle: any;
  paintings: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private wikiArtService: WikiArtService
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        const state = this.router.getCurrentNavigation().extras.state;
        console.log(state);
        this.artMovement = state.artMovement;
        this.artStyle = state.artStyle;
      }
    });
  }

  async ngOnInit() {
    // if (this.artMovement) {
    //   this.paintings = await this.wikiArtService.paintingsByArtMovement(this.artMovement.title);
    //   this.title = this.artMovement.title;
    // } else if (this.artStyle) {
    //   this.paintings = await this.wikiArtService.paintingsByArtStyle(this.artStyle.title);
    //   this.title = this.artStyle.title;
    // }
    // console.log(this.paintings);
  }

  public filterImageUrl(url: string): string {
    return url.replace(/jpg\!.*$/, 'jpg!PortraitSmall.jpg');
  }
}
