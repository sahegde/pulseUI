import { Component, OnInit, OnChanges,ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import * as c3 from 'c3';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BarchartComponent implements OnInit, OnChanges{
  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() private data: Array<any>;

  constructor() {}

  ngOnInit() {
    this.createChart();
  }

  ngOnChanges() {
    this.createChart();
  }

  createChart() {
        var chart = c3.generate({
          bindto: '#chart',
          data: {
          columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 100, 140, 200, 150, 50]
          ],
          type: 'bar'
        },
        bar: {
          width: {
          ratio: 0.5 // this makes bar width 50% of length between ticks
          }
          // or
          //width: 100 // this makes bar width 100px
          }
        });

        setTimeout(function () {
          chart.load({
            columns: [
             ['data3', 130, -150, 200, 300, -200, 100]
            ]
          });
        });
  }

}
