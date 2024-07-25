import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Heart } from '../../shared/heart.model';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-attempts',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './attempts.component.html',
    styleUrl: './attempts.component.scss'
})
export class AttemptsComponent implements OnInit, OnChanges {

    @Input() public attempts: number = 3; 

    public hearts: Heart[] = [
        new Heart(true),
        new Heart(true),
        new Heart(true)
    ];

    ngOnChanges() {
        if (this.attempts !== this.hearts.length) {
            let index = this.hearts.length - this.attempts;
            this.hearts[index - 1].fullHeart = false;
        }
    }

    ngOnInit() {
        
    }
}
