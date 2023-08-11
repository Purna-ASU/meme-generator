import { useState } from "react";
import memesData from "../assets/memesData";

function Form() {

    const [memeImage, setMemeImage] = useState("")

    function clickHandler() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url;

        setMemeImage(url)
    }

    return(
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top Text"/>
                <input type="text" className="form--input" placeholder="Bottom Text"/>
                <button onClick={clickHandler} className="form--button">Get a new meme image 🖼</button>
            </div>
            <div>
                <img src={memeImage} className="meme--image"/>
            </div>
        </main>
    )
};

export default Form;