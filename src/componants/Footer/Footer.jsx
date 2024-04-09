import svgFooter from '../../assets/images/footer.svg'
import imgDownload from '../../assets/images/download.jpg'

export default function Footer() {
    return (
        <>
            <img src={svgFooter} alt="svgFooter" />
            <div className={"flex flex-col md:flex-row bg-gray-600 p-16 m-auto gap-x-32 justify-center"}>
                <img className={"sm:w-1/5"} src={imgDownload} alt="imgDownload" />
                <div className={"p-2 sm:p-8 w-full md:1/2 lg:w-1/2"}>
                    <h3 className={"text-2xl md:text-4xl my-4"}>Téléchargez Notre Livre de Recettes Gratuit !</h3>
                    <p>
                        Plongez dans un monde de saveurs avec notre tout nouveau livre de recettes ! Des entrées succulentes aux desserts irrésistibles, découvrez des recettes exclusives qui émerveilleront vos papilles. Que vous soyez un chef expérimenté ou un novice en cuisine, ce livre est votre passeport pour une aventure culinaire inoubliable. Ne manquez pas cette occasion - votre prochain plat préféré vous attend !
                    </p>
                    <button className={"w-full my-4 p-2 border bg-white rounded-lg"}>Télécharger Maintenant</button>
                </div>
            </div>
            <div className={"bg-gray-800 p-2"}>
                <p className={"text-center text-white text-sm"}>{`©️ 2024, Let's Cook`}</p>
            </div>
        </>
    )
}