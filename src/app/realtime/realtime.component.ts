import { Component, OnInit, OnChanges,ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import * as c3 from 'c3';

@Component({
  selector: 'app-speedo',
  templateUrl: './realtime.component.html',
  styleUrls: ['./realtime.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RealtimeComponent implements OnInit, OnChanges{
  @ViewChild('speedometer') private chartContainer: ElementRef;
  @Input() private data: Array<any>;

  constructor() {}

  ngOnInit() {
    this.createSpeedo();
  }

  ngOnChanges() {
    this.createSpeedo();
  }

  createSpeedo() {
        var chart = c3.generate({
            bindto: '#chart',
            data: {
                columns: [
                    ['data1', 30, 200, 100, 400, 150, 250],
                    ['data2', 50, 20, 10, 40, 15, 25]
                ]
            }
        });

        setTimeout(function () {
            chart.load({
                columns: [
                    ['data1', 230, 190, 300, 500, 300, 400]
                ]
            });
        }, 1000);

        setTimeout(function () {
            chart.load({
                columns: [
                    ['data3', 130, 150, 200, 300, 200, 100]
                ]
            });
        }, 1500);

        setTimeout(function () {
            chart.unload({
                ids: 'data1'
            });
        }, 2000);
  }
}
