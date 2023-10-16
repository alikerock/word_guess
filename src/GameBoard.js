import LetterGrid from "./LetterGrid";

const GameBoard = ({secretWord})=>{
  return(
    <>
      <LetterGrid secretWord={secretWord}/>
    </>
  )
  //props.secretWord

}

export default GameBoard