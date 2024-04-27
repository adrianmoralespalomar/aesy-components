import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DropdownComponent } from '../../projects/aesy-components-library/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DropdownComponent],
  template: `
    <aesy-dropdown [list]="['JavaScript', 'GO', 'C++']" [label]="'Dropdown'" [className]="'pepe'"></aesy-dropdown>
  `,
  styles: [`

  `]
})
export class AppComponent {
  title = 'aesy-components';
}
