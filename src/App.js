import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Cards from "./Cards"
import data from "./data"

export default function App(){
   const cards=data.map(item=>{
    return(
        <Cards 
        key={item.id}
        item={item}
        />
    )
   })
    return(
   <div>
       <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
   </div> 
    )
}






/* import Contact from "./Contact"

function App() {
    return (
        <div className="contacts">
            <Contact 
                img="./mr-whiskerson.png" 
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img="./fluffykins.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img="./felix.png"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img="./pumpkin.png"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
}

export default App
 */

