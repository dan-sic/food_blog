import React, { useLayoutEffect, useState } from "react"
import { AiOutlineLeft } from "react-icons/ai"
import { AiOutlineRight } from "react-icons/ai"
import Image from "gatsby-image"
import { useCategories } from "../../context/categoriesContext"
import { Link } from "gatsby"
import { StaticRoutes } from "../../utils/constants/routes"
import { useInterval } from "./hooks/useInterval"

export const CategoriesGallery = () => {
  const [categories] = useCategories()

  const [sliderState, setSliderState] = useState({
    translate: 0,
    activeSlideIndex: 0,
    transitionSpeed: 0.3,
    width: 0,
  })

  useLayoutEffect(() => {
    setSliderState(state => ({
      ...state,
      width: window.innerWidth,
    }))
  }, [])

  useInterval(() => {
    nextSlide()
  }, 10000)

  const nextSlide = () => {
    setSliderState(state => {
      if (state.activeSlideIndex === categories.length - 1) {
        return {
          ...state,
          activeSlideIndex: 0,
          translate: 0,
          transitionSpeed: 0,
        }
      } else {
        return {
          ...state,
          activeSlideIndex: state.activeSlideIndex + 1,
          translate: (state.activeSlideIndex + 1) * sliderState.width,
          transitionSpeed: 0.3,
        }
      }
    })
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
            key={category.strapiId}
            className="slide"
            style={{
              width: `${100 / categories.length}%`,
            }}
          >
            <Image
              className="slide-img"
              fluid={category.categoryImage.childImageSharp.fluid}
            />
            <Link
              to={`${StaticRoutes.ARTICLES}?categoryId=${category.strapiId}`}
            >
              <div className="slide-text">
                <h2>{category.name}</h2>
                <h3>{category.description}</h3>
              </div>
            </Link>
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
