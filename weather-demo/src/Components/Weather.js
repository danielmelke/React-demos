import React from 'react';

function Weather({data, city}) {
    var honapok = ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'];
    var napok = ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'];
    return (
        <div className="container-fill weather-container">
            <h3 className="text-center my-3">Aktuális időjárás itt: {city}</h3>
            <div className="current-weather my-3">
                <div className="row justify-content-between my-3">
                    <div className="col-md-4"><h4 className="text-center">{data.current.weather[0].description[0].toUpperCase() + data.current.weather[0].description.substring(1)}</h4></div>
                    <div className="col-md-4"><h4 className="text-center"><img src={"http://openweathermap.org/img/wn/" + data.current.weather[0].icon + ".png"} alt={data.current.weather[0].description} title={data.current.weather[0].description} className="img rounded-circle weather-icon" /></h4></div>
                    <div className="col-md-4"><h4 className="text-center">{Math.round(data.current.temp - 273.15)} °C</h4></div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <table className="table table-striped table-dark table-borderless current-table">
                            <tbody>
                                <tr>
                                    <td className="align-middle">
                                        Real feel
                                    </td>
                                    <td className="align-middle">
                                        {Math.round(data.current.feels_like - 273.15)} °C
                                    </td>
                                    <td className="align-middle">
                                        Nyomás
                                    </td>
                                    <td className="align-middle">
                                        {data.current.pressure} hPa
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align-middle">
                                        UV érték
                                    </td>
                                    <td className="align-middle">
                                        {data.current.uvi}
                                    </td>
                                    <td className="align-middle">
                                        Felhős
                                    </td>
                                    <td className="align-middle">
                                        {data.current.clouds} %
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align-middle">
                                        Páratartalom
                                    </td>
                                    <td className="align-middle">
                                        {data.current.humidity} %
                                    </td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-6">
                        <table className="table table-striped table-dark table-borderless current-table">
                            <tbody>
                                <tr>
                                    <td colSpan="2" className="align-middle">
                                        {data.current.weather[0].description[0].toUpperCase() + data.current.weather[0].description.substring(1)}
                                    </td>
                                    <td colSpan="2" className="align-middle">
                                        <img src={"http://openweathermap.org/img/wn/" + data.current.weather[0].icon + ".png"} alt={data.current.weather[0].description} title={data.current.weather[0].description} className="img rounded-circle weather-icon" />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="align-middle">
                                        Látótávolság
                                    </td>
                                    <td colSpan="2" className="align-middle">
                                        {data.current.visibility} m
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="forecast my-5">
                <h3 className="text-center">Előrejelzés</h3>
                <table className="table table-striped table-dark table-borderless forecast-table">
                    <thead>
                        <tr>
                            <th>
                                Nap
                            </th>
                            <th></th>
                            <th></th>
                            <th className="text-center">Napi maximum</th>
                            <th className="text-center">Napi minimum</th>
                            <th className="text-center">Felhők</th>
                            <th className="text-center">Eső mennyiség</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.daily.map((nap) => {
                        var ido = new Date(nap.dt * 1000);
                        var honap = honapok[ido.getMonth()];
                        var napSzam = (ido.getDate().length > 1)?"0"+ido.getDate():ido.getDate();
                        var napNev = napok[ido.getDay()];
                        return (
                            <tr key={nap.dt}>
                                <td className="align-middle">
                                    {honap + " " + napSzam + ". " + napNev}
                                </td>
                                <td className="text-center align-middle">
                                    {nap.weather[0].description}
                                </td>
                                <td className="text-center align-middle">
                                    <img src={"http://openweathermap.org/img/wn/" + nap.weather[0].icon + ".png"} alt={nap.weather[0].description} title={nap.weather[0].description} className="img rounded-circle" />
                                </td>
                                <td className="text-center align-middle">
                                    {Math.round(nap.temp.max - 273.15)} °C
                                </td>
                                <td className="text-center align-middle">
                                    {Math.round(nap.temp.min - 273.15)} °C
                                </td>
                                <td className="text-center align-middle">
                                    {nap.clouds} %
                                </td>
                                <td className="text-center align-middle">
                                    {(nap.rain !== undefined)?nap.rain:"0"} mm
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Weather;
