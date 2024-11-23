import React from 'react';
import LettreRecommendation from './lettre-recommendation.pdf'
import FicheLST from './FicheLST.pdf'
import FicheDEUST from './FicheDEUST.pdf'

import LettreRecommendation2 from './RecoImane.pdf'
import CV from './CV.pdf'
import DN from './DN.pdf'
import LN from './LN.pdf'
import LC from './LC.pdf'
import DC from './DC.pdf'
import BAC from './BAC.pdf'
import Zer from './zertifikat.pdf'
 

import './App.css';

const Dokument = () => {
  return (
    <div className='Dokument'>
      <h1>Wesentliches Dokument</h1>
      <br /> 
      <a>
        Numéro enregistrement Botschaft : 22663930 
      </a>
             <br /> 
<a>
        Emailing the TELC : service@telc.net 
      </a> 
             <br /> 
<a>
        Numéro Passeport : NS1562494  
      </a>
            <br /> 
<a href={Zer} download="ZertifikatB1.pdf">
        Zertifikat Deutsch B1 
      </a>
           <br /> 
 <a href={LettreRecommendation} download="Lettre Recommendation Rachid.pdf">
        Lettre Recommendation - Rachid Dakir
      </a>
           <br /> 
 <a href={LettreRecommendation2} download="Lettre Recommendation Imane.pdf">
        Lettre Recommendation - Imane Lmati
      </a>
          <br /> 
  <a href={FicheLST} download="ficheLST.pdf">
        Fiche Module LST
      </a>
         <br /> 
   <a href={FicheDEUST} download="FicheDEUST.pdf">
        Fiche Module DEUST
      </a>
           <br /> 
 <a href={CV} download="cv.pdf">
        C.V
      </a>
           <br /> 
 <a href={DC} download="desut certificate.pdf">
        DEUST Certificate
      </a>
        <br /> 
    <a href={LC} download="lst certificate.pdf">
        LST Certificate
      </a>
          <br /> 
  <a href={DN} download="deust notes.pdf">
        DEUST Notes
      </a>
          <br /> 
  <a href={LN} download="lst notes.pdf">
        LST Notes
      </a>
         <br /> 
   <a href={BAC} download="bac.pdf">
        BAC
      </a>

    </div>
  );
};

export default Dokument;
