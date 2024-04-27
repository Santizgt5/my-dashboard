import { Pokemon, PokemonDetail, PokemonsResponse } from "@/pokemons";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
    params: { name: string };
}


export async function generateStaticParams() {

    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
        .then(res => res.json());

    const static151Pokemons = data.results.map(pokemon => ({
        name: pokemon.name
    }));

    return static151Pokemons.map( ({ name }) => ({
        name: name
    }));

}


export async function generateMetadata({ params }: Props): Promise<Metadata> {

    try {

        const { id, name } = await getPokemon(params.name);

        return {
            title: `#${id} - ${name}`,
            description: `Página del pokémon ${name}`
        }
    } catch (error) {
        return {
            title: 'Pagina del pokémon',
            description: 'Pokémon'
        }
    }

}


const getPokemon = async (name: string): Promise<Pokemon> => {

    try {

        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
            cache: 'force-cache'
        }).then(resp => resp.json());

        console.log('Se cargo: ', pokemon.name)

        return pokemon
    } catch (error) {
        notFound();
    }

}


export default async function PokemonPage({ params }: Props) {

    const pokemon = await getPokemon(params.name);


    return (
        <PokemonDetail pokemon={pokemon} />
    );
}