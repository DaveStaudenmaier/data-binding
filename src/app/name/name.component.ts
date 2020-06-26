import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  @Input('name') name: string;
  @Output() newName = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

    // Event binding across components
    // Emits the latest value of this.name, which was received via @Input and updated in the form.
    this.newName.emit(this.name);
  }
}
