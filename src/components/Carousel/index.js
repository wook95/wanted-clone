import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { debounce } from 'lodash';
import carouselData from './carouselData';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(
    Math.floor(Math.random() * 9) - 4,
  );
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isAnimated, setIsAnimated] = useState(true);
  const [isMouseMover, setIsMouseOver] = useState(false);
  const DELAY = 4000;

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

  const slideRight = useCallback(() => {
    if (!isAnimated) return;
    const nextSlide = currentSlide + 1;
    setCurrentSlide(nextSlide);

    if (nextSlide >= Math.round(carouselData.length / 2)) {
      setTimeout(() => {
        setIsAnimated(false);
        setCurrentSlide(-Math.round(carouselData.length / 2) + 1);
      }, 300);
    }
  }, [currentSlide, isAnimated]);

  const slideLeft = useCallback(() => {
    if (!isAnimated) return;
    const nextSlide = currentSlide - 1;
    setCurrentSlide(nextSlide);

    if (nextSlide <= Math.round(-carouselData.length / 2) - 1) {
      setTimeout(() => {
        setIsAnimated(false);
        setCurrentSlide(Math.round(carouselData.length / 2) - 1);
      }, 300);
    }
  }, [currentSlide, isAnimated]);

  useEffect(() => {
    const interval = setInterval(slideRight, DELAY);
    if (isMouseMover) return clearInterval(interval);
    return () => clearInterval(interval);
  }, [slideRight, isMouseMover]);

  useEffect(() => {
    if (isAnimated) return;
    const timeId = setTimeout(() => {
      setIsAnimated(true);
    }, 50);
    return () => clearTimeout(timeId);
  }, [isAnimated]);

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
          onMouseOver={() => {
            setIsMouseOver(true);
          }}
          onMouseOut={() => {
            setIsMouseOver(false);
          }}
          style={{
            transition: ` ease-in-out ${isAnimated ? '350ms' : 'none'}`,
            transform: `translateX(${
              -(1060 < windowSize ? 1060 : windowSize * 0.75) * currentSlide
            }px)`,
            width: `${
              newCarouselData.length *
              (1060 < windowSize ? 1060 : windowSize * 0.75)
            }px`,
          }}>
          {newCarouselData.map(item => {
            return (
              <Content width={windowSize} key={item.id}>
                <img
                  src={require(`../../assets/carouselImages/${item.imageUrl}.jpg`)}
                  alt='carousel'
                  style={{
                    filter: `${
                      item.id - 4 === currentSlide
                        ? 'brightness(100%)'
                        : 'brightness(40%)'
                    }`,
                  }}
                />
                <InformCard
                  style={{
                    opacity: `${item.id - 4 === currentSlide ? 1 : 0}`,
                  }}>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                  <CardLink>???????????? &gt; </CardLink>
                </InformCard>
              </Content>
            );
          })}
        </List>
      </Box>
      <LeftButton onClick={debounce(slideLeft, 200)}>
        <LeftArrowImage />
      </LeftButton>
      <RightButton onClick={debounce(slideRight, 200)}>
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
  height: 300px;
  padding: 0 12px;

  img {
    border-radius: 4px;
  }
  @media screen and (max-width: 1060px) {
    width: ${({ width }) => width - 110}px;
  }
`;

const InformCard = styled.div`
  position: relative;
  top: -175px;
  left: 20px;
  width: 330px;
  height: 140px;
  border-radius: 4px;
  background: #fff;
  transition: 800ms;
  @media screen and (max-width: 1060px) {
    display: none;
  }
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
  border-bottom: 1px solid #ddd;
  color: #333;
  font-size: 14px;
  line-height: 1.64;
`;

const LeftButton = styled.button`
  position: absolute;
  top: 140px;
  left: calc((100% - 1180px) / 2);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 60px;
  border: 0;
  border-radius: 15px;
  background-color: #fff;
  opacity: 0.5;
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
