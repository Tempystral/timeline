var spreadsheet = 'https://docs.google.com/spreadsheets/d/15oJFkwp6unPc9JFPoc5mhgfMWcvt6E3dZRu8xUE0xoY/edit?usp=sharing'
var sheetjson = ''
var options = {
  timenav_height_percentage: 30,
  initial_zoom: 3,
  hash_bookmark: true
}
timeline = new TL.Timeline('timeline-embed', spreadsheet, options);