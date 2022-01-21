import { Component, Output, EventEmitter, OnInit, Input} from '@angular/core';
import { debounceTime, Subject } from 'rxjs';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebunce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder:string = ""

  debuncer: Subject<string> = new Subject();

  termino:string= "";

  ngOnInit() {
      this.debuncer
      .pipe(debounceTime(300))
      .subscribe(valor =>{
       this.onDebunce.emit(valor)
      })
  }


  buscar(){
   this.onEnter.emit(this.termino);
  }

  teclaPresionada( event:any){
    this.debuncer.next( this.termino)
  }

}
