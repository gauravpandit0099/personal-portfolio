import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  menuOpen = false;

  /* toggle mobile menu */
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  /* close mobile menu */
  closeMenu(): void {
    this.menuOpen = false;
  }
}