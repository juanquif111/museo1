import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the ConectarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConectarProvider {

    constructor(public http: HttpClient) {
        console.log('Hello ConectarProvider Provider');
    }
    // como el servicio es una peticion get se define del siguiente modo:
    traerListPer(numero) {
        return this.http.get("https://randomuser.me/api/?results=" + numero);
    }
    options = {
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'

        }
    };
    // metodo que permite enviar datos de la creacion de personas al servidor
    enviarAlServidor(persona: any) {
        return this.http.post("http://192.168.0.223/flas11/controller/registro.php", JSON.stringify(persona), this.options);  // envia los datos que vienen de 


    }
    servidorBuscar(criterio: any) {
        return this.http.post("http://192.168.0.223/flas11/controller/buscar.php", JSON.stringify(criterio), this.options);

    }
    servidorActualizar(newPersona) {
        return this.http.post("http://192.168.0.223/flas11/controller/actualizar.php", JSON.stringify(newPersona), this.options);
    }


}
