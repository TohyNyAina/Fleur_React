import {React,useState} from "react";
import logo from "../../assets/png/logo.png";
import "./body.css";
const Body = ({ data }) => {

    const [coche, setcoche] = useState(data)
    const [categorie, setCategorie] = useState([])
    const [filter,setfilter] = useState('')
       
    


      const filtersFunc = (value, isChecked)=>{
        if(isChecked){
          setCategorie([...categorie, value])
        }
        else{
          setCategorie(categorie.filter(cat => cat !== value))
        }
          console.log(categorie)
        
      }


  return (
    <div>
      {/* ===================================================HEADER=============================================================== */}
      <nav>
        <div>
          <img className="logo" src={logo} alt="logo" width={300} />
        </div>

        <hr />
      </nav>
      
      
      
      
      {/* ===================================================BODY================================================== */}
        <div>

        <input  onChange={(e)=> filtersFunc(e.target.value, e.target.checked)  } value="classique" type="checkbox"/>
             <label>classique</label>
                <br/>
                <input onChange={(e)=> filtersFunc(e.target.value, e.target.checked) } value="exterieur" type="checkbox"/>
             <label>exterieur</label>
                <br/>
                <input onChange={(e)=> filtersFunc(e.target.value, e.target.checked) }  value="plante grasse" type="checkbox"/>
             <label>plante grasse</label>
                <br/>
                <br/>
        </div>
      <div className="plant-content">
        {coche
        .filter(el => categorie.includes(el.categorie))
        .map((elment) => (
          <div key={elment.id} className="plant">
            <img className="plant-img" src={elment.photo} width={100} alt="plante" />
            <p> {elment.nom}</p>
            
            <div>
                 {
                     
                         
                     Object.keys([...Array(elment.lumiere)]).map((_,index)=>(
                        <span key={index}>🌞</span>
                     ))
                 }
                
            </div>

            <div>
                 {
                     
                         
                     Object.keys([...Array(elment.eau)]).map((_,index)=>(
                        <span key={index}>💧</span>
                     ))
                 }
                
            </div>
          </div>
        ))}
      </div>

      {/* ====================================================FOOTER========================================================= */}
      <footer>
        <div className="f-container">
          <div>
            <h1>Prix</h1>
          </div>

          <div>
            <ul>
              <li>niveau1:8000ar</li>
              <li>niveau2:10000ar</li>
              <li>niveau3:15000ar</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Body;
