import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../../types/location.interface';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
@Component({
  standalone: true,
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardComponent
  ]
})
export class CardsListComponent implements OnInit {
  @Input() unitsList: Location[] = [];

  constructor() { }

  ngOnInit(): void { }

}
