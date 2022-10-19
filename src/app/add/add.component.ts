import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  flightName=""
  destination=""
  capacity=""
  readvalues=()=>{
    let data={
      "flightName":this.flightName,
      "destination":this.destination,
      "capacity":this.capacity,
    }
    console.log(data)
    this.myapi.addFlight(data).subscribe(
      (response)=>{
        alert("Data Added")
      }
    )


  }
  ngOnInit(): void {
  }

}
