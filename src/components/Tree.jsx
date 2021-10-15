import tree from "../images/tree2.svg";
import Apples from "./Apples";
import { useSelector } from "react-redux";
import { selectAllApples } from "../store/treeSlice";
import ShakeButton from "./ShakeButton";
import Basket from "./Basket";

const Tree = () => {
  const apples = useSelector(selectAllApples);
  const isShaking = useSelector(({ tree }) => tree.treeShake);
  const dropControl = apples.filter((apple) => {
    return apple.onBasket;
  });
  const filteredApples = apples.filter((col) => {
    if (col.isDropped === false) {
      return col;
    }
    return col;
  });

  return (
    <>
      <ShakeButton />
      <div className="tree-wrapper">
        <img className={` ${isShaking && "tree-shaking"}`} src={tree} />
        {/* We map the apples for showing them on the tree then control if tree has any apples*/}
        {dropControl.length === 9 ? (
          <h5>Üzgünüm daha elma kalmadı :(</h5>
        ) : (
          filteredApples.map((a) => (
            <Apples
              key={a.id}
              style={a}
              className={` ${
                isShaking && a.isDropped === false ? "apple-shaking" : ""
              }`}
            />
          ))
        )}
      </div>
      <Basket />
    </>
  );
};
export default Tree;
