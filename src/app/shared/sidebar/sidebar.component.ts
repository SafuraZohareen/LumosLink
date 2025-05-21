import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  imports: [RouterModule],
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  activeMenu: string | null = 'dashboard';
  @Input() isOpen = false;
  toggleMenu(menu: string) {
    if (this.activeMenu === menu) {
      this.activeMenu = null;
    } else {
      this.activeMenu = menu;
    }
  }
}
