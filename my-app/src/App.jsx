import GreetingCard from "./components/GreetingCard";
import Book from "./components/Book";

function App() {
  return (
        <div>
          <GreetingCard name="Milena" />
          <Book name="Хрупкое равновесие" author="Анна Шерри" genre="роман" year="2020" pages="320" />
        </div>
  );
}

export default App;
