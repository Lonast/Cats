import { useEffect } from "react";
import "./App.css";
import { useAppDispath, useAppSelector } from "./hooks/hookTypes";
import { fetchCats } from "./features/catSlice";

function App() {
  const dispatch = useAppDispath();
  const selector = useAppSelector((state) => state.catSl);
  useEffect(() => {
    dispatch(fetchCats());
  }, []);
  console.log(selector);

  return (
    <div>
      {selector.map((cat) => {
        return <p key={cat._id}>{cat._id}</p>;
      })}
    </div>
  );
}

export default App;
