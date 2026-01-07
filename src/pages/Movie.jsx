import { useLoaderData } from "react-router-dom"
import { Card } from "../components/UI/Card";

export const Movie = () => {
    const moviesData = useLoaderData();
    return (
        <ul className="container grid grid-four--cols">
            { moviesData && moviesData.Search.map((curElem) => {
                return <Card key={curElem.imdbID} data={curElem}/>;
            })}
        </ul>
    );
};