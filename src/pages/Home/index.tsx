import { useContext } from "react";
import { DataContext } from "../../App";
import DataList from "../../components/DataList";
import CategoryAdd from "../../components/Category/CategoryAdd";

function Home() {
  const { firstCategory } = useContext(DataContext);
  console.log("데이터", firstCategory);

  const onClick = () => {
    console.log("클릭했다");
  };
  return (
    <>
      <DataList value={firstCategory} onClick={onClick} />
      <CategoryAdd category={"firstCategory"} />
    </>
  );
}

export default Home;
