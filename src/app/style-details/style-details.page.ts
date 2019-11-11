import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WikiArtService } from '../services/wiki-art.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-style-details',
  templateUrl: './style-details.page.html',
  styleUrls: ['./style-details.page.scss'],
})
export class StyleDetailsPage implements OnInit {
  style: any;
  paintings: any;
  paintingsCount: 0;
  pageSize = 0;
  currentPage = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private wikiArtService: WikiArtService,
  ) { }

  ngOnInit() {
    const styleSlug = this.activatedRoute.snapshot.paramMap.get('slug');
    if (styleSlug) {
      this.wikiArtService.style(styleSlug).subscribe(style => {
        this.style = style;
      });
      this.wikiArtService.stylePaintings(styleSlug, this.currentPage++).subscribe(data => {
        this.paintings = data.Paintings;
        this.paintingsCount = data.AllPaintingsCount;
        this.pageSize = data.PageSize;
      });
    }
  }

}
