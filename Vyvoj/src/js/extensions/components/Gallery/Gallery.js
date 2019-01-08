/////////////////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by Jaime Rosales 2016 - Forge Developer Partner Services
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////////////////

// Models

import React, { Component } from 'react';
//import scrollTo from 'scroll-to';
import Helpers from '../Viewer/Viewer-Helpers';
import './Gallery.css';


const tilesData = [
  {
    img: 'images/OKNO_1.png',
    title: 'Okno 1',
    key: '0001',
    urn:'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWwyMDE4LTA2LTA2LTEzLTUzLTQ2LWQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlL09LTk9fMS5pcHQ'
  },
  {
    img: 'images/OKNO_2.png',
    title: 'Okno 2',
    key: '0002',
    urn: 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWwyMDE4LTA2LTA2LTEzLTUzLTQ3LWQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlL09LTk9fMi5pcHQ'
  },
  {
    img: 'images/DVERE.png',
    title: 'Dveře',
    key: '0003',
    urn: 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWwyMDE4LTA2LTA2LTEzLTU2LTMwLWQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlL0RWRVJFLmlwdA'
  }
];


class Gallery extends Component {

  onTileSelect(tile, e) {
    e.preventDefault();
    Helpers.loadNextModel(tile.urn)
  }

   render() {
    return (
      <div className="forge-gallery">
        <div>
          <div>
            {tilesData.map((tile, index) =>
              (
                <div className="tile" key={index}>
                  <a href="#" onClick={this.onTileSelect.bind(this, tile)}>
                    <img className="tile-avatar" src={tile.img} alt={tile.title} />
                  </a>
                   <div className="tile-title">{tile.title}</div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    )
	}
}

export default Gallery;
