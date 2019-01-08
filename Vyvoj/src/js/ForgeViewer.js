// 'use strict'
import $ from "jquery";
import {getForgeToken} from "./oauth";
// import Client from './extensions/components/Client';
import ModelTransformerExtension from './extensions/Viewing.Extension.ModelTransformer';
// import EventTool from './extensions/components/Viewer.EventTool';
import importCsvData from "./importCsvData";

// var ModelTransformerExtension = require('./extensions/Viewing.Extension.ModelTransformer');
// import { ModelTransformerExtension } from "./extensions/Viewing.Extension.ModelTransformer";
// import ModelTransformerExtension from './extensions/Viewing.Extension.ModelTransformer';
const Autodesk = window.Autodesk;
const THREE = window.THREE;
var viewer;
var pointData ={};
var pointer;
var globalOffset;
var options = {
    env: 'AutodeskProduction',
    getAccessToken: getForgeToken
}

var documentId = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWwyMDE4LTEyLTA1LTEwLTA0LTM3LWQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlL0JvZHlfT2JhbF8xLmlwdA';
var documentId2 = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWwyMDE5LTAxLTAzLTE0LTI4LTI4LWQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlL0hlYWQwMS5pcHQ';
// Button_Click
// document.getElementById("openViewerBtn").addEventListener("click",function(){
// Autodesk.Viewing.Initializer(options, function onInitialized() {
//     Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);
// });

launchViewer(documentId);
export function launchViewer(documentId) {
     
       var viewerDiv = document.getElementById('forgeViewer');
       viewer = new Autodesk.Viewing.Private.GuiViewer3D(viewerDiv);

       Autodesk.Viewing.Initializer(options, function onInitialized(){
           var errorCode = viewer.start();
   
           // Check for initialization errors.
           if (errorCode) {
               console.error('viewer.start() error - errorCode:' + errorCode);
               return;
           }
               Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);
               
           });
   }

/**
 * Autodesk.Viewing.Document.load() success callback.
 * Proceeds with model initialization.
 */
function onDocumentLoadSuccess(doc) {

    // A document contains references to 3D and 2D viewables.
    var viewables = Autodesk.Viewing.Document.getSubItemsWithProperties(doc.getRootItem(), {'type':'geometry'}, true);
    if (viewables.length === 0) {
        console.error('Document contains no viewables.');
        return;
    }
    // var eventTool = new EventTool(viewer)
    // eventTool.activate()
    // eventTool.on('singleclick', (event) => {
    //     pointer = event
    // })

    //load model.
    viewer.addEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT, onGeometryLoadedHandler);
    viewer.addEventListener(Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT,onSelection);
    viewer.prefs.tag('ignore-producer');
    
    // viewer.impl.disableRollover(true); //removed for viewer version 3.2
    viewer.loadExtension(ModelTransformerExtension, {
         parentControl: 'modelTools',
         autoLoad: true
    })  
    // Choose any of the available viewables.
    var indexViewable = 0;
    var lmvDoc = doc;

    // Everything is setup, load the model.
    loadModel(viewables, lmvDoc, indexViewable);
    
}

// viewer.loadModel(path, options); //Load your second model
/**
* Autodesk.Viewing.Document.load() failuire callback.
**/
// function onDocumentLoadFailure(viewerErrorCode) {
//     console.error('onDocumentLoadFailure() - errorCode:' + viewerErrorCode);
// }

//////////////////////////////////////////////////////////////////////////
// Model Geometry loaded callback
//
//////////////////////////////////////////////////////////////////////////
function onGeometryLoadedHandler(event) {
        event.target.model = event.model
        var viewer = event.target;
        viewer.removeEventListener(
                Autodesk.Viewing.GEOMETRY_LOADED_EVENT,
                onGeometryLoadedHandler);
        viewer.setQualityLevel(false,false);
        viewer.setGroundShadow(false);
        //viewer.showAll();
        viewer.fitToView();
}


function loadNextModel(documentId) {
     const extInstance = viewer.getExtension(ModelTransformerExtension);
    //  const pickVar = extInstance.panel;

    //  pickVar.tooltip.setContent(`
    //   <div id="pickTooltipId" class="pick-tooltip">
    //     <b>Pick position ...</b>
    //   </div>`, '#pickTooltipId')

    // if (!pointData.point){
    //     alert('You need to select a point in your house to snap the AC first');
    //     pickVar.tooltip.activate();
    // }
    // else{
    //     Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);
    //     pickVar.tooltip.deactivate();
    // }
   
}

loadNextModel(documentId2);


function onSelection (event) {
    if (event.selections && event.selections.length) {
        pointData = viewer.clientToWorld(
            // pointer.canvasX,
            // pointer.canvasY,
            true)
    }
}
/**
 * Autodesk.Viewing.Document.load() success callback.
 * Proceeds with model initialization.
 */
// function onDocumentLoadSuccess(doc) {

//     // A document contains references to 3D and 2D viewables.
//     var viewable = Autodesk.Viewing.Document.getSubItemsWithProperties(doc.getRootItem(), {
//         'type': 'geometry',
//         'role': '3d'
//     }, true);
//     if (viewable.length === 0) {
//         console.error('Document contains no viewables.');
//         return;
//     }

//     // Choose any of the available viewable
//     var initialViewable = viewable[0]; // You can check for other available views in your model,
//     var svfUrl = doc.getViewablePath(initialViewable);
//     var modelOptions = {
//         sharedPropertyDbPath: doc.getPropertyDbPath()
//     };

//     var viewerDiv = document.getElementById('forgeViewer');

//     ///////////////USE ONLY ONE OPTION AT A TIME/////////////////////////

//     /////////////////////// Headless Viewer /////////////////////////////
//     // viewer = new Autodesk.Viewing.Viewer3D(viewerDiv);
//     //////////////////////////////////////////////////////////////////////

//     //////////////////Viewer with Autodesk Toolbar///////////////////////
//     viewer = new Autodesk.Viewing.Private.GuiViewer3D(viewerDiv);
//     //////////////////////////////////////////////////////////////////////

//     viewer.start(svfUrl, modelOptions, onLoadModelSuccess, onLoadModelError);
//     // loadModel(viewable,doc,0);
// }

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

// Testovaci vlozeni dilu do vieweru
$("#addModelBtn").click(function(){
//Ziskani vyberu z tabulky   
    //Najiti modelu v databazi (seznamu)
    findModelInDatabase(getRowId());
    //Automaticke prelozeni modelu pro prohlizec
    
    //Vlozeni modelu do prohlizece
    Autodesk.Viewing.Document.load(documentId2, onDocumentLoadSuccess, onDocumentLoadFailure);
    //Automaticke umisteni na spravne misto v prohlizeci

})

function findModelInDatabase(modelID) {
    var modelURN = "";
    if (modelID === "1") {
        //Pro ucely dema je vlozen jiz prelozeny model (URN)
        //V tomto pripade se vlozi model "Head01.ipt"
        modelURN = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWwyMDE5LTAxLTAzLTE0LTI4LTI4LWQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlL0hlYWQwMS5pcHQ';
    }
    else {
        modelURN ="";
        alert("Model s tímto ID nemám v databázi");
    }

    console.log("model URN: "+ modelURN);
    
    // loadModel(viewable,modelURN,viewable[0])
    return modelURN;
    
}

function getRowId() {
    importCsvData.selectedRowOnTable();
    var modelID = importCsvData.rowID;
    console.log("Kliknul jsi na ADD SELECTED a rowId je: " + modelID);
    // console.log(rowID);
    return modelID;
}

function loadModel(viewables, lmvDoc, indexViewable) {

    return new Promise(async(resolve, reject)=> {
        var initialViewable = viewables[indexViewable];
        var svfUrl = lmvDoc.getViewablePath(initialViewable);
        var panel;
        var modelName;

        var modelOptions = {
                    sharedPropertyDbPath: lmvDoc.getPropertyDbPath(),
        };

        viewer.loadModel(svfUrl, modelOptions, (model) => {
            
            switch (lmvDoc.myData.status.toString() === "success" ) {
            case (lmvDoc.myData.guid.toString() === "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWwyMDE5LTAxLTAzLTE0LTI4LTI4LWQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlL0hlYWQwMS5pcHQ"):
                
                // panel = viewer.getExtension(ModelTransformerExtension).panel;
                // panel.setTransform(wallOneTransform());
                // panel.applyTransform(model);
                // modelName = "Head01.ipt"    
                break;

            // case (lmvDoc.myData.guid.toString() === "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWwyMDE4LTA2LTA2LTEzLTUzLTQ3LWQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlL09LTk9fMi5pcHQ"):
                
            //     panel = viewer.getExtension(ModelTransformerExtension).panel;
            //     panel.setTransform(wallTwoTransform()); 
            //     panel.applyTransform(model); 
            //     modelName = "OKNO_2.ipt"
            //     break;
                
            // case (lmvDoc.myData.guid.toString() === "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWwyMDE4LTA2LTA2LTEzLTU2LTMwLWQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlL0RWRVJFLmlwdA"):
            //     panel = viewer.getExtension(ModelTransformerExtension).panel;
            //     panel.setTransform(floorTransform());
            //     panel.applyTransform(model);
            //     modelName = "DVERE.ipt"
            //     break;
            default:
                //viewer.impl.toggleCelShading(true);
                modelName = "Body_Obal_1.ipt";
            }

            model.name = modelName;
            resolve(model)
        })
    })
}

// var globalOffset = 
// function wallOneTransform(){

//     var transform = {
//         translation: new THREE.Vector3(0.0, 0.0, 0.0),
//         rotation: new THREE.Vector3(0.0, 0.0, 0.0),
//         scale: new THREE.Vector3(1, 1, 1)
//     }
//     switch (pointData.face.normal.x * pointData.face.normal.y === 0){
//     case (pointData.face.normal.x === 0 && Math.round(pointData.face.normal.y) === 1):
//         transform.translation = new THREE.Vector3(pointData.point.x , pointData.point.y+0.3, pointData.point.z);
//         transform.rotation = new THREE.Vector3(0, 0, 180);
//         console.log('Inside Y = 1 Wall');
//         break;
//     case (pointData.face.normal.x === 0 && Math.round(pointData.face.normal.y) === -1) :
//         transform.translation = new THREE.Vector3(pointData.point.x , pointData.point.y-0.3, pointData.point.z);
//         transform.rotation = new THREE.Vector3(0, 0, 0);
//         console.log('Inside Y = -1 Wall');
//         break;
//     case (Math.round(pointData.face.normal.x) === 1 && pointData.face.normal.y === 0):
//         transform.translation = new THREE.Vector3(pointData.point.x+0.3 , pointData.point.y, pointData.point.z);
//         transform.rotation = new THREE.Vector3(90, 90, 0);
//         console.log('Inside X = 1 Wall');
//         break;
//     case (Math.round(pointData.face.normal.x) === -1 && pointData.face.normal.y === 0):
//         transform.translation = new THREE.Vector3(pointData.point.x-0.35 , pointData.point.y, pointData.point.z);
//         transform.rotation = new THREE.Vector3(0, 180, 90);
//         console.log('Inside X = -1 Wall');
//         break;
//     default:
//         alert('You need to select one of the walls for this AC Unit');
//     }
//     return transform
// }

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
//   viewer.loadExtension('./extensions/Viewing.Extension.ModelTransformer');
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

const ForgeViewer = {
    launchViewer,
    // loadNextModel
  };
  
  export default ForgeViewer;