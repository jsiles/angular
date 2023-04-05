import { Component } from '@angular/core';

import { Product } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'clases01';
  name! : String;
  products : Product[] = [{
    id: '1',
    name: 'Product - 1',
    image: 'https://imcruzcenter.com.bo/grtadmin/imagenes/suzuki-new-baleno-glx-azul.jpg',
    price: 100
  },
  {
    id: '2',
    name: 'Product - 1',
    image: 'https://imcruzcenter.com.bo/grtadmin/imagenes/suzuki-new-baleno-glx-azul.jpg',
    price: 100
  },
  {
    id: '3',
    name: 'Product - 1',
    image: 'https://imcruzcenter.com.bo/grtadmin/imagenes/suzuki-new-baleno-glx-azul.jpg',
    price: 100
  }];

  onLoaded(img: String){
    console.log('Log PADRE', img);
  }
}
