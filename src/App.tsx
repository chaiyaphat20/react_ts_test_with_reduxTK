import { add, reset } from "./store/slices/countSlice";
import { useAppDispatch, useAppSelector } from "./store/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.countStore);
  return (
    <div>
      count: {count}
      <button onClick={() => dispatch(add())}>add</button>
      <button onClick={() => dispatch(reset(9))}>reset</button>
    </div>
  );
}

export default App;
