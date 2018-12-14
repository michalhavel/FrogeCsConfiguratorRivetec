// List hodnot pro tabulku
var myList = [{ id: '1', number: '1111', description: 'Nyt 1' },
{ id: '2', number: '222', description: 'Nyt 2' }];

// Builds the HTML Table out of myList json data from Ivy restful service.
function buildHtmlTable() {
    var columns = addAllColumnHeaders(myList);

    for (var i = 0; i < myList.length; i++) {
        var row$ = $('<tr/>');
        for (var colIndex = 0; colIndex < columns.length; colIndex++) {
            var cellValue = myList[i][columns[colIndex]];

            if (cellValue == null) { cellValue = ""; }

            row$.append($('<td/>').html(cellValue));
        }
        $("#csvDataTable").append(row$);
    }
};

// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records
function addAllColumnHeaders(myList) {
    var columnSet = [];
    var headerTr$ = $('<tr/>');

    for (var i = 0; i < myList.length; i++) {
        var rowHash = myList[i];
        for (var key in rowHash) {
            if ($.inArray(key, columnSet) == -1) {
                columnSet.push(key);
                headerTr$.append($('<th/>').html(key));
            }
        }
    }
    $("#csvDataTable").append(headerTr$);

    return columnSet;
}

// vycisteni tabulky
function clearTable() {
    $("#csvDataTable").empty()
}

// Oznaceni radku v tabulce
function selectedRowOnTable() {
    $("#csvDataTable tr").click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        var value = $(this).find('td:first').html();
        console.log(value);
    });
}

// document.getElementById('btnDataImport').addEventListener('click', function () {
//     clearTable();
//     buildHtmlTable();
//     selectedRowOnTable();
// });

$("#btnDataImport").click(function(){
    clearTable();
    buildHtmlTable();
    selectedRowOnTable();
})

