import React from "react"

const Glossary_table = ({title, text}) => {
  return (
    <tr>
      <td><strong>{title}</strong></td>
      <td className="text_glossary">{text}</td>
    </tr>
  )
}

export default Glossary_table;
