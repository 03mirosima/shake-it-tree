import {
  setTreeShake,
  selectAllApples,
  setAppleDown,
  setAppleBasket,
} from "../store/treeSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ShakeButton() {
  const isShaking = useSelector(({ tree }) => tree.treeShake);
  const apples = useSelector(selectAllApples);
  const dispatch = useDispatch();

  /* We generated more than one random number in project so we made a function for easy usage */
  const randomNumberGenerator = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;

  /* We shake the tree for 3 seconds then call handleDown  */
  function handleShake() {
    dispatch(setTreeShake());
    setTimeout(function () {
      dispatch(setTreeShake());
      handleDown();
    }, 3000);
  }
  /* We handled apples falling down with setAppleDown at random times then 
  with setAppleBasket one second after apple down we put the apple in basket */

  function handleDown() {
    for (let item = 0; item < apples.length; item++) {
      // Generates number between 1 and 7
      const second = randomNumberGenerator(1, 8);
      // Generates a boolean value for deciding which apple to fall down
      const randomBoolean = randomNumberGenerator(0, 2) >= 0.5;
      // Generates random left value
      const leftValue = randomNumberGenerator(440, 540);
      dispatch(
        setAppleDown({
          id: item,
          transition: `${second}s`,
          isDropped: randomBoolean,
        })
      );
      console.log(apples, "app");
      setTimeout(function () {
        dispatch(
          setAppleBasket({ id: item, transition: "3s", left: leftValue })
        );
      }, second * 1000 + 1000);
    }
  }
  return (
    <button className="shake-button" onClick={handleShake} disabled={isShaking}>
      {isShaking ? "I'm already shaking!" : "Shake My Apples!"}
    </button>
  );
}
