import { Component, OnInit } from '@angular/core';
import { WikiArtService, Groups } from '../services/wiki-art.service';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.page.html',
  styleUrls: ['./styles.page.scss'],
})
export class StylesPage implements OnInit {
  allStyles: any[];
  styles: any[];

  constructor(
    private wikiArtService: WikiArtService,
  ) { }

  public ngOnInit(): void {
    this.wikiArtService.styles().subscribe(styles => {
      this.allStyles = styles;
      this.styles = styles;
    });
  }

  public onSearchTerm(event: any): void {
    this.styles = this.allStyles;
    const val = event.detail.value;
    console.log(val);
    this.styles = this.allStyles.filter(term => {
      return term.title.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
    });
  }


}
