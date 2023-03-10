import { useState } from 'react';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const FormSearch = () => {
    const [title, setTitle] = useState("");
    const {setQuery, error} = useContext(DataContext);
    //const {data} = useFetch("&s=batman");
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(title);
        //console.log("title:", title)
        }
      
    return (
        <div className="form-search">
            <h2>Buscador Películas</h2>
            <form onSubmit={ handleSubmit }>
                <input type="text" name="" placeholder='Título película' onChange={e => setTitle(e.target.value)} />
                <input type="submit" value="Buscar" />
            </form>
            { error && <p>No existe la película</p> }
        </div>
    );
}

export default FormSearch;


