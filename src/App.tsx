import Message from "./Message";
import ListGroup from "./components/ListGroup";

export function Welcome() {
  return (
    <div>
      <Message></Message>
    </div>
  );
}
function App() {
  return (
    <div>
      <ListGroup></ListGroup>
    </div>
  );
}

export default App;
