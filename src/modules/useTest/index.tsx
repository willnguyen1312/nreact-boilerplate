import React, { useCallback, useEffect, useState } from 'react';
import { request } from 'service/api';

const UseTest = () => {
  const [data, setData] = useState();

  useEffect(() => {
    // tslint:disable-next-line: no-shadowed-variable
    const fetchData = async data => {
      const newData = await request({ data } as any);
      if (data === 123) {
        setData(data);
      } else {
        setData(newData);
      }
    };
    fetchData(data);
  }, [data]);
  return (
    <div>
      data ? <h1 data-testid="hello">Test {data}</h1> : <h1>Loading...</h1>;
      <button
        onClick={useCallback(() => setData(123), [])}
        data-testid="request"
      >
        Click me
      </button>
    </div>
  );
};

export default UseTest;
