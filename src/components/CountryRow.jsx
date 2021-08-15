function CountryRow(props) {
  const { name, value, percentage } = props;

  return (
    <div className="country-row">
      <p className="country-row-name">{name}</p>
      <p className="country-row-value">{Number(value).toLocaleString()}</p>
      <div style={{ flexGrow: 1 }}>
        <div className="country-row-percentage" style={{ width: percentage + "%" }}></div>
      </div>
    </div>
  );
}

export default CountryRow;
