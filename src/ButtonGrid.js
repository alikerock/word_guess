import Button from "./Button";

const ButtonGrid = ({secretWord, guessedLetters})=>{
  let letters = [
    'A','B','C','D','E','F','G','H',
    'I','J','K','L','M','N','O','P',
    'Q','R','S','T','U','V','W','X',
    'Y','Z'
  ];
  let buttons = letters.map((letter,idx)=>(
    <Button value={letter} key={idx} />
  ));


  return(
    <div>
      {buttons}
    </div>
  )
}
export default ButtonGrid;