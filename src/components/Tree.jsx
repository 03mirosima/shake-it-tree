import tree from "../images/tree2.svg";
import Apples from "./Apples";
import { useSelector } from "react-redux";
import { selectAllApples } from "../store/treeSlice";
import ShakeButton from "./ShakeButton";
import Basket from "./Basket";

const Tree = () => {
  const apples = useSelector(selectAllApples);
  const isShaking = useSelector(({ tree }) => tree.treeShake);
  return (
    <>
      <ShakeButton />
      <div className="tree-wrapper">
        <img className={` ${isShaking && "tree-image"}`} src={tree} />
        {apples.map((a) => (
          <Apples key={a.id} style={a} />
        ))}
        <Basket />
      </div>
    </>
  );
};
export default Tree;
