import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Data(props) {
    const displayData = (props) => {
        const { data } = props;

        const imgStyle={
          margin:"20px 0 30px 0"
        }
        const ulStyle={
            padding: "0px 5px",
            listStyleType: "none",
            textAlign: "center"
        }
        

        if (data.length > 0) {
            return (
                data.map((val, index) => {
                    //'console.log(val);
                    return (
                        <div className="border border-info" style={{margin: "auto", width: "30vw"}} key={index}>
                            <ul className="fs-2" style={ulStyle} >
                                <img className="img-fluid" style={imgStyle} src="./images/photo-7.jpeg" alt="avatar"/>
                                <li className="fw-bold" style={{color: "rgb(33, 63, 184)"}}>Name: {val.name}</li>
                                <li>Gender: {val.gender}</li>
                                <li>Height: {val.height}</li>
                            </ul>
                        </div>
                    );
                })
            )
        }
        
    };

    return <>{displayData(props)}</>;
}

export default Data;
