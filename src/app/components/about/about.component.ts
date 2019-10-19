import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  private whatsappURL:string = "https://api.whatsapp.com/send?phone=5491163535221&text=Hola!%20Me%20interesan%20los%20productos!"

  constructor() { }

  ngOnInit() {
  }

}
