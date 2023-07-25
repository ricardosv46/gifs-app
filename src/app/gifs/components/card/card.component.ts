import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/interface';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  public gif:Gif = {} as Gif;

  ngOnInit(): void {
    if(!this.gif) throw new Error('Gif property is required')
  }
}
