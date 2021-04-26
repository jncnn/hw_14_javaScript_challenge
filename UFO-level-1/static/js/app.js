// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// create a function that constucts the table inside the tbody tag
function constructTable(data) {
  //clear any existing data
  tbody.html('');

  // loop through using foreach function

  console.log(data);

  data.forEach((sightingrow) => {
    //append a row to the tbody
    var row = tbody.append("tr");
    // assign values to the table data from the each row of sightings
    Object.values(sightingrow).forEach(function addRows(value) {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

// get a handle 

var button = d3.select('#filter-btn');
console.log(button)
// add a click 

button.on('click', function () {
  // get the value of the date field
  d3.event.preventDefault();
  var dateValue = d3.select("#datetime").property("value");
  console.log(dateValue);
  let filteredSightings = tableData;

  console.log(dateValue);
  // filter the data 
  if (dateValue != "") {
    filteredSightings = filteredSightings.filter(sighting => sighting.datetime === dateValue);
  }
  // create table from filteredsightings

  constructTable(filteredSightings);
});

// create  table for initial page load
constructTable(tableData);


