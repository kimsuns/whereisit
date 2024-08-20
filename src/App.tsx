import { createContext, useEffect, useReducer, useRef, useState } from "react";
import "./App.css";
import MyRoutes from "./routes/Routes";
import reducer from "./reducer";

export const DataContext = createContext();
export const DispatchContext = createContext();

const testData = [
  {
    id: 1,
    name: "냠",
    color: "white",
  },
  {
    id: 2,
    name: "냠2",
    color: "red",
  },
  {
    id: 2,
    name: "냠3",
    color: "yellow",
  },
];

function App() {
  const [data, dataDispatch] = useReducer(reducer, {
    firstCategory: testData,
    secondCategory: [],
    items: [],
  });

  const idRef = useRef({
    firstCategory: 1,
    secondCategory: 1,
    items: 1,
  });

  useEffect(() => {
    const list = ["firstCategory", "secondCategory", "items"];

    list.map((item) => {
      const localData = localStorage.getItem(item);

      if (!Array.isArray(localData)) {
        return;
      }

      dataDispatch({
        type: "INIT",
        data: localData,
        category: item,
      });
    });

    console.log("데이터init", data);
  }, []);

  // 아이템 생성
  const onCreate = (category, data) => {
    dataDispatch({
      type: "CREATE",
      data: {
        id: idRef.current[category]++,
        ...data,
      },
      category,
    });
  };

  // 아이템 수정
  const onUpdate = (category, data) => {
    dataDispatch({
      type: "UPDATE",
      data,
      category,
    });
  };

  // 아이템 삭제
  const onDelete = (category, data) => {
    dataDispatch({
      type: "DELETE",
      data,
      category,
    });
  };

  return (
    <>
      <DataContext.Provider
        value={{
          firstCategory: data.firstCategory,
          secondCategory: data.secondCategory,
          items: data.items,
        }}
      >
        <DispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <div>
            <MyRoutes />

            <button
              onClick={() => onCreate("firstCategory", { name: "추가했지롱" })}
            >
              아이템 추가
            </button>
            <button
              onClick={() =>
                onUpdate("firstCategory", { id: 1, name: "냠수정했지롱" })
              }
            >
              아이템 수정
            </button>
            <button onClick={() => onDelete("firstCategory", { id: 1 })}>
              아이템 삭제
            </button>
          </div>
        </DispatchContext.Provider>
      </DataContext.Provider>
    </>
  );
}

export default App;
