import { Component } from '@angular/core';
import { GifsService } from '../../components/services/gifs.service';
import { Gif } from '../../interfaces/interface';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private gifsService:GifsService){

  }

  get gifs():Gif[]{
    return this.gifsService.gifList
  }

}
