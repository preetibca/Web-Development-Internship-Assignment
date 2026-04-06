import { useEffect, useState } from "react";

const Header = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    fetch("https://worldtimeapi.org/api/timezone/Etc/UTC")
      .then(res => res.json())
      .then(data => setDate(data.datetime.slice(0, 10)))
      .catch(() => setDate(new Date().toLocaleDateString()));
  }, []);

  return <h1 style={{ textAlign: "center" }}>Task Manager - {date}</h1>;
};

export default Header;