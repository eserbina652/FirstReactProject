import React, { useEffect, useState } from "react";
import Api from "../../api/api";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { logDOM } from "@testing-library/react";

export default () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const { state } = useLocation(); //не поняла где это вообще используется
  console.log("data", data);
  console.log("page", page);

  const getData = async () => {
    try {
      const response = await Api.getCryproList(page);
      setData((prev) => [...prev, ...response]);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    void getData(); //почему void
  }, [page]);

  console.log("state", state);
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

/*
useLocation - хук с помощью которого можно достать значение с другой страницы
getData - функцция для получения данных с сервера
 */
