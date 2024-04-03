import PropTypes from 'prop-types';
import {HeartIcon} from "@heroicons/react/24/outline"
import { useState } from 'react';

export default function Card({ element }) {
    const [iconColor, setIconColor] = useState("text-white")
    const [fillColor, setFillColor] = useState("none")
    const [isClicked, setIsClicked] = useState(false)

    const changeIconColor = () => {
        setIconColor(iconColor === "text-white" ? "text-red-500" : "text-white");
        setFillColor(fillColor === "none" ? "red" : "none");
        setIsClicked(isClicked === false ? true : false);
    }

    return (
        <>
            <article className={"relative border-2 shadow-xl rounded-lg"}>
                <HeartIcon className={`absolute top-2 right-4 h-6 w-6 ${iconColor}`} fill={fillColor} onClick={changeIconColor}/>
                <img className={"object-cover rounded-t-lg"} src={element?.imageUrl} alt="#"/>
                <div className={" flex flex-col px-4 py-2"}>
                    <h2 className={"text-green-900 text-2xl py-1"}>{element?.title}</h2>
                    <div className={"flex flex-row items-center"}>
                        <span className={"mr-4"}>👨 {element?.author}</span>
        {/* Fonction anonym entre () afin de pouvoir la call directement avec une autre paire de () */}
                        <span className={"mr-4"}>{(() => {
                            switch (element?.difficulty) {
                                case 1: return "⭐";
                                case 2: return "⭐⭐";
                                case 3: return "⭐⭐⭐";
                                case 4: return "⭐⭐⭐⭐";
                                default: return "Difficulty : Unknown";
                            }
                        })()}</span>
                        <span className={"border rounded-md bg-gray-800 text-white px-2"}>{element?.category}</span>
                    </div>
                    <p>{element.description}</p>
                    <a className={"self-end"} href="#">En Savoir Plus</a>
                </div>
            </article>
        </>
    )
}


// Méthodes pour corriger les erreurs de typages eslint
Card.propTypes = {
    element: PropTypes.any.isRequired,
  };