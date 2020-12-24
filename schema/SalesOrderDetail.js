cube(`SalesOrderDetail`, {
  sql: `SELECT * FROM "SalesLT"."SalesOrderDetail"`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [rowguid, modifieddate]
    },
    
    orderqty: {
      sql: `${CUBE}."OrderQty"`,
      type: `sum`
    },
    
    linetotal: {
      sql: `${CUBE}."LineTotal"`,
      type: `sum`
    }
  },
  
  dimensions: {
    unitprice: {
      sql: `${CUBE}."UnitPrice"`,
      type: `string`
    },
    
    unitpricediscount: {
      sql: `${CUBE}."UnitPriceDiscount"`,
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
