import React, { useEffect, useState } from "react"
import { AiOutlineLeft } from "react-icons/ai"
import { AiOutlineRight } from "react-icons/ai"
import Image from "gatsby-image"
import { useCategories } from "../../context/categoriesContext"

export const CategoriesGallery = () => {
  const [categories] = useCategories()

  const [sliderState, setSliderState] = useState({
    translate: 0,
    activeSlideIndex: 0,
    transitionSpeed: 0.3,
    width: 0,
  })

  useEffect(() => {
    setSliderState(state => ({
      ...state,
      width: window.innerWidth,
    }))

    setInterval(() => {
      nextSlide()
    }, 10000)
  }, [])

  const nextSlide = () => {
    if (sliderState.activeSlideIndex === categories.length - 1) {
      setSliderState(state => ({
        ...state,
        activeSlideIndex: 0,
        translate: 0,
        transitionSpeed: 0,
      }))
    } else {
      setSliderState(state => ({
        ...state,
        activeSlideIndex: state.activeSlideIndex + 1,
        translate: (state.activeSlideIndex + 1) * sliderState.width,
        transitionSpeed: 0.3,
      }))
    }
  }

  const previousSlide = () => {
    if (sliderState.activeSlideIndex === 0) {
      setSliderState(state => ({
        ...state,
        activeSlideIndex: categories.length - 1,
        translate: (categories.length - 1) * sliderState.width,
        transitionSpeed: 0,
      }))
    } else {
      setSliderState(state => ({
        ...state,
        activeSlideIndex: state.activeSlideIndex - 1,
        translate: (state.activeSlideIndex - 1) * sliderState.width,
        transitionSpeed: 0.3,
      }))
    }
  }

  return (
    <header className="categories-gallery">
      <div
        className="categories-gallery__container"
        style={{
          transform: `translateX(-${sliderState.translate}px)`,
          width: `${100 * categories.length}%`,
          transition: `all ${sliderState.transitionSpeed}s`,
        }}
      >
        {categories.map(category => (
          <div
            key={category.id}
            className="slide"
            style={{
              width: `${100 / categories.length}%`,
            }}
          >
            <Image
              className="slide-img"
              fluid={category.categoryImage.childImageSharp.fluid}
            />
            <div className="slide-text">
              <h3>{category.name}</h3>
              <h4>{category.description}</h4>
            </div>
          </div>
        ))}
      </div>
      <div
        className="categories-gallery__prev-btn"
        role="button"
        onClick={() => previousSlide()}
      >
        <AiOutlineLeft />
      </div>
      <div
        className="categories-gallery__next-btn"
        role="button"
        onClick={() => nextSlide()}
      >
        <AiOutlineRight />
      </div>
    </header>
  )
}
