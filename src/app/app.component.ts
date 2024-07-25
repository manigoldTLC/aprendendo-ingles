import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { PanelComponent } from './components/panel/panel.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, PanelComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public gameInProgress: boolean = true;
  public endType: string = '';

  public closeGame(type: string): void {
    this.gameInProgress = false;
    this.endType = type;
  }

  public restartGame(): void {
    this.gameInProgress = true;
    this.endType = '';
  }
}
