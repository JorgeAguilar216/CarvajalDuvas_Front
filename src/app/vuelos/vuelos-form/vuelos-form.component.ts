import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Vuelos } from 'src/app/shared/vuelos.model';
import { VuelosService } from 'src/app/shared/vuelos.service';

@Component({
  selector: 'app-vuelos-form',
  templateUrl: './vuelos-form.component.html',
  styles: [
  ]
})
export class VuelosFormComponent implements OnInit {

  constructor(public service:VuelosService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if(this.service.formData.vueloID == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form:NgForm){
    this.service.postVuelos().subscribe(
      res =>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Registro Creado','Registro de Vuelos')
      },
      err =>{console.log(err);}
    );
  }

  updateRecord(form:NgForm){
    this.service.putVuelos().subscribe(
      res =>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Registro Actualizado','Registro de Vuelos')
      },
      err =>{console.log(err);}
    );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new Vuelos();
  }

}
