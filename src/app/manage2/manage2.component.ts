import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import * as echarts from 'echarts';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-manage2',
  templateUrl: './manage2.component.html',
  styleUrls: ['./manage2.component.css']
})
export class Manage2Component implements OnInit {
  updateOption = {};
  chartOption = {};
  baseUrl = 'http://172.20.10.4:3000/';

  constructor(private httpClient:HttpClient) { 
    
  }

public xAxis = [];
public temps = [];
public humds = [];
public lights = [];
public jiujings =[];
public dioxs =[];
  
  ngOnInit() {
   this.chartOption = {
      title:{
        text:'数据跟踪图'
      },
      tooltip:{
        trigger:'axis'
      },
      legend:{
        data:['温度','湿度','光照','酒精','二氧化碳']
      },
      toolbox:{
        feature:{
          saveAsImage:{}
        }
      },
      grid:{
        left:'3%',
        right:'4%',
        bottom:'3%',
        containLabel: true
      },
      xAxis:[
        {
          type:'category',
          boundaryGap:false,
          data:[]
        }
      ],
      yAxis:[
        {
          type:'value'
        }
      ],
      series:[
        {
          name:'温度',
          type:'line',
          stack:'度',
          areaStyle:{ normal:{} },
          data:[]
        },
        {
          name:'湿度',
          type:'line',
          stack:'%',
          areaStyle:{ normale:{} },
          data:[]
        },
        {
          name:'光照',
          type:'line',
          stack:'%',
          areaStyle:{ normale:{} },
          data:[]
        },
        {
          name:'酒精',
          type:'line',
          stack:'%',
          areaStyle:{ normale:{} },
          data:[]
        },
        {
          name:'二氧化碳',
          type:'line',
          stack:'%',
          areaStyle:{ normale:{} },
          data:[]
        },
      ]
    };
    timer(2000,2000).subscribe(
      () => {
        this.httpClient.get(this.baseUrl+'env/001/10',{}).subscribe(
          (value:any) => {
            console.log(value.data);
            if(value && value.data && value.data.length){
              let i =value.data.length -1;
              for(let item of value.data){
                const d = new Date(Number(item.time));
                //console.log(d)
                this.xAxis[i] = d.getHours() > 9 ? d.getHours() : '0' + d.getHours();
                this.xAxis[i] += ":" + (d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes());
                this.xAxis[i] += ":" + (d.getSeconds() > 9 ? d.getSeconds() : '0' + d.getSeconds());
                this.temps[i] =(item.temp);
                this.humds[i] =(item.humd);
                this.lights[i] =(item.light);
                this.jiujings[i] =(item.jiujing);
                this.dioxs[i] =(item.diox);
                i--;
              }
              this.updateOption ={
                xAxis:[
                  {
                    data:this.xAxis
                  }
                ],
                series:[{
                  data:this.temps
                },{
                  data:this.humds
                },{
                  data:this.lights
                },{
                  data:this.jiujings
                },{
                  data:this.dioxs
                }]
              }
            }
          }
        )
      }
    );
  }


}
