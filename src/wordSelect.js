const WordSelect = ()=>{
  const [secretWord, setSecretWord] = useState('');
  
  const onSubmit = (e) =>{
      e.preventDefault();

  }
  return(

    <form onSubmit={onSubmit}>
      <input type="text" onChange={e=>{
        setSecretWord(e.target.value);
      }} />
      <button>Set Word</button>
    </form>
  )
}
export default WordSelect;