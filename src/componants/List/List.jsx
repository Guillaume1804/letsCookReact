import { useState, useEffect } from 'react'
import recipesList from '../../data/recettes.json'
import Card from '../Card/Card'
import SearchBar from '../SearchBar/SearchBar'

function List () {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        setRecipes(recipesList.map(recipe => ({...recipe, heartClicked: false})))
    }, [])


    const handleDataFromChild = (data) => {
        const newTab = recipesList.filter(element => {return (element?.title.toLowerCase().includes(data.toLowerCase())) || (element?.category.toLowerCase().includes(data.toLowerCase()))})
        setRecipes(newTab)
    };

    return (
        <>
            <div className={"container mx-auto mt-4 px-4 py-8"}>
                <h1 className={"text-6xl my-6 text-gray-800	"}>{`Let's Cook`}</h1>
                <SearchBar onData={handleDataFromChild} recipesList={recipesList} setRecipes={setRecipes} recipes={recipes}/>
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}>
                    {recipes.map((element, index) => (
                        <Card key={index} element={element}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default List;