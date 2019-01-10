var viewer;
var options = {
    env: 'AutodeskProduction',
    getAccessToken: getForgeToken
}

var documentId1 = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWwyMDE5LTAxLTA5LTEzLTUzLTQyLWQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlL055dDEuZHdmeA';
var documentId2 = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWwyMDE5LTAxLTA5LTEzLTUzLTQ4LWQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlL055dDIuZHdmeA';
var documentId3 = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWwyMDE5LTAxLTA5LTEzLTUzLTI4LWQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlL055dDMuZHdmeA'
// Button_Click
// document.getElementById("openViewerBtn").addEventListener("click",function(){
Autodesk.Viewing.Initializer(options, function onInitialized() {
    Autodesk.Viewing.Document.load(documentId1, onDocumentLoadSuccess, onDocumentLoadFailure);
});

/**
 * Autodesk.Viewing.Document.load() success callback.
 * Proceeds with model initialization.
 */
var svfUrl;
var modelOptions;
var lmvDoc;

function onDocumentLoadSuccess(doc) {

    // A document contains references to 3D and 2D viewables.
    var viewable = Autodesk.Viewing.Document.getSubItemsWithProperties(doc.getRootItem(), {
        'type': 'geometry',
        'role': '3d'
    }, true);
    if (viewable.length === 0) {
        console.error('Document contains no viewables.');
        return;
    }

    // Choose any of the available viewable
    var initialViewable = viewable[0]; // You can check for other available views in your model,
    svfUrl = doc.getViewablePath(initialViewable);
    modelOptions = {
        sharedPropertyDbPath: doc.getPropertyDbPath()
    };
    
    var viewerDiv = document.getElementById('forgeViewer');

    ///////////////USE ONLY ONE OPTION AT A TIME/////////////////////////

    /////////////////////// Headless Viewer /////////////////////////////
    // viewer = new Autodesk.Viewing.Viewer3D(viewerDiv);
    //////////////////////////////////////////////////////////////////////

    //////////////////Viewer with Autodesk Toolbar///////////////////////
    viewer = new Autodesk.Viewing.Private.GuiViewer3D(viewerDiv);
    //////////////////////////////////////////////////////////////////////

    viewer.start(svfUrl, modelOptions, onLoadModelSuccess, onLoadModelError);
    
   lmvDoc = doc;
    
}

// var globalOffset = viewer.model.getData().globalOffset;
// var modelOptions2 = {
//     sharedPropertyDbPath:doc.getPropertyDbPath(),
//     globalOffset:globalOffset
// }

// viewer.loadModel(svfUrl, modelOptions2);


/**
 * Autodesk.Viewing.Document.load() failure callback.
 */
function onDocumentLoadFailure(viewerErrorCode) {
    console.error('onDocumentLoadFailure() - errorCode:' + viewerErrorCode);
}

/**
 * viewer.loadModel() success callback.
 * Invoked after the model's SVF has been initially loaded.
 * It may trigger before any geometry has been downloaded and displayed on-screen.
 */
function onLoadModelSuccess(model) {
    console.log('onLoadModelSuccess()!');
    console.log('Validate model loaded: ' + (viewer.model === model));
    console.log(model);
}

/**
 * viewer.loadModel() failure callback.
 * Invoked when there's an error fetching the SVF file.
 */
function onLoadModelError(viewerErrorCode) {
    console.error('onLoadModelError() - errorCode:' + viewerErrorCode);
}

// }) //EndOfButton_Click

// /////////////////////////////////////////////////////////////////////////////////
// //
// // Load Viewer Background Color Extension
// //
// /////////////////////////////////////////////////////////////////////////////////

// function changeBackground (){
//        viewer.setBackgroundColor(0, 59, 111, 255,255, 255);
// }

// /////////////////////////////////////////////////////////////////////////////////
// //
// // Unload Viewer Background Color Extension
// //
// /////////////////////////////////////////////////////////////////////////////////

// function resetBackground (){
//        viewer.setBackgroundColor(169,169,169, 255,255, 255);
// }

// /////////////////////////////////////////////////////////////////////////////////
// //
// // Load Viewer Markup3D Extension
// //
// /////////////////////////////////////////////////////////////////////////////////
// // 3D Markup extension to display values of the selected objects in the model. 

// function loadMarkup3D (){
//        viewer.loadExtension('Viewing.Extension.Markup3D');
// }

// /////////////////////////////////////////////////////////////////////////////////
// //
// // Load Viewer Transform Extension
// //
// /////////////////////////////////////////////////////////////////////////////////
// // Transformation is allowed with this extension to move object selected in the XYZ
// // position or rotation in XYZ as well.

// function loadTransform (){
//        viewer.loadExtension('Viewing.Extension.Transform');
// }

// /////////////////////////////////////////////////////////////////////////////////
// //
// // Load Viewer Control Selector Extension
// //
// /////////////////////////////////////////////////////////////////////////////////
// // This extension allows you to remove certain extensions from the original toolbar 
// // provided to you.

// function loadControlSelector(){
//        viewer.loadExtension('_Viewing.Extension.ControlSelector');
// }

// Testovaci vlozeni dilu do vieweru
$("#addModelBtn").click(function(){
//Ziskani vyberu z tabulky   
    //Najiti modelu v databazi (seznamu)
    docID = findModelInDatabase(getRowId());
    //Automaticke prelozeni modelu pro prohlizec
    
    //Vlozeni modelu do prohlizece
    Autodesk.Viewing.Document.load(docID, onDocumentLoadSuccess, onDocumentLoadFailure);
    // viewer.loadModel(docID,onDocumentLoadSuccess,onDocumentLoadFailure);
    //Automaticke umisteni na spravne misto v prohlizeci

})

function findModelInDatabase(modelID,doc) {
    var modelURN = "";
    if (modelID === "1") {
        //Pro ucely dema je vlozen jiz prelozeny model (URN)
        //V tomto pripade se vlozi model "Head01.ipt"
        modelURN = documentId1;
    }
    else if (modelID === "2") {
        modelURN = documentId2;
    }
    else if (modelID === "3") {
        modelURN = documentId3;
    }
    else {
        modelURN ="";
        alert("Model s tímto ID nemám v databázi");
        
        // viewer.loadModel(lmvDoc,svfUrl,modelOptions,(model)=>{
        //     resolve (model)
        // });
    }

    console.log("model URN: "+ modelURN);
    
    // loadModel(viewable,modelURN,viewable[0])
    return modelURN;
    
}

function getRowId() {
    var modelID = rowID;
    console.log("Kliknul jsi na ADD SELECTED a rowId je: " + modelID);
    // console.log(rowID);
    return modelID;
}

$("#exportStepBtn").click(function(){
    downloadStep(getRowId());
})

function downloadStep(modelID) {
        var stepName;
        if (modelID ==="1") {
            stepName = "Nyt1.stp";
        }
        else if (modelID === "2") {
            stepName = "Nyt2.stp";
        }
        else if (modelID==="3") {
            stepName = "Nyt3.stp";
        }
        else
        {
            alert("Tento STEP není k dispozici");
        }
        downloadURI("models/"+stepName,stepName); 
}

function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
  }

//   downloadURI("data:text/html,HelloWorld!", "helloWorld.txt");

//Odeslání emailu
$("#sendEmailBtn").click(function(){
    send();
})

//Uspořádání těla emailu, rozdělení pole na jednotlivé řádky
function formatMailOrder(modelID) {
    // var pole = eliminateDuplicates(listOfProperties);
    // var out = "";
    // var index = 0;
    // for(var i=0;i<listOfProperties;i++){
    //     index +=1;
    // };

    // pole.forEach(element => {
    //     index += +1;
    //     out += index + ". " + element + "%0A"
    // });
    var description;
    var orderNumber;
    if (modelID ==="1") {
        description = "Typ/Popis nýtu: Nýt verze 1";
        orderNumber = "Objednací číslo: 1111"
    }
    else if (modelID === "2") {
        description = "Typ/Popis nýtu: Nýt verze 2";
        orderNumber = "Objednací číslo: 222"
    }
    else if (modelID==="3") {
        description = "Typ/Popis nýtu: Nýt verze 3";
        orderNumber = "Objednací číslo: 333"
    }
    else
    {
        alert("Pro tuto velikost nýtu nelze objednat automatickou nýtovačku.");
    }
    return "Dobrý den," +
    "%0A" + "%0A" + " tímto u Vás Objednávám automatickou nýtovačku v této konfiguraci: " + "%0A" + "  " + description + "%0A" + "  " + orderNumber +"%0A" + "%0A" + 
    "S pozdravem" +"%0A" + "%0A" + "Váš Zákazník!" ;
}

//Funkce vygenerování emailu s objednávkou
function send() {
    setTimeout(function () {
        // window.open("mailto:" + document.getElementById('email').value + "?subject=" + document.getElementById('subject').value + "&body=" + document.getElementById('message').value);
        window.open("mailto:" + "Rivetec - Obchodní oddělení" + "?subject=" + "Objednávka automatické nýtovačky" + "&body=" + formatMailOrder(getRowId()) + "%0A");
        // window.open("mailto:" + "Rivetec EMAIL???" + "?subject=" + "Objednávka automatické nýtovačky" + "&body=" + formatMailOrder() + "%0A");
    }, 320);
}