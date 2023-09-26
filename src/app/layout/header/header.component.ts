import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  numero: number = 2

  ngOnInit(): void {
    this.prueba()
  }

  prueba() {
    console.log("probando prueba")
    // codigo
  }


}
