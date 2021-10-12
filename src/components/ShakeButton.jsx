import {
  setTreeShake,
  selectAllApples,
  setAppleDown,
  setAppleBasket,
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
    for (let item = 0; item < apples.length; item++) {
      // Generates number between 1 and 10
      const second = Math.floor(Math.random() * 10 + 1);
      // Generates a boolean value for deciding which apple to fall down
      const randomBoolean = Math.random() >= 0.5;

      dispatch(
        setAppleDown({
          id: item,
          transition: `${second}s`,
          isDropped: randomBoolean,
        })
      );
      setTimeout(function () {
        dispatch(setAppleBasket({ id: item, transition: "3s" }));
      }, second * 1000);
    }
  }
  return (
    <button className="shake-button" onClick={handleShake} disabled={isShaking}>
      {isShaking ? "I'm already shaking!" : "Shake My Apples!"}
    </button>
  );
}
