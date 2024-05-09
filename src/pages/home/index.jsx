import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
    const [data, setData] = useState(null);
    const inputText = useRef();

    useEffect(() => {
        setLoading(true);
        axios
            .get(url)
            .then((res) => { setData(res.data?.drinks) })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false);
            });
    }, [url]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUrl('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + inputText.current.value);
    };

    const handleSubmitInput = (e) => {
        e.preventDefault();
       setLoading(true);
        setUrl('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + inputText.current.value);
    };


    return (
        <>
            <section className="section search">
                <form className="search-form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="input">search your favorite cocktail</label>
                        <input
                            autoComplete="off"
                            onChange={handleSubmitInput}
                            ref={inputText}
                            type="text"
                            name="name"
                            id="input"
                        />
                    </div>
                </form>
            </section>
        
            <section className="section">
                <h2 className="section-title">Cocktails</h2>

                <div className="cocktails-center">
                    {data ? data.map(({ idDrink, strDrinkThumb, strDrink, strGlass, strAlcoholic }) => {
                        return (
                            <article key={idDrink} className="cocktail">
                                <div className="img-container">
                                    <img src={strDrinkThumb} alt={strDrink} />
                                </div>
                                <div className="cocktail-footer">
                                    <h3>{strDrink}</h3>
                                    <h4>{strGlass}</h4>
                                    <p>{strAlcoholic}</p>
                                    <Link className="btn btn-primary btn-details" to={`/details/${idDrink}`}>
                                        details
                                    </Link>
                                </div>
                            </article>
                        );
                    }) : " "};
                </div> 
                {loading && <div className="loader "></div>}
            </section>
               
        </>
    );
}

export default Home;
