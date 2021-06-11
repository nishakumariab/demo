var xlsx = require('xlsx')

var wb = xlsx.readFile("C:/Users/swamynarayan/Desktop/demo_wedriverio/exceldata1.xlsx")

var ws = wb.Sheets['OM']

var exceldata =xlsx.utils.sheet_to_json(ws)


module.exports = {exceldata}