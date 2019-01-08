import React from 'react';
import ReactDOM from 'react-dom';
import ForgeViewer from './js/ForgeViewer';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
// import 'react-table';
// import "react-table/react-table.css"
// import App from './App';
import { MDBBtn, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, Table, 
  TableBody, TableHead } from 'mdbreact';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <div className="row">
      <div id="csvDataTable" border="5" className = "table">
      </div>
    </div>
    <div className="row center" id="forgeViewer"></div>

    <div className="row">
      <div id="openViewerBtn" className="btn blue">BUTTON</div>
      <div id="exportStepBtn" className="btn">BUTTON STEP</div>
    </div>

    <div className="row">
      <MDBBtn color="primary">TEST</MDBBtn>
    </div>
  </div>,
  document.getElementById('root')
);
registerServiceWorker();
ForgeViewer.launchViewer();

// function App() {
//   return (
//     <div className="App">

//         <h1>Hello CodeSandbox</h1>
//         <h2>Start editing to see some magic happen!</h2>


//     </div>
//   );
// }

// const rootElement = document.getElementById("rootViewer");
// ReactDOM.render(<App />, rootElement);

// ReactDOM.render(
//   <h1>Hello world jeste jednou</h1>,
//   document.getElementById('root')
// );

// ForgeViewer;