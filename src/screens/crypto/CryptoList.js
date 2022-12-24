import React, { useEffect, useState } from "react";
import Api from "../../api/api";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default () => {
  const [data, setState] = useState([]);
  const [page, setPage] = useState(1);
  const { state } = useLocation();

  const getData = async () => {
    try {
      const response = await Api.getCryproList(page);
      setState((prev) => [...prev, ...response]);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    void getData();
  }, [page]);

  console.log("data", data);
  const handleNext = () => {
    setPage(page + 1);
  };
  const handlePrev = () => {
    setPage(page - 1);
  };
  return (
    <div>
      <div>
        {data.map((e) => {
          return <p>{e.name}</p>;
        })}
      </div>
      <div>
        <button onClick={handleNext}>Next</button>
        <button onClick={handlePrev}>Prev</button>
      </div>
    </div>
  );
};
