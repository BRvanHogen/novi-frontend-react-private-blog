import React from 'react';
import { Link } from 'react-router-dom';
// import posts from './data/posts.json';



function BlogOverview() {


    return (
        <>
        <h1>dit is de pagina met alle blogs</h1>
        <p>ga<Link to="/:id"> hier </Link>naar de pagina van een blog </p>
        </>
    );
}

export default BlogOverview;

// Geef alle blogpost-titels weer in de overzichtpagina en zorg ervoor dat de titels
// klikbaar zijn en naar die blogpost wijzen.

//De import van de posts in dit compoment levert een foutmelding op: module not found.