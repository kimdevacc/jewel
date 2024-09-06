import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-mine-function',
    templateUrl: './mine-function.component.html',
    styleUrls: ['./mine-function.component.scss']
})
export class MineFunctionComponent implements OnInit {
    routerId: string;

    constructor(
        private route: ActivatedRoute
    ) {
        this.route.params.subscribe(params => {
            this.routerId = params['id'];
        });
    }

    ngOnInit() {
    }
}