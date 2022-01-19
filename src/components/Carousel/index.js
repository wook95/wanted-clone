import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { debounce } from 'lodash';
import carouselData from './carouselData';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isAnimated, setIsAnimated] = useState(true);

  let frontArr = [...carouselData].slice(
    Math.round(carouselData.length / 2) - 1,
  );
  frontArr = frontArr.map(
    (el, idx) => (el = { ...el, id: -frontArr.length + idx }),
  );
  let backArr = [...carouselData].slice(0, Math.round(carouselData.length / 2));
  backArr = backArr.map(
    el => (el = { ...el, id: el.id + carouselData.length }),
  );
  const newCarouselData = [...frontArr, ...carouselData, ...backArr];

  const resizeWindow = () => {
    setWindowSize(window.innerWidth);
  };
  // const resizeWindow = debounce(() => {
  //   setWindowSize(window.innerWidth);
  // }, 100);

  // const shiftRight = () => {
  //   setTimeout(,1000)

  //    transition: 1000ms;
  //  transform: translate3d(1060px,0,0);

  useEffect(() => {
    setCurrentSlide(Math.floor(Math.random() * 9));
  }, []);

  useEffect(() => {
    window.addEventListener('resize', resizeWindow);
    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  }, []);

  return (
    <Container>
      <Box>
        <List
          style={{
            transition: '1000ms',
            transform: 'translateX(-1060px)',
            width: `${newCarouselData.length * 1060}px`,
          }}>
          {newCarouselData.map(item => {
            return (
              <Content width={windowSize} key={item.id}>
                <img
                  src={require(`../../assets/carouselImages/${item.imageUrl}.jpg`)}
                  alt='carousel'
                />
                <InformCard>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                  <CardLink>바로가기 > </CardLink>
                </InformCard>
              </Content>
            );
          })}
        </List>
      </Box>
      <LeftButton>
        <LeftArrowImage />
      </LeftButton>
      <RightButton>
        <RightArrowImage />
      </RightButton>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  padding-top: 25px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  width: ${window.innerWidth};
  margin: 0 auto;
  overflow: hidden;
`;
const List = styled.div`
  display: flex;
`;
const Content = styled.div`
  width: 1060px;
  padding: 0 12px;
  @media screen and (max-width: 1060px) {
    width: ${({ width }) => width - 110}px;
  }
  img {
    border-radius: 4px;
  }
`;

const InformCard = styled.div`
  position: relative;
  top: -175px;
  left: 20px;
  width: 330px;
  height: 140px;
  background: #fff;
  border-radius: 4px;
  /* opacity: 0; */
`;

const CardTitle = styled.h2`
  padding: 20px 20px 0px 20px;
  color: #333;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
`;

const CardLink = styled.a`
  display: block;
  padding: 15px 20px;
  color: #36f;
  font-size: 14px;
  font-weight: 500;
`;

const CardDescription = styled.h3`
  padding: 0 20px;
  height: 44px;
  font-size: 14px;
  line-height: 1.64;
  color: #333;
  border-bottom: 1px solid #ddd;
`;

const LeftButton = styled.button`
  position: absolute;
  top: 145px;
  left: calc((100% - 1180px) / 2);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 60px;
  opacity: 0.5;
  border: 0;
  border-radius: 15px;
  background-color: #fff;
`;

const RightButton = styled(LeftButton)`
  left: auto;
  right: calc((100% - 1200px) / 2);
`;

const LeftArrowImage = styled.img.attrs(() => ({
  src: require('../../assets/carouselImages/icon-leftArrow.png'),
}))`
  width: 16px;
  height: 16px;
`;

const RightArrowImage = styled(LeftArrowImage).attrs(() => ({
  src: require('../../assets/carouselImages/icon-rightArrow.png'),
}))``;

export default Carousel;
