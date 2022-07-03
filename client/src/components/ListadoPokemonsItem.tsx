import React from "react";
import {Pokemon} from "../types/pokemon.types";


interface ListadoPokemonsItemProps {
    pokemon: Pokemon,
}

/**
 * Visualiza una pokemon con su nombre y url
 *
 * Ej:
 * <pre>
 *     <ListadoPokemonsItem pokemon={pokemon}
 *                             seleccionarPokemon={(pokemon) => {}}/>
 *
 * </pre>
 *
 * @author Digital House
 * @param pokemon el pokemon a mostrar
 * @param seleccionarPokemon una función que se ejecuta al hacer click en el pokemon
 */
const ListadoPokemonsItem = ({ pokemon }: ListadoPokemonsItemProps) =>
    <div>
        <strong>{pokemon.name}</strong>
        <img src={pokemon.image} alt={pokemon.name} style={{maxWidth: 200, maxHeight: 200}}/>
    </div>

export default ListadoPokemonsItem;
