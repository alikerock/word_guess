import LetterGrid from "./LetterGrid";
import ButtonGrid from "./ButtonGrid";

const GameBoard = ({secretWord})=>{
  return(
    <div>
      <LetterGrid secretWord={secretWord} guessedLetters={['r','e']}/>
      <ButtonGrid/>
    </div>
  )
  //props.secretWord

}

export default GameBoard