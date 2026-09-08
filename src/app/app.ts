import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { Cursor } from './layout/cursor/cursor';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Cursor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  /* Application title */
  title = 'personal-portfolio';
}