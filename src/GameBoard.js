import LetterGrid from "./LetterGrid";
import ButtonGrid from "./ButtonGrid";
import { useState } from "react";

const GameBoard = ({secretWord})=>{
  const [guessedLetters, setGuessedLetters] = useState([]);

  const letterGuessedHandler = (letter)=>{
    let val = letter.toLowerCase();

    setGuessedLetters(prev=> [...prev,val]);

  }

  return(
    <div>
      <LetterGrid secretWord={secretWord} guessedLetters={guessedLetters}/>
      <ButtonGrid letterGuessed={letterGuessedHandler}/>
    </div>
  )
  //props.secretWord

}

export default GameBoard