import { useState, useEffect } from "react";

function Details({ info }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`
    )
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
        setLoading(false);
      });
  }, [info.id]);

  if (loading) {
    return <div>Идет загрузка...</div>;
  }

  return (
    <div className="user-details">
      <img src={details.avatar} alt={details.name} />
      <h2>{details.name}</h2>
      <h5>City: {details.details.city}</h5>
      <h5>Company: {details.details.company}</h5>
      <h5>Position: {details.details.position}</h5>
    </div>
  );
}

export default Details;
