import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pippo',
  templateUrl: './pippo.component.html',
  styleUrls: ['./pippo.component.scss']
})
export class PippoComponent implements OnInit {

  // @Input() set userChanged(value: boolean){
  //   if (value) {
      
  //   }
  // }

  @Output() userSaved = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
