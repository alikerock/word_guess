import Letter from "./Letter";

const LetterGrid = ({secretWord, guessedLetters})=>{
  let lettered = secretWord
                .split('')
                .map(letter=>{
                  let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1;
                  return(
                    <Letter value={letter} isShown={isShown} />                  
                  )
                });
  return(
    <>
      {lettered}
    </>
  )
}
export default LetterGrid;