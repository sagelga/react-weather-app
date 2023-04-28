function TemperatureBody(props) {
  return (
    <div className="temperature-body">
      <h1 class="city">in {props.location}, it's</h1>
      <h2 class="current-temp">40 C°, Partially Cloudy</h2>
      <h2 class="feelsLike-temp">Feels like 40 C°</h2>
    </div>
  )
}
export default TemperatureBody
