import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatosCircuitosService {
  constructor() {}

  retornar() {
    return [
      {
        nombre: 'Circuito de Mónaco',
        longitud: 3337,
        premios: ['Gran Premio de Mónaco'],
        tiempo_vuelta_record: {
          tiempo: '1:10.166',
          piloto: 'Lewis Hamilton',
          ano: 2019,
        },
        fecha_fundacion: '1929-04-14',
      },
      {
        nombre: 'Circuito de Silverstone',
        longitud: 5891,
        premios: ['Gran Premio de Gran Bretaña'],
        tiempo_vuelta_record: {
          tiempo: '1:27.097',
          piloto: 'Max Verstappen',
          ano: 2020,
        },
        fecha_fundacion: '1948-10-02',
      },
      {
        nombre: 'Circuito de Suzuka',
        longitud: 5807,
        premios: ['Gran Premio de Japón'],
        tiempo_vuelta_record: {
          tiempo: '1:30.983',
          piloto: 'Lewis Hamilton',
          ano: 2019,
        },
        fecha_fundacion: '1962-09-01',
      },
      {
        nombre: 'Circuito de Spa-Francorchamps',
        longitud: 7004,
        premios: ['Gran Premio de Bélgica'],
        tiempo_vuelta_record: {
          tiempo: '1:46.286',
          piloto: 'Valtteri Bottas',
          ano: 2018,
        },
        fecha_fundacion: '1921-08-15',
      },
      {
        nombre: 'Circuito de Interlagos',
        longitud: 4309,
        premios: ['Gran Premio de Brasil'],
        tiempo_vuelta_record: {
          tiempo: '1:10.540',
          piloto: 'Valtteri Bottas',
          ano: 2018,
        },
        fecha_fundacion: '1940-05-12',
      },
      {
        nombre: 'Circuito de Jerez',
        longitud: 4428,
        premios: ['Gran Premio de España', 'Gran Premio de Europa'],
        tiempo_vuelta_record: {
          tiempo: '1:23.135',
          piloto: 'Heinz-Harald Frentzen',
          ano: 1997,
        },
        fecha_fundacion: '1985-12-08',
      },
      {
        nombre: 'Circuito del Jarama',
        longitud: 3850,
        premios: ['Gran Premio de España'],
        tiempo_vuelta_record: {
          tiempo: '1:16.44',
          piloto: 'Jacques Laffite',
          ano: 1981,
        },
        fecha_fundacion: '1967-07-01',
      },
      {
        nombre: 'Circuito de Hungaroring',
        longitud: 4381,
        premios: ['Gran Premio de Hungría'],
        tiempo_vuelta_record: {
          tiempo: '1:16.627',
          piloto: 'Fernando Alonso',
          ano: 2006,
        },
        fecha_fundacion: '1986-08-10',
      },
      {
        nombre: 'Circuito de Magny-Cours',
        longitud: 4411,
        premios: ['Gran Premio de Francia'],
        tiempo_vuelta_record: {
          tiempo: '1:15.377',
          piloto: 'Michael Schumacher',
          ano: 2004,
        },
        fecha_fundacion: '1991-07-07',
      },
    ];
  }
}
