import React from 'react';

function Article({data}) {
    let options = { dateStyle: 'full', timeStyle: 'short', timeZone: 'UTC'};
    return (
        <div className="col-md-6 my-2 article-box p-3" onClick={() => {window.location.href=data.url}} style={{cursor: 'pointer'}}>    
            <img src={data.urlToImage} alt="" title={data.title} className="img img-fluid article-img img-center my-2" />
            <h4 className="text-justify my-1">{data.title}</h4>
            <p className="text-justify my-3">{(data.description !== null)?data.description:data.content}</p>
            <p className="text-right">
                { data.author } | { new Date(data.publishedAt).toLocaleString("hu-HU", options) }
            </p>
        </div>
    );
}

export default Article;
