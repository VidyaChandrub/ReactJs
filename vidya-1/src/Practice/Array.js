import React from 'react'

const Array = () => {
    const users = [
        {name:"vidya", id:101},
        {name:"prasanna", id:102},
        {name:"chana", id:103}
        ]

       
  return (
    <div>Array
         {users.map(user => (
            <li key={user.id}>{user.id}{user.name}</li>
         )
            
        )}
    </div>
  )
}

export default Array