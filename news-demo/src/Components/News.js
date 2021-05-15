import React,{useContext} from 'react';
import {APIHandler} from '../APIHandler';
import Article from './Article';

function News() {
    const data = useContext(APIHandler).data;
    return (
        <div className="row justify-content-around">
            {(data.articles !== undefined) ? data.articles.map((news) => (
                <Article data={news} key={news.url} />
            ))
            : <h1 className="text-center">Loading</h1>}
        </div>
    );
}

export default News;