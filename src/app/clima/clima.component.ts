import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent implements OnInit {
  @Input() latitude:String;
  @Input() longitude:String;
  key:string = "97afcff7d71d3966ea9b3f200e005c42"
  url:string ="api.openweathermap.org/data/2.5/weather"
  constructor() { }

  ngOnInit() {
    // alert(this.latitude);
    // alert(this.longitude);
    this.url = `${this.url}?lat=${this.latitude}&lon=${this.longitude}&APIKEY=${this.key}`
  }

}
