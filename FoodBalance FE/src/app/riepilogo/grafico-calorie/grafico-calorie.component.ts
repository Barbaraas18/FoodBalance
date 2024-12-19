import {  Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import {  ChartComponent } from "ng-apexcharts";

@Component({
  selector: 'app-grafico-calorie',
  templateUrl: './grafico-calorie.component.html',
  styleUrl: './grafico-calorie.component.css'
})
export class GraficoCalorieComponent implements OnInit, OnChanges {
  @Input() giornoCalorie:any;
  @Input() calorie_da_assumere: any;
  chartOptions: any;
  inizializzato=false;
  @ViewChild('chart') chart!: ChartComponent;

ngOnInit(): void {    this.chartOptions = {
  series: [
    {
      name: "Calorie",
      data: []
    }
  ],
  chart: {
    type: "line",
    height: 560,
  },
  xaxis: {
    type: "datetime",
    categories: []
  },
  yaxis:{
    min:0,
    max: 3500,
    tickAmount: 10,
  },
  annotations: {
    yaxis: [
      {
        y: 0,
        borderColor: '#FF0000',
        label: {
          text: `Media`,
          style: {
            color: '#fff',
            background: '#FF0000'
          }
        },
      },
      {
        y: 0,
        borderColor: '#000000',
        label: {
          text: 'Calorie da assumere',
          style: {
            color: '#fff',
            background: '#000000',
            
          }
        }
      }
    ]
  }
};  
}

ngOnChanges(changes: SimpleChanges): void {
  setTimeout(() => {
    if (this.giornoCalorie) {
      this.chartOptions.series[0].data = this.giornoCalorie.calorie; 
      this.chartOptions.xaxis.categories = this.giornoCalorie.data;
      this.chartOptions.annotations.yaxis[0].y = this.giornoCalorie.media;
      this.chartOptions.annotations.yaxis[1].y = this.calorie_da_assumere;
      this.chart.updateOptions(this.chartOptions);
    }
  }, 0);
}
}
