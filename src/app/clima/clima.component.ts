import { Input, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 //importar HttpClient para fazer requisições http


@Component({
  selector: 'app-clima', // nome da tag que pode ser utilizada em outros components
  templateUrl: './clima.component.html', // arquivo html do component clima
  styleUrls: ['./clima.component.scss'] // arquivo css do component clima
})
export class ClimaComponent implements OnInit {

  //declarar var globais
  @Input() latitude:String;// recebe a latitude do app.component
  @Input() longitude:String;// recebe a longitude do app.component
  key:string = "97afcff7d71d3966ea9b3f200e005c42"//chave da API
  url:string ="http://api.openweathermap.org/data/2.5/weather"//url da API
  data:any;
  // declarar o HttpClient no costructor para poder utilizar na função getPositionData()
  constructor(private http:HttpClient) { }

  async ngOnInit() {


  }

// Função para pegar dados do openweathermap
  async getPositionData(){

    //preparar url para o openweathermap
    this.url = `${this.url}?lat=${this.latitude}&lon=${this.longitude}&APIKEY=${this.key}&units=metric`

    // fazer requisição GET e baixar os dados do openweathermap
    var data = await this.http.get(this.url).toPromise()
    this.data = data
    console.log("data", data)
  }



}
