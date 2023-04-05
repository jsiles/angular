import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.scss']
})
export class ImagenesComponent {
@Input() name!:String;
imgDefault : String = 'https://climate.onep.go.th/wp-content/uploads/2020/01/default-image-150x150.png';
imgError(){
  this.name = this.imgDefault;
}
}
