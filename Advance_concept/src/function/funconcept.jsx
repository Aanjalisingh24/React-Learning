function funconcept() {

  function functionchange(elm){
    console.log(elm.target.value);
  }

  return (
    <>
      <input onChange={functionchange} placeholder='enter your name'/>
    </>
  )
}

export default funconcept;