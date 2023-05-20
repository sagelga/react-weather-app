import React, { useState } from 'react'
import { Blurhash } from 'react-blurhash'

const TemperatureBody = (props) => {
    const [isSplashLoaded, setIsSplashLoaded] = useState(false)

    // Open Weather
    const weatherLocation = props.weatherData.name
    const weatherTemperature = props.weatherData.main.temp
    const weatherCondition = props.weatherData.weather[0].description
    const weatherFeelsLike = props.weatherData.main.feels_like
    const weatherHumidity = props.weatherData.main.humidity
    const weatherMetric = props.weatherMetric === 'metric' ? 'C°' : 'F°'
    // Unsplash
    const unsplashImage = props.unsplashImage[0]
    const unsplashImageHash = props.unsplashImage[1]
    const unsplashCredits = props.unsplashImage[2]

    // for loading blurhash to be placeholder when the image from Unsplash is not loaded yet
    function handleImageLoad() {
        setIsSplashLoaded(true)
    }

    return (
        <div className="container">
            <div className="paper-container">
                <h2 className="city">Currently in {weatherLocation}, it's</h2>
                <h1 className="current">
                    {weatherTemperature} {weatherMetric} with {weatherCondition}
                </h1>
                <h2>
                    Feels like {weatherFeelsLike} {weatherMetric} with{' '}
                    {weatherHumidity}% humidity
                </h2>
            </div>
            <figure>
                {/* Load BlurHash when the splash have not loaded yet */}
                {!isSplashLoaded && (
                    <Blurhash
                        className="weather-image"
                        hash={unsplashImageHash}
                        style={{ width: '100vw' }}
                        height={400}
                    />
                )}
                <img
                    src={unsplashImage}
                    alt="city landscapes created by Unsplash user"
                    className="weather-image"
                    loading="lazy"
                    style={{ display: isSplashLoaded ? 'block' : 'none' }}
                    height="400px"
                    onLoad={handleImageLoad}
                />
                <figcaption className="image-credit">
                    Photo by {unsplashCredits} on Unsplash
                </figcaption>
            </figure>
        </div>
    )
}
export default TemperatureBody
