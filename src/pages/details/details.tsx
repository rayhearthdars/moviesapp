import React from "react";
import {data} from "../../data/data"
    
type DetailsProps = {
    src: string;
    title: string;
    userRatings: number;
    date: string;
    overview: string;
}

export const Details = () => {
    
    return (
        <main>
            <img src={data[0].src} alt={`poster for the fiml ${data[0].title}`} />
            <h2>{data[0].title}</h2>
            <div>
                <div>
                    <p>{data[0].userRatings}</p>
                </div>
                <h3>Ratings</h3>
            </div>
            <div>
                <h3>Release Date</h3>
                <p>{data[0].date}</p>
            </div>
            <div>
                <h3>Synopsis</h3>
                <p>{data[0].synopsis}</p>
            </div>
        </main>
    )
}
