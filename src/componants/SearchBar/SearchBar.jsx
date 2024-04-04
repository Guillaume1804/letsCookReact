import { HeartIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"
import PropTypes from 'prop-types'; // Importer PropTypes


export default function SearchBar({ onData, recipes, setRecipes  }) {
    const [inputValue, setInputValue] = useState("")

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    useEffect((() => (onData(inputValue))), [inputValue])

    // TODO this

    const handleHeartClick = () => {
        const updatedRecipes = recipes.filter(recipe => recipe.heartClicked);
        console.log(updatedRecipes);
        setRecipes(updatedRecipes);
    };

    return (
        <>
            <div className={"mt-8 mb-4"}>
                <form className={"flex items-center gap-4"}>
                    <label className={"relative block grow"}>
                        <span className={"sr-only"}>Search</span>
                        <span className={"absolute inset-y-0 left-0 flex items-center pl-2"}>
                            <svg className={"h-5 w-5 fill-slate-300"} viewBox={"0 0 20 20"}></svg>
                        </span>
                        <input className={"placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"} placeholder={"Search for anything..."} type={"text"}name={"search"} onChange={handleChange}/>
                    </label>
                    <div>
                        <button className={"border-2 rounded-md px-4 py-2"} onClick={(e) => {
                            e.preventDefault();
                            handleHeartClick();
                        }}>
                            <HeartIcon className={"h-6 w-6 text-blue-500"}/>
                        </button>
                    </div>
                    <div>
                        <button className={"border-2 rounded-md px-4 py-2 bg-gray-800 text-white"}>
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
// Valider la prop onData avec PropTypes
SearchBar.propTypes = {
    onData: PropTypes.func.isRequired,
    recipes: PropTypes.array.isRequired,
    setRecipes: PropTypes.func.isRequired,
};