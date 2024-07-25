import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-progress',
	standalone: true,
	imports: [],
	templateUrl: './progress.component.html',
	styleUrl: './progress.component.scss'
})
export class ProgressComponent {
	@Input() public progress: number = 0;
}
