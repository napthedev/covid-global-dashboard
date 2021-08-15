import { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";

import StatusBox from "./components/StatusBox";
import Navbar from "./components/Navbar";
import CountryRow from "./components/CountryRow";

function App() {
  const [loading, setLoading] = useState(true);

  const [status, setStatus] = useState({});
  const [countries, setCountries] = useState([]);
  const [timeline, setTimeline] = useState([]);

  useEffect(async () => {
    await fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStatus(data.Global);
        setCountries(data.Countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed));
      })
      .catch((err) => {
        console.log(err);
      });

    await fetch("https://api.covid19api.com/world")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTimeline(data.sort((a, b) => new Date(a.Date) - new Date(b.Date)));
      })
      .catch((err) => {
        console.log(err);
      });

    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div style={{ display: "flex", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" }}>
          <CircularProgress />
        </div>
      ) : (
        <>
          <Navbar updated={status.Date} />
          <div className="status-grid">
            <StatusBox title="Total" value={status.TotalConfirmed} textColor="orange" />
            <StatusBox title="Death" value={status.TotalDeaths} textColor="red" />
            <StatusBox title="Recovered" value={status.TotalRecovered} textColor="#00FF00" />
            <StatusBox title="New Cases" value={status.NewConfirmed} textColor="yellow" />
            <StatusBox title="New Death" value={status.NewDeaths} textColor="orangered" />
            <StatusBox title="Countries" value={countries.length} textColor="blue" />
          </div>
          <div className="countries-container">
            {countries.map((e) => (
              <CountryRow key={e.Country} name={e.Country} value={e.TotalConfirmed} percentage={Math.ceil((e.TotalConfirmed / countries[0].TotalConfirmed) * 100)} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default App;
