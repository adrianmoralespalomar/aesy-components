import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DropdownComponent } from '../../projects/aesy-components-library/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DropdownComponent],
  template: `
  <div>
    <aesy-dropdown [list]="list" [label]="'Dropdown'" [styleButton]="'basic purple'"></aesy-dropdown>
    <aesy-dropdown [list]="list" [label]="'Dropdown'" [styleButton]="'basic yellow'"></aesy-dropdown>
    <aesy-dropdown [list]="list" [label]="'Dropdown'" [styleButton]="'basic green'"></aesy-dropdown>
    <aesy-dropdown [list]="list" [label]="'Dropdown'" [styleButton]="'basic red'"></aesy-dropdown>
    <aesy-dropdown [list]="list" [label]="'Dropdown'" [styleButton]="'basic dark'"></aesy-dropdown>
    <aesy-dropdown [list]="list" [label]="'Dropdown'" [styleButton]="'basic light'" [colorArrow]="'black'"></aesy-dropdown>
  </div>
  <br>
  <div>
    <aesy-dropdown [list]="list" [label]="'Dropdown'" [styleButton]="'corner purple'"></aesy-dropdown>
    <aesy-dropdown [list]="list" [label]="'Dropdown'" [styleButton]="'corner yellow'"></aesy-dropdown>
    <aesy-dropdown [list]="list" [label]="'Dropdown'" [styleButton]="'corner green'"></aesy-dropdown>
    <aesy-dropdown [list]="list" [label]="'Dropdown'" [styleButton]="'corner red'"></aesy-dropdown>
    <aesy-dropdown [list]="list" [label]="'Dropdown'" [styleButton]="'corner dark'"></aesy-dropdown>
    <aesy-dropdown [list]="list" [label]="'Dropdown'" [styleButton]="'corner light'" [colorArrow]="'black'"></aesy-dropdown>
  </div>
  <br>
  <div>
    <aesy-dropdown [list]="list" [label]="'Dropdown'" [styleButton]="'slide-left red'"></aesy-dropdown>
    <aesy-dropdown [list]="list" [label]="'Dropdown'" [styleButton]="'slide-right red'"></aesy-dropdown>
    <aesy-dropdown [list]="list" [label]="'Dropdown'" [styleButton]="'slide-top red'"></aesy-dropdown>
    <aesy-dropdown [list]="list" [label]="'Dropdown'" [styleButton]="'slide-bottom red'"></aesy-dropdown>
  </div>
  `,
  styles: [`
    div{
      display:flex;
      gap:0.5rem;
    }
  `]
})
export class AppComponent {
  title = 'aesy-components';
  list = ['JavaScript', 'GO', 'C++'];
}
