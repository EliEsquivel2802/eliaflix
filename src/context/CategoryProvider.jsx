import { createContext, useReducer } from "react"
import { categorysReducer, initialCategorys } from "../reducers/categorysReducer"

const CategoryContext = createContext()

const CategoryProvider = ({children}) => {

    const [state, dispath] = useReducer(categorysReducer, initialCategorys)

    return <CategoryContext.Provider value={[state, dispath]}>
        {children}
    </CategoryContext.Provider>
}

export {CategoryContext}
export default CategoryProvider