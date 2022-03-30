import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 
   arr = [1,2,3,4];
  services = [
    {
      name : "Insurance",
      type : "Insurance",
      availableService : [
        "Car Insurance",
        "Life Insurance",
        "Health Insurance"
      ],
      description :"We provide you all kind of insurance at one place all the service you can avail instantly with just one click."
    },
    {
      name : "AePS",
      type : "Cash n Banking",
      availableService : [
        "Cash withdrawal",
        "Cash Deposit",
        "Money Transfer"
      ],
      description :"Best solution for all cash related problem. You can withdraw or deposite your money with your adhar card instantly and securly"
    },
    {
      name : "Travel",
      type : "Tickets",
      availableService : [
        "AIR Tickets",
        "IRCTC Tickets",
        "Bus Tickets"
      ],
      description :"Book all kind of tickets on a single platform with a single service and pay minimum charges and save maximum profits."
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
