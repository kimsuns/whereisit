import { useContext } from "react";
import { DataContext, DispatchContext } from "../../App";
import DataList from "../../components/DataList";
import CategoryAdd from "../../components/Category/CategoryAdd";
import { useNavigate, useParams } from "react-router-dom";
import "./style.scss";
import Button from "../../components/Button/Button";
// import Modal from "../../components/Modal";
import { useModal } from "../../hooks/useModal";

function Home() {
  const { firstCategory } = useContext(DataContext);
  const { onCreate } = useContext(DispatchContext);
  const nav = useNavigate();
  const { Modal, openModal, closeModal } = useModal();
  console.log("첫번째 카테고리 데이터", firstCategory);

  const CATEGORY = "firstCategory";

  const onClick = (id) => {
    nav(`/space/${id}`);
  };

  const handleButton = (data) => {
    onCreate(CATEGORY, data);

    console.log("추가하자");
  };
  return (
    <div className="homepage">
      <DataList value={firstCategory} onClick={onClick} />
      <Button onClick={openModal}>모달 열자</Button>
      <Modal>
        <Button onClick={closeModal}>닫기</Button>
      </Modal>
      {/* <Modal>
        <CategoryAdd category={CATEGORY} onClick={handleButton} />
      </Modal> */}
    </div>
  );
}

export default Home;
