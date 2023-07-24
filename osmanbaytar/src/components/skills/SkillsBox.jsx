import { PolarArea } from "react-chartjs-2";
import Chart from "chart.js/auto";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  ArcElement,
  LinearScale,
  Colors,
} from "chart.js";
import {
  SkillsBoxItem,
  SkillsBoxItemList,
  SkillsBoxItemTitle,
  SkillsBoxItemName,
  SkillsBoxItemLevel,
} from "../../styles/skills/SkillsViewStyle";

const SkillsBox = ({ dataBox, title }) => {
  function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
  }

  ChartJS.register(ArcElement, Tooltip, Legend, LinearScale, Colors);

  const data = {
    labels: dataBox.skills.map((item) => item.name),
    datasets: [
      {
        data: dataBox.skills.map((item) => item.level),
        backgroundColor: dataBox.skills.map((item) => randomColor()),
        hoverBorderColor: randomColor(),
        hoverBorderWidth: 5,
        hoverOffset: 40,
      },
    ],
  };

  const options = {
    responsive: true,
    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
    plugins: [
      {
        id: "myEventCatcher",
        beforeEvent(args) {
          const event = args.event;
          if (event.type === "mouseout") {
          }
        },
      },
    ],
    scales: {
      r: {
        grid: {
          color: "grey",
        },
      },
    },
    layout: {
      padding: {
        left: 40,
        right: 40,
        top: 0,
        bottom: 0,
      },
    },
  };
  Chart.defaults.font.size = 14;

  return (
    <SkillsBoxItem className="mb-5">
      <div>
        <h3 className="text-center mt-3">{dataBox.title}</h3>
      </div>
      <div>
        <PolarArea className="my-3" data={data} options={options} />
      </div>
      <SkillsBoxItemTitle>{title}</SkillsBoxItemTitle>
      <SkillsBoxItemList>
        {dataBox.skills.map((item, index) => (
          <li key={index}>
            <SkillsBoxItemName>{item.name}:</SkillsBoxItemName>
            <SkillsBoxItemLevel>{item.level}</SkillsBoxItemLevel>
          </li>
        ))}
      </SkillsBoxItemList>
    </SkillsBoxItem>
  );
};

export default SkillsBox;
