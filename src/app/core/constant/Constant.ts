export const Constants = {
  API_ADMIN_ENDPOINT: { 
    ADMIN_LOGIN: 'admin/login',
    CREATE_EMPLOYEE: 'admin/createemployee',
    GET_ALL_EMPLOYEE: 'admin/getallemployee',
    GET_ALL_TICKET: 'admin/getallticket',
    DELETE_ALL_TICKET: 'admin/deleteallticket',
    DELETE_TICKET: 'admin/deleteticket/',
    DELETE_EMPLOYEE: 'admin/deleteemployee/',
    DELETE_ALL_EMPLOYEE: 'admin/deleteallemployee',
    APPROVE_DENY_TICKET: 'admin/approvedenyticket/',
    
  },
  API_EMPLOYEE_ENDPOINT: {
    EMPLOYEE_LOGIN: 'employee/login',
    CREATE_TICKET: 'employee/createticket',
    CLOSE_TICKET: 'employee/closeticket/',
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