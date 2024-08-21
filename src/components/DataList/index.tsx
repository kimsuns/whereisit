import { useEffect, useState } from "react";
import DataItem from "./components/DataItem";
import "./style.scss";

function DataList({ value, onClick }) {
  const [dataList, setDataList] = useState([]);
  console.log("데이터리스트", dataList);

  const handleClick = (e) => {
    onClick(e.target.value);
  };

  useEffect(() => {
    setDataList(value);
  }, [value]);
  return (
    <div className="dataList">
      {dataList.map((item) => (
        <DataItem
          key={item.id}
          name={item.name}
          {...item}
          onClick={() =>
            handleClick({
              target: {
                name: item.name,
                value: item.id,
              },
            })
          }
        />
      ))}
    </div>
  );
}

export default DataList;
