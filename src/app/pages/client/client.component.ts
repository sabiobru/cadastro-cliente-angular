import { Component, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  providers: [DecimalPipe]
})

export class ClientComponent {

  //Icons - Fontawnsome
  faPlus = faPlus;


  tableData = [
    {
      "id": 923397,
      "first_name": "Jose",
      "last_name": "Harris",
      "date": "28/01/2021 21:14:01",
      "photo": "http://srcimg.com/100/150",
      "married": false
    },
    {
      "id": 73277,
      "first_name": "Jean",
      "last_name": "Martin",
      "date": "28/01/2021 21:14:01",
      "photo": "http://srcimg.com/100/150",
      "married": true
    },
    {
      "id": 639721,
      "first_name": "Lawrence",
      "last_name": "Robinson",
      "date": "28/01/2021 21:14:01",
      "photo": "http://srcimg.com/100/150",
      "married": true
    },
    {
      "id": 833005,
      "first_name": "Shirley",
      "last_name": "Martin",
      "date": "28/01/2021 21:14:01",
      "photo": "http://srcimg.com/100/150",
      "married": true
    },
    {
      "id": 912541,
      "first_name": "Mike",
      "last_name": "Gonzalez",
      "date": "28/01/2021 21:14:01",
      "photo": "http://srcimg.com/100/150",
      "married": false
    },
    {
      "id": 658433,
      "first_name": "Shirley",
      "last_name": "Martin",
      "date": "28/01/2021 21:14:01",
      "photo": "http://srcimg.com/100/150",
      "married": false
    },
    {
      "id": 167382,
      "first_name": "Keith",
      "last_name": "Hernandez",
      "date": "28/01/2021 21:14:01",
      "photo": "http://srcimg.com/100/150",
      "married": true
    }
  ]

  constructor(pipe: DecimalPipe) { }





}


