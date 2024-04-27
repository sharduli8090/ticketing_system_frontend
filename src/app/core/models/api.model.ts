export interface APIResponse {
  statuscode: number;
  message: string;
  data: any;
} 

export class Employee {
  empName: string;
  email: string;
  password: string;
  empPosition: string;
  empGender: string;
  empDateOfBirth: string;

  constructor() {
    this.empName = '';
    this.email = '';
    this.password = '';
    this.empGender = '';
    this.empPosition = '';
    this.empGender = '';
    this.empDateOfBirth = '';
  }
}

export class Login {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }
}

export class Ticket {
  ticketName: string;
  ticketDescription: string;
  empId: string;
  empName: string;

  constructor() {
    this.ticketName = '';
    this.ticketDescription = '';
    this.empId = '';
    this.empName = '';
  }
}

export class Close_Ticket {
  empId: string;

  constructor() {
    this.empId = '';
  }
}

export class TicketApproveDeny {
  ticketStatus: string;
  ticketComments: string;

  constructor() {
    this.ticketStatus = '';
    this.ticketComments = '';
  }
}


export class Query{
  name: string;
  query: string;

  constructor() {
    this.name = '';
    this.query = '';
  }
}


export class Cards{
  name: string;
  buttonText: string;
  endpoint: string;
  description: string;

  constructor() {
    this.name = '';
    this.buttonText = '';
    this.endpoint = '';
    this.description = '';
  }
}