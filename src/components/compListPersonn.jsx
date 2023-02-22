import React, { Component } from 'react'

import { listeDePersonnes } from '../classes/Personn.js'

export default class FonctionReact extends Component {
  render() {
    return(
      <div>
    <ol>
            {
              listeDePersonnes.map(
                (Personne,index) =>
                 <li key={Personne.Id}>
                        {Personne.Nom} - {Personne.Prenom} - {Personne.Age} - {Personne.Adresse} - {Personne.CodePostal}
                 </li>
              )
            }
        </ol>
   </div>
    )
  } 
}