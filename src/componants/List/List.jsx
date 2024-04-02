import { useState, useEffect } from 'react'
import recipesList from '../../data/recettes.json'

function List () {
    const [recipes, setRecipes] = useState([])

    useEffect((()=>{
        setRecipes(recipesList)
        console.log(recipes)
    }), [recipes])

    return (
        <>
            <div>
                {recipes.map((element, index) => (
                    <article key={index} className={"flex flex-col m-4 p-4 border-2 shadow-xl"}>
                        <img className={"object-cover"} src={element?.imageUrl} alt="#"/>
                        <h2>{element?.title}</h2>

                        <div className={"flex flex-row place-content-between"}>
                            <div>
                                <span>👨 {element?.author}</span>
                                            {/* Fonction anonym entre () afin de pouvoir la call directement avec une autre paire de () */}
                                <span>{(() => {
                                    switch (element?.difficulty) {
                                        case 1: return "⭐";
                                        case 2: return "⭐⭐";
                                        case 3: return "⭐⭐⭐";
                                        case 4: return "⭐⭐⭐⭐";
                                        default: return "Difficulty : Unknown";
                                    }
                                })()}</span>
                            </div>
                            <span>{element?.category}</span>
                        </div>

                        <p>{element.description}</p>

                        <a className={"self-end"} href="#">En Savoir Plus</a>
                    </article>
                ))}
            </div>
        </>
    )
}

export default List;