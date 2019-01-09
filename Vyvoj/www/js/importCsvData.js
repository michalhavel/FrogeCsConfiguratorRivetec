// List hodnot pro tabulku
// var myList =
//     [
//         { id: '1', number: '1111', description: 'Nyt 1' },
//         { id: '2', number: '222', description: 'Nyt 2' }
//     ];


// Loads rivets data from server and fill table
function getRivets(callback) {
    jQuery.ajax({
        url: '/rivetec/getrivets',
        success: function (res) {
            console.log('rivets portflio', res);
            callback(res);
        }
    });

}


// Builds the HTML Table out of myList json data from Ivy restful service.
function buildHtmlTable(rivetsData) {
    var columns = addAllColumnHeaders(rivetsData);

    for (var i = 0; i < rivetsData.length; i++) {
        var row$ = $('<tr/>');
        for (var colIndex = 0; colIndex < columns.length; colIndex++) {
            var cellValue = rivetsData[i][columns[colIndex]];

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
var rowID;
// Oznaceni radku v tabulce
function selectedRowOnTable() {
    $("#csvDataTable tr").click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        var value = $(this).find('td:first').html();
        console.log(value);
        rowID = value;
    });
}

// Nacti data CLICK
$("#btnDataImport").click(function () {
    getRivets(function (rivetsData) {
        clearTable();
        buildHtmlTable(rivetsData);
        selectedRowOnTable();
    })
})

