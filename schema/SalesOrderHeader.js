cube(`SalesOrderHeader`, {
  sql: `SELECT * FROM "SalesLT"."SalesOrderHeader"`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [rowguid, orderdate, duedate, shipdate, modifieddate]
    },
    
    revisionnumber: {
      sql: `${CUBE}."RevisionNumber"`,
      type: `sum`
    }
  },
  
  dimensions: {
    onlineorderflag: {
      sql: `${CUBE}."OnlineOrderFlag"`,
      type: `string`
    },
    
    salesordernumber: {
      sql: `${CUBE}."SalesOrderNumber"`,
      type: `string`
    },
    
    purchaseordernumber: {
      sql: `${CUBE}."PurchaseOrderNumber"`,
      type: `string`
    },
    
    accountnumber: {
      sql: `${CUBE}."AccountNumber"`,
      type: `string`
    },
    
    shipmethod: {
      sql: `${CUBE}."ShipMethod"`,
      type: `string`
    },
    
    creditcardapprovalcode: {
      sql: `${CUBE}."CreditCardApprovalCode"`,
      type: `string`
    },
    
    subtotal: {
      sql: `${CUBE}."SubTotal"`,
      type: `string`
    },
    
    taxamt: {
      sql: `${CUBE}."TaxAmt"`,
      type: `string`
    },
    
    freight: {
      sql: `${CUBE}."Freight"`,
      type: `string`
    },
    
    totaldue: {
      sql: `${CUBE}."TotalDue"`,
      type: `string`
    },
    
    comment: {
      sql: `${CUBE}."Comment"`,
      type: `string`
    },
    
    rowguid: {
      sql: `rowguid`,
      type: `string`
    },
    
    orderdate: {
      sql: `${CUBE}."OrderDate"`,
      type: `time`
    },
    
    duedate: {
      sql: `${CUBE}."DueDate"`,
      type: `time`
    },
    
    shipdate: {
      sql: `${CUBE}."ShipDate"`,
      type: `time`
    },
    
    modifieddate: {
      sql: `${CUBE}."ModifiedDate"`,
      type: `time`
    }
  }
});
