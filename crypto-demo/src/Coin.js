import React from 'react'

function Coin({data, lang}) {
    let curr = '';
    switch (lang) {
        case 'huf':
            curr = 'Ft'
            break;
        case 'eur':
            curr = '€'
            break;
        case 'usd':
            curr = '$'
            break;
        default:
            break;
    }

    return (
        <div className="col-md-4 coin-container py-3 my-3">
            <h1 className="coin-name">{data.name}({data.symbol.toUpperCase()})</h1>
            <img src={data.image} alt={data.name} title={data.name} className="img img-fluid coin-img my-1"></img>
            <p className="coin-data">Current price: {data.current_price.toLocaleString()} {curr}</p>
            <p className="coin-data">Current market cap: {data.market_cap.toLocaleString()} {curr}</p>
        </div>
    )
}

export default Coin
