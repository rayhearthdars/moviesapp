import React from "react";
import { data } from "../../data/data";
import { Link } from "react-router-dom";
    

export const Details = () => {
    
    return (
        <main>
            <Link to="../home/Home" ><button type="button">Go Back</button></Link>
            <img src={data[0].poster_path} alt={`poster for the fiml ${data[0].title}`} />
            <h2>{data[0].title}</h2>
            <div>
                <div>
                    <p>{data[0].popularity}</p>
                </div>
                <h3>Ratings</h3>
            </div>
            <div>
                <h3>Release Date</h3>
                <p>{data[0].release_date}</p>
            </div>
            <div>
                <h3>Synopsis</h3>
                <p>{data[0].overview}</p>
            </div>
        </main>
    )
}
