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
        <div className="col-md-5 col-xl-3 coin-container py-1 my-2 mx-1">
            <h4>{data.name}({data.symbol.toUpperCase()})</h4>
            <img src={data.image} alt={data.name} title={data.name} className="img img-fluid coin-img my-1"></img>
            <div className="row">
                <div className="col-12 my-1 text-center">Current price:</div>
                <div className="col-12 my-1 text-center">{data.current_price.toLocaleString()} {curr}</div>
                <div className="col-12 my-1 text-center">Current market cap:</div>
                <div className="col-12 my-1 text-center">{data.market_cap.toLocaleString()} {curr}</div>
            </div>
        </div>
    )
}

export default Coin
