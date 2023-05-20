// Create a dummy data before fetching data from OpenWeatherMap API
export const initialWeatherData = {
    coord: {
        lon: 0,
        lat: 0,
    },
    weather: [
        {
            id: 801,
            main: '',
            description: '',
            icon: '',
        },
    ],
    base: '',
    main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0,
    },
    visibility: 0,
    wind: {
        speed: 0,
        deg: 0,
        gust: 0,
    },
    rain: {
        '1h': 0,
    },
    clouds: {
        all: 0,
    },
    dt: 0,
    sys: {
        type: 0,
        id: 0,
        country: '',
        sunrise: 0,
        sunset: 0,
    },
    timezone: 0,
    id: 0,
    name: '',
    cod: 0,
}

export const initialUnsplashImage = [
    'https://images.unsplash.com/photo-1617381519460-d87050ddeb92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDU3Mjd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYXJjaGl0ZWN0dXJlfGVufDB8MHx8fDE2ODM4ODg0NDd8MA&ixlib=rb-4.0.3&q=80&w=1080',
    'L~MR3~%1jYo0~qoJflj[MxRjaya{',
    'Guy Barzilay',
]
