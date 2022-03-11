import { Component, OnInit, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-success-text-components',
  templateUrl: './success-text-components.component.html',
  styleUrls: ['./success-text-components.component.scss'],
})
export class SuccessTextComponentsComponent implements OnInit {
  @Input() hero: string;
  @Input() hero1: string;
  constructor() {}

  ngOnInit(): void {}
}
