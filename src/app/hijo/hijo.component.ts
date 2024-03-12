import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
    @Input() Recibirpadre?:number;
    @Output() Mensajehijo = new EventEmitter<number>();

    
    hijo:number = 0
    mensajehijo(){
      this.Mensajehijo.emit(this.hijo++);
    }

}
