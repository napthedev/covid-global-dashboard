import { Line } from "react-chartjs-2";

function Chart(props) {
  const { color, name, labels, data } = props;

  return (
    <div style={{ flex: 1 }}>
      <Line
        options={{
          responsive: true,
        }}
        style={{ maxWidth: "100%" }}
        type="line"
        data={{
          labels: labels.map((e) => `${new Date(e).toLocaleDateString("default", { month: "short" })} ${new Date(e).getDate()}`),
          datasets: [
            {
              label: name,
              data: data,
              fill: false,
              pointRadius: 1,
              backgroundColor: color,
              borderColor: color,
            },
          ],
        }}
      />
    </div>
  );
}

export default Chart;
