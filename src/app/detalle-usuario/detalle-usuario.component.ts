import { Component, OnInit, Input } from '@angular/core';
import { Tweet, User } from '../model/tweet';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {

  @Input() mySelectedUser: User;

  constructor() { }

  ngOnInit() {
  }

}
