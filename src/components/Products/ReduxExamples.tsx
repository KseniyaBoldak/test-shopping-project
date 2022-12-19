import { useDispatch, useSelector } from "react-redux";

const ReduxExamples = () => {
    const dispatch = useDispatch();
    const store = useSelector(
        (store: { counter: { value: number } }) => store.counter,
  );
  return (
    <div>
      <h3>Like photos</h3>
      <h2>{store.value}</h2>
      <button onClick={() => dispatch({ type: "counter/incremented" })}>
        Like
      </button>
      <button onClick={() => dispatch({ type: "counter/decremented" })}>
        Dislike
      </button>
    </div>
  );
}
export default ReduxExamples;