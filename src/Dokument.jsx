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
        DRIVE ZAHRA :https://drive.google.com/drive/folders/1E5AO2mGD7uo540t9p8zQP6y5jsTeA1cF?usp=drive_link 

      </a>
             <br /> 
     
              <a>
        Aksing ABout somethign in Viza : visa-processing@zentrale.auswaertiges-amt.de 
      </a>
             <br /> 
      <a>
        Aksing ABout somethign in Viza : Visa@raba.diplo.de 
      </a>
             <br /> 
      <a>
        Aksing ABout somethign in Viza : visa@raba.auswaertiges-amt.de 
      </a>
             <br /> 
      <a>
        Aksing ABout somethign in Viza : zzVISABVA@bva.bund.de 
      </a>
             <br />        <br /> 
   


      <a>
        Numéro 1 rachid dakir : 0648030094
      </a>
             <br /> 
             <br /> 


       <a>
        Numéro 2 rachid dakir : 0710402556
      </a>
             <br /> 
             <br /> 


      <a>
        Numéro Othman Scolarité : 0628147278
      </a>
             <br /> 
             <br /> 


      <a>
        Numéro Guitar preparation : 0668620025
      </a>
             <br /> 
             <br /> 



    
      <a>
       visa-processing@zentral.auswaertiges-amt.de  :   thsi email if you wanna ask where your folder is in list and also mention num passport and TLS reference
      </a>
             <br /> 
             <br /> 



     
      <a>
       Telegram group : https://t.me/Marodeutsch
      </a>
             <br /> 
             <br /> 






     

 

     


     

      <a>
       1002irsablemarka  :  DROWSSAP   
      </a>
             <br /> 
             <br /> 

     
<a>
        Emailing the TELC : service@telc.net 
      </a> 
             <br />              <br /> 

<a>
        Numéro Passeport : NS1562494  
      </a>
            <br />              <br /> 

<a href={Zer} download="ZertifikatB1.pdf">
        Zertifikat Deutsch B1 
      </a>
           <br />              <br /> 

 <a href={LettreRecommendation} download="Lettre Recommendation Rachid.pdf">
        Lettre Recommendation - Rachid Dakir
      </a>
           <br />              <br /> 

 <a href={LettreRecommendation2} download="Lettre Recommendation Imane.pdf">
        Lettre Recommendation - Imane Lmati
      </a>
          <br />              <br /> 

  <a href={FicheLST} download="ficheLST.pdf">
        Fiche Module LST
      </a>
         <br />              <br /> 

   <a href={FicheDEUST} download="FicheDEUST.pdf">
        Fiche Module DEUST
      </a>
           <br />              <br /> 

 <a href={CV} download="cv.pdf">
        C.V
      </a>
           <br />              <br /> 

 <a href={DC} download="desut certificate.pdf">
        DEUST Certificate
      </a>
        <br />              <br /> 

    <a href={LC} download="lst certificate.pdf">
        LST Certificate
      </a>
          <br />              <br /> 

  <a href={DN} download="deust notes.pdf">
        DEUST Notes
      </a>
          <br />              <br /> 

  <a href={LN} download="lst notes.pdf">
        LST Notes
      </a>
         <br />              <br /> 

   <a href={BAC} download="bac.pdf">
        BAC
      </a>

    </div>
  );
};

export default Dokument;
