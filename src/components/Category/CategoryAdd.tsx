import { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";

function CategoryAdd({ caategory, onClick }) {
  const [data, setData] = useState({
    name: "",
  });

  const ref = useRef();

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickButton = () => {
    if (data.name.length) {
      onClick(data);
      setData({
        name: "",
      });
    } else {
      ref.current.focus();
    }
  };

  return (
    <>
      <input name="name" value={data.name} onChange={handleInput} ref={ref} />
      <Button onClick={handleClickButton}>+</Button>
    </>
  );
}

export default CategoryAdd;
