function Recept({rec, dodaj,mod,izbaci}) {


  return (
  <div className="card" >
      <img src={rec.slika} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{rec.naziv}</h5>
        <p className="card-text">{rec.opis} <br /> Kalorije: {rec.kalorije}<br /> Vreme pripreme: {rec.vreme + "min"}<br /> Link pripreme: {rec.link} </p>
        {mod==1 ?
          <button className="btnDodaj" 
          onClick={()=>dodaj(rec.id)}> DODAJ </button>
          :
          <button className="btnIzbaci" onClick={()=>izbaci(rec.id)}>IZBACI</button>

        }
      </div>
    </div>
  );
}

export default Recept;