import LetterGrid from "./LetterGrid";

const GameBoard = ({secretWord})=>{
  return(
    <>
      <LetterGrid secretWord={secretWord} guessedLetters={['r','e']}/>
    </>
  )
  //props.secretWord

}

export default GameBoard