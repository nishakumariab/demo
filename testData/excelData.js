var xlsx = require('xlsx')   // this sis node js package 


//getting data reading the data 
var wb = xlsx.readFile("C:/Users/swamynarayan/Desktop/demo_wedriverio/exceldata.xlsx")

// console.log(wb);

//this is given excel sheet name 
// var sheets = wb.SheetNames
// console.log(sheets);

//giveing the sheet name Sheet1
 var ws = wb.Sheets['Sheet1']
// console.log(ws);

//if we have n no. of data than we pass like 
// var ws = wb.Sheets['Sheet1',Sheet2]

//this conver excel data into json
 var exceldata = xlsx.utils.sheet_to_json(ws)
//  console.log(exceldata);
// console.log("===============================");
// //here we can read specific password data
// console.log(exceldata[0].EMAILADD);


module.exports = {exceldata}