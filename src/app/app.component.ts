import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval } from 'rxjs';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HijoComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = '';
  hijo:number = 0;
  golbarca:number = 0;
  minutes:any = '';
  time:any;
  minuteis:any;
  segundo:any;
  guardar:any;
  apagar:any;
  ganador:any;

  goles1(){
    if (this.valor! || this.guardar ){
      this.golbarca++; 
      let audio = new Audio();
      audio.src = '../assets/audio/sonido-cortado.mp3';
      audio.play();
    }
    else{
      this.golbarca = 0;
    }
  }

  recibehijo(){
    if (this.valor! || this.guardar ) {
      this.hijo++; 
      let audio = new Audio();
      audio.src = '../assets/audio/sonido-cortado.mp3';
      audio.play();
    }
    else{
      this.hijo = 0;
    }
  }


  contador = interval(1000)
  valor:any;
  conteo:any = "0"
  disible:any;
  minuto:any;
  contar(){  

    let audio = new Audio();
    audio.src = '../assets/audio/sonido-silbato.mp3';
    audio.play();
    this.disible = true;
    this.apagar = true
    this.golbarca = 0
    this.hijo = 0
    this.ganador = '';
     this.valor = this.contador.subscribe((d)=>{
      this.conteo = d;
      if (this.conteo == "60" ){
        this.valor.unsubscribe()
        this.resultado()
        this.conteo = "0"
        this.disible = false
        this.apagar = false
      }
      if (this.conteo == "55") {
        this.title = 'El Partido Finalizara 5 Segundo';
      }
    })
  }

   resultado(){
    if (this.golbarca > this.hijo) {
      this.ganador = 'Ganador Barcelona'
    }if(this.hijo > this.golbarca){
    this.ganador = 'Ganador Real Madrid';
    }
    }

    funciom(){
      let audio = new Audio();
      audio.src = '../assets/audio/sonido-silbato.mp3';
      audio.play();
      this.golbarca = 0
      this.hijo = 0
      this.apagar = true
      this.minutes = prompt('ingrese el tiempo ');
      this.time =  this.minutes *60 
      this.ngOnInit();
}
      

  
  funcionar(){    
    if (this.minutes > 0) { 
      this.ganador = '';
      this.disible = true
      this.minuteis = Math.floor(this.time/60);
      this.segundo = this.time % 60
      this.time--;
      this.guardar = `${this.minuteis}:${this.segundo}`
    if (this.time <= 0){
       this.time = 0;
       this.guardar = '';
       this.disible = false
       this.apagar = false
       this.resultado()
    }
    if (this.conteo > 0) {
        this.disible = true
        this.ganador = '';
    } 
    }
      

      
  }
lego:any;

ngOnInit(): void {
      const montar = ()=>{
          if (this.minutes > 0) {
            setInterval(()=>{
              this.funcionar();
            },1000)
           }
      }
       montar()
    }

}
  

