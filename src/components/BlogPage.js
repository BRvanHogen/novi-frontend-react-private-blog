import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPage() {
    const { id } = useParams();
    return (
        <h1>dit is de pagina van blog { id }</h1>
    );
}

export default BlogPage;