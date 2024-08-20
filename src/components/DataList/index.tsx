import { useEffect, useState } from "react";
import DataListItem from "./components/DataListItem";
import Button from "../Button/Button";
import CategoryAdd from "../Category/CategoryAdd";

function DataList({ value, onClick }) {
  const [dataList, setDataList] = useState([]);
  console.log("데이터리스트", dataList);

  useEffect(() => {
    setDataList(value);
  }, [value]);
  return (
    <div className="dataList-container">
      {dataList.map((item) => (
        <div>
          <DataListItem key={item.id} {...item} onClick={onClick} />
        </div>
      ))}
    </div>
  );
}

export default DataList;
