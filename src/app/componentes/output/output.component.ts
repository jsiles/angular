import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})

export class OutputComponent {

  @Input() name!:String;
  imgDefault : String = 'https://climate.onep.go.th/wp-content/uploads/2020/01/default-image-150x150.png';
  @Output() loaded = new EventEmitter<String>(); //emitir desde el hijo

  imgError(){
    this.name = this.imgDefault;
  }
  imgOk(){
    console.log('loading..');
    this.loaded.emit(this.name);
  }
}
