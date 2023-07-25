import React from 'react';
let tags = [' All', 'JavaScript', 'Ruby', 'Java', 'Css', 'Python'];

function Tages(props) {
  return (
    <>
    {
        tags.map((tag)=>(
            <button>{tag}</button>
        ))
    }
    </>
  );
}
export default Tages;
