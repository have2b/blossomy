import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const callApi = async () => {
      const response = await axios.get(
        import.meta.env.VITE_API_URL + "/api/me"
      );
      console.log(response);
    };

    callApi();
  }, []);

  return (
    <section className="flex-row justify-center items-center w-full">
      <h1>Hello World</h1>
    </section>
  );
}

export default App;
