
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-Models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {
  @Output() typechages: EventEmitter<string>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  changetoHybrid(){
    this.typechages.emit('Hybrid');
  }
  changetoKiaSuv(){
    this.typechages.emit('Suv');
  }
  changetoKiaSedan(){
    this.typechages.emit('Sedan');
  }
  changetoToyotaMini(){
    this.typechages.emit('minivans');
  }
  changetoToyotaElectric(){
    this.typechages.emit('Electric');
  }
  changetoToyotaSUV(){
    this.typechages.emit('suvToyota');
  }
  changetoBack(){
    this.typechages.emit('');
  }
}
