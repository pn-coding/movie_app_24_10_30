import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDetail } from "../../api";
import styled from "styled-components";
import { mainStyle } from "../../GlobalStyeld";
import Loading from "../../components/Loading";
import { ORIGINAL_URL } from "../../constant/imgUrl";
import PageTitle from "../../components/PageTitle";
import Wrapper from "../../components/Wrapper";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
`;

const Bg = styled.div`
  width: 45%;
  height: 800px;
  background: lightgray;
`;

const TitleWrap = styled.div`
  width: 50%;
  h3 {
    font-size: 70px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  span {
    font-size: 18px;
    font-weight: 300;
  }

  ul {
    list-style: disc;
    margin: 15px 0px 10px 20px;

    li {
      font-size: 18px;
      margin-bottom: 10px;
    }
  }

  p {
    font-size: 18px;
    line-height: 30px;
    margin-top: 50px;
    opacity: 0.7;
    letter-spacing: 0;
  }
`;

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const detailData = await movieDetail(id);
        setData(detailData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitle title={data?.title} />
          {data && (
            <Wrapper>
              <Container>
                <Bg
                  style={{
                    background: `url(${ORIGINAL_URL}${data.poster_path}) no-repeat center / cover`,
                  }}
                />
                <TitleWrap>
                  <h3>{data?.title}</h3>
                  <span>{Math.round(data.vote_average)}점</span> •{" "}
                  <span>{data.runtime}분</span> •{" "}
                  <span>{data.release_date}</span>
                  <ul>
                    {data.genres.map((genre) => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                  </ul>
                  <p>{data.overview}</p>
                </TitleWrap>
              </Container>
            </Wrapper>
          )}
        </>
      )}
    </>
  );
};

export default Detail;
