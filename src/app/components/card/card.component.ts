import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../../types/location.interface';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [CommonModule, CardComponent]
})
export class CardComponent implements OnInit {
  @Input() card!: Location;

  constructor() { }

  ngOnInit(): void {
  }

}
