import React, { Component } from 'react';

class Personne extends Component {
    dataPersonne  = [

        {id:1,
            nom:"MADI",
            prenom:"Naoufali",
            adress:"Cours Buycheres",
            CodePostal:"09000",
            age:27
        },
        {id:1,
            nom:"ATTOUMANY",
            prenom:"Maissara",
            adress:"Lucie Aubrac",
            CodePostal:"44800",
            age:25
        },
        {id:1,
            nom:"HOUMADI",
            prenom:"Mikkail",
            adress:"Henri Troyat",
            CodePostal:"45100",
            age:36
        }
    ]
     
    constructor() {
         super()
         this.id = 0
        this.nom=""
        this.prenom=""
        this.adresse=""
        this.CodePostal=""
        this.age=18
    }
         
    render() {
        return (
            <div>
                <li>{this.id}</li>
                <li>{this.nom}</li>
                <li>{this.prenom}</li>
                <li>{this.adresse}</li>
                <li>{this.CodePostal}</li>
                <li>{this.age}</li>
            </div>
        );
    }
}

export default Personne;