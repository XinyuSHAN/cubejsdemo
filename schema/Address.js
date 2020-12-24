cube(`Address`, {
  sql: `SELECT * FROM "SalesLT"."Address"`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [city, countryregion, rowguid, modifieddate]
    }
  },
  
  dimensions: {
    addressline1: {
      sql: `${CUBE}."AddressLine1"`,
      type: `string`
    },
    
    addressline2: {
      sql: `${CUBE}."AddressLine2"`,
      type: `string`
    },
    
    city: {
      sql: `${CUBE}."City"`,
      type: `string`
    },
    
    stateprovince: {
      sql: `${CUBE}."StateProvince"`,
      type: `string`
    },
    
    countryregion: {
      sql: `${CUBE}."CountryRegion"`,
      type: `string`
    },
    
    postalcode: {
      sql: `${CUBE}."PostalCode"`,
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
