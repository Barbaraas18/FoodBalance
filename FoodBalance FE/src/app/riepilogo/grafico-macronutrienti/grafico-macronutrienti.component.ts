import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from "@angular/core";



@Component({
  selector: 'app-grafico-macronutrienti',
  templateUrl: './grafico-macronutrienti.component.html',
  styleUrl: './grafico-macronutrienti.component.css'
})
export class GraficoMacronutrientiComponent implements OnChanges, OnInit {
@Input() giornoMacronutrienti:any;
@Input() calorie_da_assumere:any;
@ViewChild("chart") chart: any;

   chartOptions:any;

 ngOnInit(): void {
  this.chartOptions = {
    series: [
      {
        name: "Carboidrati",
        data: [],
        color: '#faba4b',
      },
      {
        name: "Grassi",
        data: [],
        color: '#5ba8f5',
      },
      {
        name: "Proteine",
        data: [],
        color: '#fa6464',
      }
    ],
    chart: {
      type: "bar",
      height: 560,
      stacked: true,
      toolbar: {
        show: true
      },
      zoom: {
        enabled: true
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0
          }
        }
      }
    ],
    plotOptions: {
      bar: {
        horizontal: false
      }
    },
    xaxis: {
      type: "datetime",
      categories:[],
    },
    legend: {
      position: "right",
      offsetY: 40
    },
    fill: {
      opacity: 1
    },
    annotations: {
      yaxis: [
        {
          y:0,
          borderColor: '#000000', 
          strokeDashArray: 0,
          label: {
            text: 'Calorie da assumere giornalmente',
            style: {
              color: '#fff',
              background: '#000000'
            }
          },
        }
      ]
    }}
 }

 ngOnChanges(changes: SimpleChanges): void {
  setTimeout(() => {
    if (this.giornoMacronutrienti) {
      this.chartOptions.series[0].data = this.giornoMacronutrienti.carboidrati; 
      this.chartOptions.series[1].data = this.giornoMacronutrienti.grassi;
      this.chartOptions.series[2].data = this.giornoMacronutrienti.proteine; 
      this.chartOptions.xaxis.categories = this.giornoMacronutrienti.data;
      this.chartOptions.annotations.yaxis[0].y = this.calorie_da_assumere;
      this.chart.updateOptions(this.chartOptions);
    }
  }, 0);
}


}