import React, {useState} from "react"
import { useQuery } from "react-apollo"
import QUERY_VALUE from "../../graphql/getDepartmentGroup.graphql"
import { SearchBar } from "vtex.store-components"
import DepartmentGroup from './DepartmentGroup'
import { useCssHandles } from "vtex.css-handles"

import "./styles.css"

const DepartmentSearch = () => {
  const { data, loading } = useQuery(QUERY_VALUE)
  const [ slug, setSlug ] = useState("")

  const CSS_HANDLES = ["container"]
  const handles = useCssHandles(CSS_HANDLES)

  return (
     <>
      {
        loading ? 
        <div>loading...</div> 
        :
         <div className={`${handles.container}`}>
         <DepartmentGroup departments={data.categories} handleSetSlug={setSlug}/>
         <SearchBar containerMode="overlay" customSearchPageUrl={slug} placeholder="¿Que buscas?" displayMode="search-and-clear-buttons" />
         </div>  
      }
     </>
  )
}

export default DepartmentSearch
