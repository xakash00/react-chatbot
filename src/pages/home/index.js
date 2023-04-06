import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGifsAction } from "../../redux/actions/gifAction";
import { UPDATE_OFFSET } from "../../redux/actions/types";
import styled from "styled-components";
import { useRef } from "react";
import { Spinner } from "react-bootstrap";
const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.gifsReducer);
  const ref = useRef();
  const [offset, setOffset] = useState(5);
  useEffect(() => {
    dispatch(getGifsAction(offset));
  }, [offset]);

  const loadMore = () => {
    setOffset((p) => p + 5);
    setTimeout(() => {
      dispatch({ type: UPDATE_OFFSET, offset: offset });
    }, 300);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // console.log(entry);

        if (entry.isIntersecting) {
          //do your actions here
          // console.log('It works!')
          loadMore()
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {data.giphs.map((g, i) => {
            return (
              <div className="col-md-3">
                <Gif key={i}>
                  <div>
                    <img
                      className="card-img"
                      src={g.images.downsized.url}
                      alt={g.title}
                    />
                  </div>
                </Gif>
              </div>
            );
          })}
        </div>
        <Margin />
        <Margin />
        <Button
          ref={ref}
          onClick={loadMore}
          disabled={data.loading}
          className="mb-5"
        >
         {data.loading === true ? (
          <span>
            <span className="me-3">Loading</span>
            <Spinner animation="border" size="sm" color="#ccc" />
          </span>
        ):"Load more..."}
        </Button>
      </div>
    </div>
  );
};

export default Home;

const Button = styled.button`
  border: none;
  background: none;
  width: 100%;
`;
export const Gif = styled.div`
  width: 20rem;
  border-radius: 8px;
  margin-bottom: 10px;
`;
export const Margin = styled.div`
  height: 3rem;
`;
