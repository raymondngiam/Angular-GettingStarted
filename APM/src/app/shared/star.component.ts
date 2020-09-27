import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    starWidth:number;
    @Input() rating:number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }
}
