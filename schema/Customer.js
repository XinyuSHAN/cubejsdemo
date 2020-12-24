cube(`Customer`, {
  sql: `SELECT * FROM "SalesLT"."Customer"`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [namestyle, title, firstname, middlename, lastname, companyname, rowguid, modifieddate]
    }
  },
  
  dimensions: {
    namestyle: {
      sql: `${CUBE}."NameStyle"`,
      type: `string`
    },
    
    title: {
      sql: `${CUBE}."Title"`,
      type: `string`
    },
    
    firstname: {
      sql: `${CUBE}."FirstName"`,
      type: `string`
    },
    
    middlename: {
      sql: `${CUBE}."MiddleName"`,
      type: `string`
    },
    
    lastname: {
      sql: `${CUBE}."LastName"`,
      type: `string`
    },
    
    suffix: {
      sql: `${CUBE}."Suffix"`,
      type: `string`
    },
    
    companyname: {
      sql: `${CUBE}."CompanyName"`,
      type: `string`
    },
    
    salesperson: {
      sql: `${CUBE}."SalesPerson"`,
      type: `string`
    },
    
    emailaddress: {
      sql: `${CUBE}."EmailAddress"`,
      type: `string`
    },
    
    phone: {
      sql: `${CUBE}."Phone"`,
      type: `string`
    },
    
    passwordhash: {
      sql: `${CUBE}."PasswordHash"`,
      type: `string`
    },
    
    passwordsalt: {
      sql: `${CUBE}."PasswordSalt"`,
      type: `string`
    },
    
    rowguid: {
      sql: `rowguid`,
      type: `string`
    },
    
    modifieddate: {
      sql: `${CUBE}."ModifiedDate"`,
      type: `time`
    }
  }
});
