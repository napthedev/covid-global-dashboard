function Navbar(props) {
  const { updated } = props;

  const calculateCreatedTime = (timeCreated) => {
    let periods = {
      year: 365 * 30 * 24 * 60 * 60 * 1000,
      month: 30 * 24 * 60 * 60 * 1000,
      week: 7 * 24 * 60 * 60 * 1000,
      day: 24 * 60 * 60 * 1000,
      hour: 60 * 60 * 1000,
      minute: 60 * 1000,
    };
    let diff = Date.now() - timeCreated;

    for (const key in periods) {
      if (diff >= periods[key]) {
        let result = Math.floor(diff / periods[key]);
        return result + " " + (result === 1 ? key : key + "s") + " ago";
      }
    }

    return "Just now";
  };

  return (
    <div className="navbar">
      <div className="navbar-title">
        <p>Covid-19 Global Status</p>
        <p>(Updated {calculateCreatedTime(new Date(updated))})</p>
      </div>

      <a href="https://github.com/NAPTheDev/covid-global-dashboard.git" target="_blank" rel="noopener noreferrer">
        Github
      </a>
    </div>
  );
}

export default Navbar;
