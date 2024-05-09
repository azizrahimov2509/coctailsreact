import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Details() {
    const [cocktail,setCoctail]=useState(null)
   const {id}= useParams();

   useEffect(()=>{
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then((res)=>{
        setCoctail(res.data?.drinks[0])}).catch((err)=>console.log(err))
   },[id])
  
  return (
    <>
      <section  className="section cocktail-section">
                <Link className="btn btn-primary" to="/">back home</Link>
                
                { cocktail ? <>
                <h2 className="section-title">{cocktail?.strDrink}</h2>
                <div className="drink">
                    <img
                        src={cocktail.strDrinkThumb}
                        alt="A1"
                    />
                    <div className="drink-info">
                        <p><span className="drink-data">name :</span>{cocktail?.strDrink}</p>
                        <p>
                            <span className="drink-data">category :</span>{cocktail?.strCategory}
                        </p>
                        <p><span className="drink-data">info :</span>{cocktail?.strAlcoholic}</p>
                        <p>
                            <span className="drink-data">glass :</span>{cocktail?.strGlass}
                        </p>
                        <p>
                            <span className="drink-data">instructons :</span> {cocktail.strInstructions}
                        </p>

                        <p >
                            <span className="drink-data">ingredients :</span>
                             {Array.from({length:15}).map((_,ind)=>{
                                return<span className='drink-ingredients'>{cocktail[`strIngredient${ind +1}`] ?? ""}</span>
                             })}
                            
                        </p>
                    </div>
                </div>
                    
                </> :<div className="loader"></div>}
            </section>
            
    </>
  )
}

export default Details
