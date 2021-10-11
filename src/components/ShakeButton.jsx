import { setTreeShake } from "../store/treeSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ShakeButton() {
  const isShaking = useSelector(({ tree }) => tree.treeShake);
  console.log(isShaking, "ss");
  const dispatch = useDispatch();

  function handleShake() {
    dispatch(setTreeShake());
  }
  return (
    <button className="shake-button" onClick={handleShake} disabled={isShaking}>
      {isShaking ? "I'm already shaking!" : "Shake My Apples!"}
    </button>
  );
}
