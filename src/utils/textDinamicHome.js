const textDinamicHome = (text)=>{
  const write = (word)=>{
    const id = setInterval(()=>{
      const lenghtText = text.textContent.length ||0
      if(lenghtText===word.length){
        clearInterval(id)
        setTimeout(()=>{
          eraser(word, 0)
        }, 1100)
        return true
      }else{
        text.textContent += word[lenghtText]
      }
    },80)
  }
  
  const getWord = (beforeWord)=>{
    const messages = ["Web Developer", "Web Designer", "Frontend Developer", "Backend Developer"];
    const index=messages.indexOf(beforeWord)
    if(index===messages.length-1){
      return messages[0]
    }
    return messages[index+1]
  }
  const eraser = (word, count)=>{
    let c = count;
    const id = setInterval(()=>{
      const lenghtText = text.textContent.length ||0
      if(lenghtText===0){
        clearInterval(id)
        const newWord = getWord(word)
        write(newWord)
        return true
      }
      text.textContent = word.substring(0, word.length-c)
      c++
    },30)
  }
  write("Hello World")
}
export default textDinamicHome