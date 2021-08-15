function StatusBox(props) {
  const { title, value, textColor } = props;

  return (
    <div className="status-box">
      <p className="title">{title}</p>
      <p className="value" style={{ color: textColor }}>
        {value ? Number(value).toLocaleString() : "Unknown"}
      </p>
    </div>
  );
}

export default StatusBox;
