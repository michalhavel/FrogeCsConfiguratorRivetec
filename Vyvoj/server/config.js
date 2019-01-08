/////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by Forge Partner Development 
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
/////////////////////////////////////////////////////////////////////

'use strict'; // http://www.w3schools.com/js/js_strict.asp

module.exports = {

  // Autodesk Forge configuration

  // this this callback URL when creating your client ID and secret
  // callbackURL: process.env.FORGE_CALLBACK_URL || 'https://cadsforge.herokuapp.com/api/forge/callback/oauth',
  callbackURL: process.env.FORGE_CALLBACK_URL || 'http://localhost:3000/api/forge/callback/oauth',

  // set environment variables or hard-code here
  credentials: {
    client_id: process.env.FORGE_CLIENT_ID || '0aH5jNS7R4c94hpvB51uyABPGmiIPRw6',
    client_secret: process.env.FORGE_CLIENT_SECRET || 'rGiH2L13FjvPaDFw'
  },

  // Required scopes for your application on server-side
  scopeInternal: ['data:read', 'data:write', 'data:create', 'data:search',
  'bucket:create', 'bucket:read', 'bucket:update', 'bucket:delete'],
  // Required scope of the token sent to the client
  scopePublic: ['viewables:read']
};