import React, {useState,useEffect,useCallback} from 'react'
import {Search, ChevronLeft, ChevronRight, Loader2} from 'lucide-react'
import './Pokemon.css'


const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
  
      return () => clearTimeout(handler);
    }, [value, delay]);
  
    return debouncedValue;
  };
  
  const PokemonExplorer = () => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 12;
  
    const debouncedSearch = useDebounce(searchTerm, 300);
  
    const fetchPokemon = useCallback(async () => {
      try {
        setLoading(true);
        setError(null);
        
        const offset = (currentPage - 1) * itemsPerPage;
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=${offset}');
        const data = await response.json();
        
        setTotalPages(Math.ceil(data.count / itemsPerPage));
        
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );
        
        setPokemon(pokemonDetails);
      } catch (err) {
        setError('Failed to fetch Pokémon data. Please try again later.');
      } finally {
        setLoading(false);
      }
    }, [currentPage]);
  
    useEffect(() => {
      fetchPokemon();
    }, [fetchPokemon]);
  
    const filteredPokemon = pokemon.filter((p) =>
      p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  
    const TypeBadge = ({ type }) => (
      <span className="type-badge">{type}</span>
    );
  
    return (
      <div className="container">
        <div className="header">
          <h1>Pokémon Explorer</h1>
          
          <div className="search-container">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search Pokémon..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
  
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
  
        {loading ? (
          <div className="loading-container">
            <Loader2 className="spinner" />
          </div>
        ) : (
          <div className="pokemon-grid">
            {filteredPokemon.map((pokemon) => (
              <div key={pokemon.id} className="pokemon-card">
                <div className="pokemon-card-header">
                  <h2 className="pokemon-name">{pokemon.name}</h2>
                  <span className="pokemon-id">#{pokemon.id}</span>
                </div>
                <div className="pokemon-card-content">
                  <div className="pokemon-image">
                    <img
                      src={pokemon.sprites.front_default}
                      alt={pokemon.name}
                    />
                  </div>
                  <div className="pokemon-types">
                    {pokemon.types.map((type) => (
                      <TypeBadge key={type.type.name} type={type.type.name} />
                    ))}
                  </div>
                  <div className="pokemon-abilities">
                    <h4>Abilities:</h4>
                    <ul>
                      {pokemon.abilities.map((ability) => (
                        <li key={ability.ability.name}>
                          {ability.ability.name}
                        </li>
                         ))}
                         </ul>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
             )}
       
             <div className="pagination">
               <button
                 onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                 disabled={currentPage === 1 || loading}
                 className="pagination-button"
               >
                 <ChevronLeft /> Previous
               </button>
               <span className="page-info">
                 Page {currentPage} of {totalPages}
               </span>
               <button
                 onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                 disabled={currentPage === totalPages || loading}
                 className="pagination-button"
               >
                 Next <ChevronRight />
               </button>
             </div>
           </div>
         );
       };
       
       export default PokemonExplorer;