import { Pokemon, PokemonDetail } from "@/pokemons";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}


export async function generateStaticParams() {

  const static151Pokemons = Array.from({ length: 151 }).map( (v, i) => `${i + 1}` );

  return static151Pokemons.map(id => ({
    id: id
  }));

}


export async function generateMetadata({ params }: Props): Promise<Metadata> {

  try {

    const { id, name } = await getPokemon(params.id);

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


const getPokemon = async (id: string): Promise<Pokemon> => {

  try {

    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      cache: 'force-cache'
    }).then(resp => resp.json());

    console.log('Se cargo: ', pokemon.name)

    return pokemon
  } catch (error) {
    notFound();
  }

}


export default async function PokemonPage({ params }: Props) {

  const pokemon = await getPokemon(params.id);


  return (
    <PokemonDetail pokemon={ pokemon } />
  );
}