import React from "react"

export default function Main({item}){
    return(
      <div className="card">
        <img src={`../images/${item.coverImg}`}/>
      
        <div className="card-text">
          <img src="./images/Fill 219.png" />
          <p>{item.location}</p>
          <a href={item.link}>View on Google Maps</a>
          <section className="more-text">
          <h1>{item.place}</h1>
          <h4>{item.period}</h4>
          <p>
          {item.description}
          </p>

        </section>
        </div>
        

    </div>
  )
}