import {
  setTreeShake,
  selectAllApples,
  setAppleDown,
} from "../store/treeSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ShakeButton() {
  const isShaking = useSelector(({ tree }) => tree.treeShake);
  let apples = useSelector(selectAllApples);

  const dispatch = useDispatch();

  function handleShake() {
    dispatch(setTreeShake());
    setTimeout(function () {
      dispatch(setTreeShake());
      handleDown();
    }, 3000);
  }
  function handleDown() {
    for (let item = 0; item <= apples.length; item++) {
      setTimeout(
        () =>
          dispatch(
            setAppleDown({ id: item, transition: `${Math.random() * 10}s` })
          ),
        Math.floor(Math.random() * 1000)
      );
    }
  }
  return (
    <button className="shake-button" onClick={handleShake} disabled={isShaking}>
      {isShaking ? "I'm already shaking!" : "Shake My Apples!"}
    </button>
  );
}
