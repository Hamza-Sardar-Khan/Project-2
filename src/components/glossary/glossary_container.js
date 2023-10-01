import React from "react"

const Glossary = ({letter, children}) => {
  return (
    <div className="control-item">
        <h4 className="item_title_letter"><a id={letter}></a>{letter}</h4>  
          <table>
            <tbody>
              {children}
            </tbody>
        </table>
    </div>
    );
}

export default Glossary;
