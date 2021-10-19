import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Vuelos } from '../shared/vuelos.model';
import { VuelosService } from '../shared/vuelos.service';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styles: [
  ]
})
export class VuelosComponent implements OnInit {

  constructor(public service: VuelosService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord:Vuelos){
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id:number){
    if(confirm('¿Estas seguro de eliminar este registro?'))
    {
      this.service.deleteVuelos(id)
      .subscribe(
        res=>{
          this.service.refreshList();
          this.toastr.error("Registro Eliminado",'Registro de Vuelos')
        },
        err=>{console.log(err)}
      )
    }
  }

}
