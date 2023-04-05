import { Component, Input } from '@angular/core';
import { Product } from '../../models/producto.model'

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {
  @Input() productio : Product = {
    id: '',
    price: 0,
    image: '',
    name:''
  }

}
