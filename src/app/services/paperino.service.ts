import { Injectable } from '@angular/core';
import { PlutoService } from './pluto.service';

@Injectable({
  providedIn: 'root'
})
export class PaperinoService {

  constructor(private pluto: PlutoService) { }

  getValue(){
    return this.pluto.getValue().toUpperCase();
  }
}
