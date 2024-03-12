import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval } from 'rxjs';
import { HijoComponent } from './hijo/hijo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HijoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';
  hijo:number = 0;
  golbarca:number = 0;
  goles1(){

    if (this.valor!) {
      this.golbarca++; 
  
    }
    else{
      this.golbarca = 0;
    }
  }

  recibehijo(){
    if (this.valor!) {
      this.hijo++; 
    }else{
      this.hijo = 0;
    }
  }


  contador = interval(1000)
  valor:any;
  conteo:any = "0"
  disable = false;

  contar(){    
   this.disable = true
    this.golbarca = 0
    this.hijo = 0
     this.valor = this.contador.subscribe((d)=>{
      this.conteo = d;
      if (this.conteo == "60" ) {
        this.valor.unsubscribe()
        this.conteo = "01:00"
        this.disable = false
      }
      if (this.conteo >= "55") {
        this.title = 'El Partido Finalizara 5 Segundo';   
        
      }
    })
  }
  
 
}
