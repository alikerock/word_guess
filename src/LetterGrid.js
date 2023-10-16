const LetterGrid = ({secretWord})=>{
  let lettered = secretWord
                .split('')
                .map(letter=><span>{letter}</span>);
  return(
    <>
      {lettered}
    </>
  )
}
export default LetterGrid;