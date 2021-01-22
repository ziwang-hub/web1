import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manage4',
  templateUrl: './manage4.component.html',
  styleUrls: ['./manage4.component.css']
})
export class Manage4Component{
  baseUrl="http://172.20.10.4:3000/";
  constructor(private httpClient:HttpClient) {}

  ledon(){
    const xx=[]
    this.httpClient.put(this.baseUrl+'ledon',xx).subscribe(
        (val: any) => {  // val是服务器返回的值
          if (val.succ) {
           alert('LED打开');
         }
        }
       )
  }
  ledoff(){
    const xx=[]
    this.httpClient.put(this.baseUrl+'ledoff',xx).subscribe(
        (val: any) => {  // val是服务器返回的值
          if (val.succ) {
           alert('LED关闭');
         }
        }
       )
  }
  fanoff(){
    const xx=[]
    this.httpClient.put(this.baseUrl+'fan/off',xx).subscribe(
        (val: any) => {  // val是服务器返回的值
          if (val.succ) {
           alert('窗户关闭');
         }
        }
       )
  }
  fanon(){
    const xx=[]
    this.httpClient.put(this.baseUrl+'fan/on',xx).subscribe(
        (val: any) => {  // val是服务器返回的值
          if (val.succ) {
           alert('窗户打开');
         }
        }
       )
  }

  acon(){
    const xx=[]
    this.httpClient.put(this.baseUrl+'ac/acon',xx).subscribe(
        (val: any) => {  // val是服务器返回的值
          if (val.succ) {
             alert('空调打开');
         }
        }
       )
  }
  acoff(){
    const xx=[]
    this.httpClient.put(this.baseUrl+'ac/acoff',xx).subscribe(
        (val: any) => {  // val是服务器返回的值
          if (val.succ) {
             alert('空调关闭');
         }
        }
       )
  }
  Furnaceon(){
    const xx=[]
    this.httpClient.put(this.baseUrl+'Furnace/Furnaceon',xx).subscribe(
        (val: any) => {  // val是服务器返回的值
          if (val.succ) {
             alert('暖气打开');
         }
        }
       )
  }
  Furnaceoff(){
    const xx=[]
    this.httpClient.put(this.baseUrl+'Furnace/Furnaceoff',xx).subscribe(
        (val: any) => {  // val是服务器返回的值
          if (val.succ) {
             alert('暖气关闭');
         }
        }
       )
  }
  Humidifieron(){
    const xx=[]
    this.httpClient.put(this.baseUrl+'Humidifier/Humidifieron',xx).subscribe(
        (val: any) => {  // val是服务器返回的值
          if (val.succ) {
             alert('加湿气打开');
         }
        }
       )
  }
  Humidifieroff(){
    const xx=[]
    this.httpClient.put(this.baseUrl+'Humidifier/Humidifieroff',xx).subscribe(
        (val: any) => {  // val是服务器返回的值
          if (val.succ) {
             alert('加湿气关闭');
         }
        }
       )
  }
}
