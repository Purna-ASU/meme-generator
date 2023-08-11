import { useState } from "react";
import memesData from "../assets/memesData";

function Form() {

    const [meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMemeArray() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url;

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return(
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top Text"/>
                <input type="text" className="form--input" placeholder="Bottom Text"/>
                <button onClick={getMemeArray} className="form--button">Get a new meme image 🖼</button>
            </div>
            <div className="meme--holder">
                <img src={meme.randomImage} className="meme--image"/>
            </div>
        </main>
    )
};

export default Form;