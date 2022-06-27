import { Component, OnInit, Input} from '@angular/core';
import { Animal } from '../models/Animal';
import {ZooService} from '../../services/zoo.service';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css']
})
export class ZooComponent implements OnInit {
animalList: Animal[] = [];
  constructor(private animalService: ZooService) { }

  onLike(animal: Animal): void{
    alert(`I like the ${animal.name}`!!);
  }

  ngOnInit(): void {
   this.animalList = this.animalService.getAnimals();
  }

}
