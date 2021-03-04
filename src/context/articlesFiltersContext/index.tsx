import React from "react"

export interface ArticlesFiltersState {
  text: string
  categoryId: number | null
  tagId: number | null
}

const ArticlesFiltersStateContext = React.createContext<ArticlesFiltersState>(
  undefined
)

const ArticlesFiltersDispatchContext = React.createContext<
  React.Dispatch<Action>
>(undefined)

export const setTextFilter = (textFilter: string) =>
  ({
    type: "SET_TEXT_FILTER",
    payload: textFilter,
  } as const)

export const setCategoryFilter = (categoryId: number | null) =>
  ({
    type: "SET_CATEGORY_FILTER",
    payload: categoryId,
  } as const)

export const setTagFilter = (tagId: number | null) =>
  ({
    type: "SET_TAG_FILTER",
    payload: tagId,
  } as const)

type Action =
  | ReturnType<typeof setTextFilter>
  | ReturnType<typeof setCategoryFilter>
  | ReturnType<typeof setTagFilter>

const articlesFiltersReducer = (
  state: ArticlesFiltersState,
  action: Action
): ArticlesFiltersState => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.payload,
      }
    case "SET_CATEGORY_FILTER":
      return {
        ...state,
        categoryId: action.payload,
        tagId: null,
      }
    case "SET_TAG_FILTER":
      return {
        ...state,
        tagId: action.payload,
        categoryId: null,
      }
    default:
      return state
  }
}

export const ArticlesFiltersProvider = ({ children }) => {
  const initialArticlesFilters = {
    text: "",
    categoryId: null,
    tagId: null,
  }
  const [initialState, dispatch] = React.useReducer(
    articlesFiltersReducer,
    initialArticlesFilters
  )

  return (
    <ArticlesFiltersStateContext.Provider value={initialState}>
      <ArticlesFiltersDispatchContext.Provider value={dispatch}>
        {children}
      </ArticlesFiltersDispatchContext.Provider>
    </ArticlesFiltersStateContext.Provider>
  )
}

export const useArticlesFiltersState = () => {
  return React.useContext(ArticlesFiltersStateContext)
}

export const useArticlesFiltersDispatch = () => {
  return React.useContext(ArticlesFiltersDispatchContext)
}
