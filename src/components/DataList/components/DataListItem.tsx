function DataListItem({ id, name, onClick }) {
  console.log("이름", name);
  return (
    <div className={`listItem-container`} onClick={onClick}>
      <div className="listItem-name">{name}</div>
    </div>
  );
}

export default DataListItem;
