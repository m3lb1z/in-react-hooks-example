import { useEffect, useState } from "react";

const ExampleUseEffectDos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then(setData)
      .then((data) => console.log("Data fetched: ", data));
  }, []);

  if (data) {
    return (
      <>
        <div>
          <ul>
            {data.map((user) => (
              <li key={user.id}>{user.login}</li>
            ))}
          </ul>
          <button onClick={() => setData([])}>Remove Data</button>
        </div>
      </>
    );
  }
};

export default ExampleUseEffectDos;
