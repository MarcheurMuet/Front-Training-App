import { Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-modal-order',
  templateUrl: './modal-order.component.html',
  styleUrls: ['./modal-order.component.css']
})
export class ModalOrderComponent implements OnInit,OnChanges,DoCheck,OnDestroy {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() data: any = '';
  @Output() close = new EventEmitter<void>();
  constructor() { }

  ngOnDestroy(): void {
    console.log('OnDestroy');
  }
  ngDoCheck(): void {
    console.log('DoCheck');
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['data'])
      console.log('Data Changed', changes['data']);
  }

  ngOnInit(): void {
    console.log('OnInit');
  }

  closeModal(): void {
    this.close.emit();
  }
}
