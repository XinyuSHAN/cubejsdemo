cube(`Product`, {
  sql: `SELECT * FROM "SalesLT"."Product"`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name, thumbnailphotofilename, rowguid, sellstartdate, sellenddate, discontinueddate, modifieddate]
    }
  },
  
  dimensions: {
    name: {
      sql: `${CUBE}."Name"`,
      type: `string`
    },
    
    productnumber: {
      sql: `${CUBE}."ProductNumber"`,
      type: `string`
    },
    
    color: {
      sql: `${CUBE}."Color"`,
      type: `string`
    },
    
    standardcost: {
      sql: `${CUBE}."StandardCost"`,
      type: `string`
    },
    
    listprice: {
      sql: `${CUBE}."ListPrice"`,
      type: `string`
    },
    
    size: {
      sql: `${CUBE}."Size"`,
      type: `string`
    },
    
    thumbnailphoto: {
      sql: `${CUBE}."ThumbNailPhoto"`,
      type: `string`
    },
    
    thumbnailphotofilename: {
      sql: `${CUBE}."ThumbnailPhotoFileName"`,
      type: `string`
    },
    
    rowguid: {
      sql: `rowguid`,
      type: `string`
    },
    
    sellstartdate: {
      sql: `${CUBE}."SellStartDate"`,
      type: `time`
    },
    
    sellenddate: {
      sql: `${CUBE}."SellEndDate"`,
      type: `time`
    },
    
    discontinueddate: {
      sql: `${CUBE}."DiscontinuedDate"`,
      type: `time`
    },
    
    modifieddate: {
      sql: `${CUBE}."ModifiedDate"`,
      type: `time`
    }
  }
});
