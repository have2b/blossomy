import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [greeting, setGreeting] = useState("");
  const callApi = async () => {
    const response = await axios.get(import.meta.env.VITE_API_URL + "/api/me");
    if (response.data.success) {
      setLoading(false);
      setGreeting(response.data.message);
    } else {
      setLoading(false);
      setGreeting("Error");
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  if (loading) {
    return (
      <section className="flex-row justify-center items-center w-full">
        <h1>Loading</h1>
      </section>
    );
  } else {
    return (
      <section className="flex-row justify-center items-center w-full">
        <h1>{greeting}</h1>
      </section>
    );
  }
}

export default App;
