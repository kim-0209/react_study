import { useParams, useNavigate, replace } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import useDiary from "../hooks/useDiary";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();

  const curDiaryItem = useDiary(params.id);
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  const onClickDelete = () => {
    if (window.confirm("일기를 삭제할까요?")) {
      // 일기 삭제
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("일기 수정할까요")) {
      onUpdate(
        params.id,
        input.createDate.getTime(),
        input.emotionId,
        input.content
      );
      nav("/", { replace: true });
    }
  };
  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button text={"< 뒤로가기"} onClick={() => nav(-1)} />}
        rightChild={
          <Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClickDelete} />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
