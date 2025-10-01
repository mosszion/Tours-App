import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => {
      return tour.id !== id;

    })
    setTours(newTours);
  }

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((tours) => setTours(tours))
      .then(() => setLoading(false))
      .catch((error) => console.log(error));
  }, []);
  
  console.log(tours);
  if (loading) {
    return <main>
      <Loading />
    </main>
  }

  if (tours.length === 0 ) {
    return <main>
      <div className="title">
        <h2>no tours left</h2>
        <button className="btn" onClick={() => fetch(url)}>
          refresh
        </button>
      </div>
    </main>
  }
  return <main>

    <Tours tours={tours} removeTour={removeTour}/>
    </main>;
};
export default App;
