import react from 'react'


const Button = ()=>{
  return(
    <div>

<p>
        {friendsName.map(
          (name, index )=> (<li key={index}> {name}</li>)
        )}
      </p> 

    </div>
  )
}

export default Button