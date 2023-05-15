import React, { useState } from 'react'

function Question({ question }) {

    const [expand, setExpand] = useState(false)

  return (
    <section>
        <div>
        <h3>{question.title}</h3>
        <button onClick={() => setExpand(!expand)}>{expand ? "-" : "+"}</button>
        {expand && <p>{question.info}</p>}
        </div>
    </section> 
  )
}

export default Question