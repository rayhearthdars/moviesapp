import React from "react";

type DetailsProps = {
    src: string;
    title: string;
    userRatings: string;
    date: string;
    overview: string;
}

export const Details = ({ src, title, userRatings, date, overview }: DetailsProps) => {
    
    return (
        <main>
            <img src={src} alt={`poster for the fiml ${title}`} />
            <h2>{title}</h2>
            <div>
                <div>
                    <p>{userRatings}</p>
                </div>
                <h3>Ratings</h3>
            </div>
            <div>
                <h3>Release Date</h3>
                <p>{date}</p>
            </div>
            <div>
                <h3>Synopsis</h3>
                <p>{overview}</p>
            </div>
        </main>
    )
}
