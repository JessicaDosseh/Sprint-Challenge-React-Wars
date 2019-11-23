import React, { useState, useEffect} from "react";
import axios from "axios";
import Namelist from "./NameList";


function StarWarsNames(){
const [characterName, setCharacterName] = useState([]);

    useEffect(() =>{
        axios
        .get("https://swapi.co/api/people/")
        .then(response =>{
          setCharacterName(response.data.results);
        })
        .catch(err =>{
            console.log(err);
        })
    },[])

    return(
        <div className = "names">
            {characterName.map((character)=>{
                return(
                    <Namelist
                        name = {character.name}
                        gender = {character.gender}
                        height = {character.height}
                        hair_color = {character.hair_color}
                        eye_color = {character.eye_color}
                        birth_year = {character.birth_year}
                    />
                )}
            )}
        </div>
    );
};
export default StarWarsNames; 