import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Sparklines, SparklinesLine } from 'react-sparklines'

class WeatherList extends Component {
    renderWeather(cityData) {
        const city = cityData.city.name
        // Mapping over list to pull of the temperatures
        const temperatures = cityData.list.map(weather => weather.main.temp)

        return (
            <tr key={city}>
                <td>{city}</td>
                <td>
                    <Sparklines height={50} width={100} data={temperatures}>
                        <SparklinesLine color='orange' />
                    </Sparklines>
                </td>
            </tr>
        )
    }

    render() {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    return { weather }
}

export default connect(mapStateToProps)(WeatherList)