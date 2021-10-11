import tree from "../images/tree2.svg";
import Apples from "./Apples";
import { useSelector } from "react-redux";
import { selectAllApples } from "../store/treeSlice";
import ShakeButton from "./ShakeButton";

const Tree = () => {
  const apples = useSelector(selectAllApples);
  console.log(apples);
  return (
    <>
      <ShakeButton />
      <div className="tree-wrapper">
        <img src={tree} />
        {apples.map((a) => (
          <Apples key={a.id} style={a} />
        ))}
      </div>
    </>
  );
};
export default Tree;
