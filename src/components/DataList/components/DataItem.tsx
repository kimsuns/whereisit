function DataItem({ id, name, onClick }) {
  console.log("이름", name);
  return (
    <div className={"dataItem"} onClick={onClick}>
      <div className="dataItem-name">{name}</div>
    </div>
  );
}

export default DataItem;
