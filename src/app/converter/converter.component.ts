import { Component, OnInit } from '@angular/core';
import { CurrencyapiService } from '../services/currencyapi.service';

@Component({
  selector: 'converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  conversion: {[key: string]: number};
  from = "USD";
  to: string = "CAD";
  amount_str = "0";
  final_amount_str = "0.00";
  amount: number;
  conversion_rate: number;

  load_conversions() {
    this.currencyapi.get_conversion_rates(this.from).subscribe(response => this.conversion = response.rates) ;
  }

  

  get_currencies() {
    return Object.keys(this.conversion);
  }

  constructor(private currencyapi: CurrencyapiService) {
   }

  ngOnInit(): void {
    this.load_conversions();
  }


  add_to_num(input: string) {
    if (this.amount_str === "0" && input != '.') {
      this.amount_str = "";
    }
    this.amount_str += input;
  }

  remove_from_num() {
    if (this.amount_str === "0") {
      return null
    }
    this.amount_str = this.amount_str.slice(0,-1);
  }

  remove_all() {
    this.amount_str = "0";
    this.amount = null;
    this.final_amount_str = "0.00";
  }

  convert() {
    this.amount = Number(this.amount_str) * this.conversion[this.to];
    this.final_amount_str = this.amount.toFixed(2);
  }

}
