import { createContext, useContext } from "react";

interface IIndex {
   
}

const Context = createContext({} as any)

function Pro({children}:{children:React.ReactNode}){
    return (
        <Context.Provider value={{
            
        } as IIndex}>
            {children}
        </Context.Provider>
    )
}

export const useIndexContext = () => useContext(Context)
export default Pro