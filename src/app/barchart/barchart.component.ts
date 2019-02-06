import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  @Input() title: string;
  data1 = [];
  data2 = [];
  data3 = [];

  putData() {
    for (let i = 0; i < 20; i++) {
      this.data1.push(Math.floor(Math.random() * 100))
      this.data2.push(Math.floor(Math.random() * 100))
      this.data3.push(Math.floor(Math.random() * 100))

    }
  }
  random() {
    let data1 = []
    let data2 = []
    let data3 = []
    for (let i = 0; i < 20; i++) {
      data1.push(Math.floor(Math.random() * 100))
      data2.push(Math.floor(Math.random() * 100))
      data3.push(Math.floor(Math.random() * 100))

    }

    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data1;
    clone[1].data = data2;
    clone[2].data = data3;
    this.barChartData = clone;
  }
  barChartData = [
    { data: this.data1, label: '2016' },
    { data: this.data2, label: '2017' },
    { data: this.data3, label: '2018' },

  ];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        gridLines: {
          display: true,
          color: "#4A495E",
          lineWidth: 2
        },
        ticks: {
          fontColor: '#838297'
        }
      }],
      xAxes: [{
        gridLines: {
          display: true,
          color: "#4A495E",
          lineWidth: 2
        },
        ticks: {
          fontColor: '#838297'
        }
      }]
    }
  };

  public barChartLabel = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];
  public barChartType = "bar";
  public barChartLegend = false;

  public lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(134,229,114,0.6)',
      borderColor: 'gold',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,1)'
    },
    {
      backgroundColor: 'rgba(246,56,90,0.7)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,1)'
    },
    {
      backgroundColor: 'rgba(231,184,55,0.8)',
      borderColor: 'blue',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,1)'
    }]

  constructor() { }

  ngOnInit() {
    this.putData();
  }

}
