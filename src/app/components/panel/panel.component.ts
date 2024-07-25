import { Component, EventEmitter, Output } from '@angular/core';
import { AttemptsComponent } from '../attempts/attempts.component';
import { ProgressComponent } from '../progress/progress.component';
import { Phrase } from '../../shared/phrase.model';
import { PHRASES } from './phares-mock';

@Component({
	selector: 'app-panel',
	standalone: true,
	imports: [AttemptsComponent, ProgressComponent],
	templateUrl: './panel.component.html',
	styleUrl: './panel.component.scss'
})
export class PanelComponent {
	public phrases: Phrase[] = PHRASES;
	public response: string = '';
	public round: number = 0;
	public roundPhrase: Phrase = new Phrase(this.phrases[this.round].phraseEng, this.phrases[this.round].phrasePt);
	public progress: number = 0;
	public attempts: number = 3;
	@Output() public closeGame: EventEmitter<string> = new EventEmitter();



	constructor() {
		this.updateRound();
	}

	public updateProgress(progress: Event): void {
		this.response = (<HTMLInputElement>progress.target).value;
	}

	public checkResponse(): void {
		if (this.response === this.roundPhrase.phrasePt) {
			this.round++;
			this.progress = this.progress + (100 / this.phrases.length);

			if (this.round === 4) {
				this.closeGame.emit('win');
			}

			this.updateRound();
			this.response = '';

		} else {
			this.attempts--;
			this.response = '';
			
			if (this.attempts === -1) {
				this.closeGame.emit('lose');
			}
		}
	}

	public updateRound(): void {
		this.roundPhrase = this.phrases[this.round];
	}

}
