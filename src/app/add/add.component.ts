import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }
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
    alert("Data Added")
  }
  ngOnInit(): void {
  }

}
