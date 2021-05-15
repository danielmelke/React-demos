import React from 'react';
import image from '../img/unknown.jpg';

function Article({data}) {
    let options = { dateStyle: 'full', timeStyle: 'short', timeZone: 'UTC'};
    return (
        <div className="col-md-5 my-3 article-box p-3" onClick={() => {window.open(data.url, '_blank')}} style={{cursor: 'pointer'}}>    
            <img src={(isImgPathCorrect(data.urlToImage))?data.urlToImage:image} alt="" title={data.title} className="img img-fluid article-img img-center my-2" />
            <h4 className="text-justify my-1">{data.title}</h4>
            <p className="text-justify my-3">{(data.description !== null)?data.description:data.content}</p>
            <p className="text-right">
                { (data.author !== null)?data.author + " | ":"" }{ new Date(data.publishedAt).toLocaleString("hu-HU", options) }
            </p>
        </div>
    );
}

let isImgPathCorrect = (url) => {
    if (url.split("//").length - 1 === 1) {
        return true;
    }
    return false;
}

export default Article;
