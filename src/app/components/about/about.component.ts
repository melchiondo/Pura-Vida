import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  public whatsappURL:string = "https://api.whatsapp.com/send?phone=5491167418722&text=Hola!%20Me%20interesan%20los%20productos!"

  constructor() { }

  ngOnInit() {
  }

}
