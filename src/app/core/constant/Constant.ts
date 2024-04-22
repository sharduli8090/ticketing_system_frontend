export const Constants = {
  API_ADMIN_ENDPOINT: { 
    ADMIN_LOGIN: 'login',
    CREATE_EMPLOYEE: 'createemployee',
    GET_ALL_EMPLOYEE: 'getallemployee',
    GET_ALL_TICKET: 'getallticket',
    DELETE_ALL_TICKET: 'deleteallticket',
    DELETE_TICKET: 'deleteticket/',
    DELETE_EMPLOYEE: 'deleteemployee/',
    DELETE_ALL_EMPLOYEE: 'deleteallemployee',
    APPROVE_DENY_TICKET: 'approvedenyticket/',
    
  },
  API_EMPLOYEE_ENDPOINT: {
    EMPLOYEE_LOGIN: 'employee/login',
    CREATE_TICKET: 'employee/createticket',
    CLOSE_TICKET: 'employee/closeticket/',
  },
  API_GENERAL_ENDPOINT: {
    SEND_QUERY: 'sendqueryfeedback',
  },
  VALIDATION_MESSAGE: {
    REQUIRED: 'This field is required',
  },
};


// todo: add approve deny based on department on employee
// add department var to employee
// add department to ticket
// update ticket on admin side
// update employee on admin side
// check response constant