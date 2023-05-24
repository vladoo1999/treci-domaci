import Recept from "./Recept";

function Omiljeni({recepti,kriterijum,izbaci}) {
    return (
    <div className="omiljeni">
    <div className="row" style = {{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
        {kriterijum==""
        ?
        recepti.map((rec)=> <div className="col-sm-3"><Recept  key={rec.id} rec={rec} mod={2} izbaci={izbaci}></Recept><br /></div>)
        :
        <>
        {recepti
        .filter((rec)=>rec.naziv.toLowerCase().includes(kriterijum.toLowerCase()))
        .map((rec)=> <div className="col-sm-3"><Recept  key={rec.id} rec={rec} mod={2} izbaci={izbaci}></Recept><br /></div>)}

        </>
        }

      </div>
      </div>
    );
  }

  export default Omiljeni;