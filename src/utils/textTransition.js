
function textTransition(title, delay){
  let c = 0;
  const id = setInterval(()=>{
    const sp =title.children.item(c)
    sp.style.opacity = "1"
    
    if(c===title.textContent.length-1){
      clearInterval(id)
      return true
    }
    c++
  }, delay)
}
export default textTransition

