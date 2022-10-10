import React, {useState} from "react"; 

const Formu = ({newLocation}) => {
    const [city, setCity] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({city});
        if(city === "" || !city) return;

        newLocation(city);
    }

    return (

        <div className="container-form">
            <form onSubmit={onSubmit}>
                <div className="imput-group mb-3 ">
                    <input type="text" className="form-control" placeholder="Ciudad" onChange={(e) => setCity(e.target.value)}></input>
                    <button className="btn btn-primary input-group-text" type="submit">Buscar</button>
                </div>
            </form>
        </div>

    );
}

export default Formu;