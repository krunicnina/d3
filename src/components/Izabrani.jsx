import Card from "./Card";

function Izabrani({recepti,kriterijum,izbaci}) {
  
    return (
    <div className="row" >
        {kriterijum===""
        ?
        recepti.map((r)=> <div   key={r.id} className="col-sm-3"><Card  key={r.id} r={r} mod={2} izbaci={izbaci}></Card><br /></div>)
        :
        <>
        {recepti
        .filter((r)=>r.naziv.toLowerCase().includes(kriterijum.toLowerCase()))
        .map((r)=> <div   key={r.id} className="col-sm-3"><Card  key={r.id} r={r} mod={2} izbaci={izbaci}></Card><br /></div>)}

        </>
        }
           
      </div>
    );
  }
  
  export default Izabrani;