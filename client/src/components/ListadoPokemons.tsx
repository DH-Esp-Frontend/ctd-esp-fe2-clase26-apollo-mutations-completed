import React, {useEffect, useState} from "react";
import ListadoPokemonsItem from "../components/ListadoPokemonsItem";
import {Pokemon} from "../types/pokemon.types";
import {useQuery} from "@apollo/client";
import {GET_POKEMONS} from "./ListadoPokemons.queries";

/**
 * Visualiza una lista de pokemons
 *
 * Ej:
 * <pre>
 *     <ListadoPokemons />
 *
 * </pre>
 *
 * @author Digital House
 */
const ListadoPokemons = () => {
    const { loading, error, data } = useQuery(GET_POKEMONS);

    if (loading) return <div>Cargando pokemons...</div>
    if (!data?.pokemons) return <></>
    return (
        <div className="listado">
            {data.pokemons && data.pokemons.map((pokemon: Pokemon) => (
                <ListadoPokemonsItem pokemon={pokemon}
                                     key={pokemon.name}/>
            ))}
        </div>
    );
}

export default ListadoPokemons;
