import "./App.css";
import ContentContainer from "./components/ContentContainer";
import CardComponent from "./components/CardComponent";

function App() {
  const img_file = ["cat1", "cat2"];
  return (
    <div className="App">
      <ContentContainer>
        <CardComponent img_file={img_file[0]} />
        <CardComponent img_file={img_file[1]} />
      </ContentContainer>
    </div>
  );
}

export default App;
