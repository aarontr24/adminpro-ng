import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital.model';
import { HospitalService } from '../../services/service.index';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';
import Swal from 'sweetalert2';


declare var swal: any;

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: []
})
export class HospitalesComponent implements OnInit {

  hospitales: Hospital[] = [];

  constructor(
    public _hospitalService: HospitalService,
    public _modalUploadService: ModalUploadService
  ) { }

  ngOnInit() {
    this.cargarHospitales();

    this._modalUploadService.notificacion
          .subscribe( () => this.cargarHospitales() );
  }

  buscarHospital( termino: string ) {

    if ( termino.length <= 0 ) {
      this.cargarHospitales();
      return;
    }

    this._hospitalService.buscarHospital( termino )
            .subscribe( hospitales => this.hospitales = hospitales );

  }

  cargarHospitales() {
    this._hospitalService.cargarHospitales()
            .subscribe( hospitales => this.hospitales = hospitales );
  }


  guardarHospital( hospital: Hospital) {

    this._hospitalService.actualizarHospital( hospital )
            .subscribe();

  }

  borrarHospital( hospital: Hospital ) {

    this._hospitalService.borrarHospital( hospital._id )
            .subscribe( () =>  this.cargarHospitales() );

  }

  crearHospital() {

    Swal.fire({
      title: 'Crear hospital',
      text: 'Ingrese el nombre del hospital',
      input: 'text',
      icon: 'info',
      // inputValue: inputValue,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value || value.length === 0) {
          return 'You need to write something!';
        }
      }
    }).then((valor) => {
      if ( !valor.value) {
      return;
      }
      this._hospitalService.crearHospital( valor.value )
              .subscribe( () => this.cargarHospitales() );
      // console.log(value.value);
    });

    // Swal.fire({
    //   title: 'Crear hospital',
    //   text: 'Ingrese el nombre del hospital',
    //   input: 'text'
    //   // content: 'input',
    //   icon: 'info',
    //   // buttons: true,
    //   // dangerMode: true
    // }).then( (valor: string ) => {

    //   if ( !valor || valor.length === 0 ) {
    //     return;
    //   }

    //   this._hospitalService.crearHospital( valor )
    //           .subscribe( () => this.cargarHospitales() );

    // });

  }

  actualizarImagen( hospital: Hospital ) {

    this._modalUploadService.mostrarModal( 'hospitales', hospital._id );

  }

}
