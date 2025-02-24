import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeiroComponenteComponent } from "../app/primeiro-componente/primeiro-componente.component";
import { SegundoComponenteComponent } from "./segundo-componentete/segundo-componente/segundo-componente.component";

@Component({
  selector: 'app-root',
  imports: [PrimeiroComponenteComponent, SegundoComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos-angular';
}
