import {useMutation} from "@apollo/client";
import {ADD_POKEMON} from "./FormularioPokemon.mutations";
import {FC, useState} from "react";
import {GET_POKEMONS} from "../components/ListadoPokemons.queries";
import {string} from "prop-types";

const FormularioPokemon:FC = () => {
    const [name, setName] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [addPokemon, { data, loading, error, reset }] = useMutation(ADD_POKEMON, {refetchQueries: [
            {query: GET_POKEMONS},
        ],});

    if (loading) return <>'Adding pokemon...'</>;
    if (error) return <div>`Adding pokemon failed! ${error.message}`<button onClick={() => reset()}>Reset</button></div>;

    return    <form     onSubmit={e => {
        e.preventDefault();
        addPokemon({ variables: { name: name , image: image } });

    }} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', marginTop: 10}}>
        <div style={{display: 'flex', flexDirection:'row', justifyContent:'flex-start', textAlign: 'left'}}>
            <p style={{paddingRight: 10, width: 100}}>Nombre:</p>
            <input type={"text"} name={"name"} value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div style={{display: 'flex', flexDirection:'row', justifyContent:'flex-start', textAlign: 'left', marginTop: 20}}>
            <p style={{paddingRight: 10, width: 100}}>Imagen:</p>
            <input type={"text"} name={"image"} value={image} onChange={(e) => setImage(e.target.value)}/>
        </div>
        <button type={"submit"} style={{width: 200, height: 45, marginTop: 20}}> Agregar</button>
    </form>
}

export default FormularioPokemon