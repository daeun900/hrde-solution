import React, { useState, useRef, useEffect } from "react";
import styled from 'styled-components';
import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";

const SliderContainer = styled.div`
.wrap {
        overflow: hidden;
        padding: 0;
        position: relative;
        .slide {
            display: flex;
            justify-content: space-between;
            padding: 150px 0 100px 0;
            .txt {
                span {
                    font-size: 24px;
                    line-height: 36px;
                    font-weight: 600;
                    color: #0057ff;
                    display: block;
                }
                strong {
                    font-size: 40px;
                    line-height: 60px;
                }
            }
            .img {
                width: 800px;
                img {
                    width: 100%;
                }
            }
        }
        .btn_wrap {
            position: absolute;
            top: 50%;
            left: 0;
            display: flex;
            align-items: center;
            .dot {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background-color: #d9d9d9;
                margin-right: 5px;
            }
            .dot.active {
                animation: growDot 2s ease-in-out forwards;
                background-color: #0057ff;
                border-radius: 10px;
            }
            @keyframes growDot {
                from {
                    width: 12px;
                }
                to {
                    width: 40px;
                }
            }
            .btn {
                cursor: pointer;
                color: #0057ff;
            }
            .btn.prev {
                margin-right: 15px;
            }
            .btn.next {
                margin-left: 15px;
            }
            .btn.disabled {
                color: #d9d9d9;
            }
        }
    }
`;

function LmsSlider({ slides }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const slidesRef = useRef(null);
    const autoSlideInterval = useRef(null);

    const handleNext = () => {
        setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
    };

    const resetAutoSlide = () => {
        clearInterval(autoSlideInterval.current);
        autoSlideInterval.current = setInterval(() => {
            handleNext();
        }, 3000);
    };

    useEffect(() => {
        autoSlideInterval.current = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(autoSlideInterval.current);
    }, []);

    //마우스 드래그
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
        clearInterval(autoSlideInterval.current); // Stop auto slide on interaction
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - startX;
        if (deltaX > 50 && currentSlide > 0) {
            handlePrev();
            setIsDragging(false);
        } else if (deltaX < -50 && currentSlide < slides.length - 1) {
            handleNext();
            setIsDragging(false);
        }
    };

    //터치 드래그
    const handleMouseUp = () => {
        setIsDragging(false);
        resetAutoSlide(); // Resume auto slide after interaction
    };

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
        clearInterval(autoSlideInterval.current); // Stop auto slide on interaction
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const deltaX = e.touches[0].clientX - startX;
        if (deltaX > 50 && currentSlide > 0) {
            handlePrev();
            setIsDragging(false);
        } else if (deltaX < -50 && currentSlide < slides.length - 1) {
            handleNext();
            setIsDragging(false);
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        resetAutoSlide(); // Resume auto slide after interaction
    };

    return (
        <SliderContainer>
            <div className="wrap">
                <div
                    className="slides-container"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                        transition: isDragging ? "none" : "transform 0.5s ease-in-out",
                        display: "flex",
                    }}
                    ref={slidesRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {slides.map((slide, index) => (
                        <div className="slide" key={index} style={{ minWidth: "100%" }}>
                            <div className="txt">{slide.txt}</div>
                            <div className="img">
                                <img src={slide.img} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="btn_wrap">
                    <div className={`btn prev ${currentSlide === 0 ? "disabled" : ""}`} onClick={() => { handlePrev(); resetAutoSlide(); }}>
                        <ArrowCircleLeft size={44} weight="thin" />
                    </div>
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`dot ${index === currentSlide ? "active" : ""}`}
                            onClick={() => { setCurrentSlide(index); resetAutoSlide(); }}
                        ></div>
                    ))}
                    <div className={`btn next ${currentSlide === slides.length - 1 ? "disabled" : ""}`} onClick={() => { handleNext(); resetAutoSlide(); }}>
                        <ArrowCircleRight size={44} weight="thin" />
                    </div>
                </div>
            </div>
        </SliderContainer>
    );
}

export default LmsSlider;
