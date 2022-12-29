import React from "react";
import { useCssHandles } from "vtex.css-handles";

import "./styles.css"

type Props = {
  departments: [Category],
  handleSetSlug: Function 
}

type Category = {
  id: number,
  name: string,
  slug: string
}

const DepartmentGroup = ({departments, handleSetSlug}:Props) => {

  const CSS_HANDLES = ["select","options"]
  const handles = useCssHandles(CSS_HANDLES)

  const onHandleSlug = (e:any) => {
     handleSetSlug(`${e.target.value}/$\{term\}`)
  } 

  const departmentOptions = departments.map(({id,name,slug}: Category)=>(
     <option key={id} value={slug} className={`${handles.options}`}>
       {name}
     </option>
  ))
  return (
    <select defaultValue="value0" onChange={onHandleSlug} className={`${handles.select}`}>
        <option value="value0" className={`${handles.options}`} >Seleccione una categoria</option>
        {
            departmentOptions
        }
    </select>
  )
}

export default DepartmentGroup
