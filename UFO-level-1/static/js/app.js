/* pull data*/
var tableData = data;

var tbody = d3.select("tbody");

console.log(data);

/*adding the table date*/
function addUFO(data) {
    /*clear lines*/
    tbody.html("");

    /* loop through table rows, adding lines*/
    data.forEach(function(sighting) {
        console.log(sighting);
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key,value]) {
            console.log(key,value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
/*run function*/
addUFO(tableData);

/*making input/filter function*/
var button = d3.select("#filter-btn");

var form = d3.select("form");

button.on("click", dateSearch);
form.on("filter", dateSearch);

function dateSearch() {
    d3.event.preventDefault();
    var search = d3.select("#datetime").property("value");
    console.log(search);
    var filteredData = tableData.filter(row => row.datetime === search);
    console.log(filteredData);
    addUFO(filteredData);
};


