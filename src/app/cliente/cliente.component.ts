import { Component, OnInit } from '@angular/core';
import { Vuelos } from '../shared/vuelos.model';
import { VuelosService } from '../shared/vuelos.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: [
  ]
})
export class ClienteComponent implements OnInit {

  constructor(public service: VuelosService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

}
