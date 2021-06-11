// import React from 'react'

// const Coach = (props) => {
//     const coach = props.info;
//     return (
      
//     );
// }

// export default Coach

import React from 'react'

const Coach = () => {
    return (
      <div>
        <tbody>
          <tr>
            <td className="product-thumbnail pl-4 text-left">
              <img
                src="https://via.placeholder.com/75x100.png"
                alt="Product Thumnail"
                className="w75 rounded-lg"
              />
            </td>
            <td className="product-headline text-left wide-column">
              <h3>
                <a href="." className="text-grey-900 fw-600">
                  First Last Email
                  {/* {coach.name} {coach.email} */}
                </a>
              </h3>
            </td>
            <td className="product-remove text-right">
              <a href=".">
                <i className="ti-trash font-xs text-grey-500"></i>
              </a>{" "}
              <a href=".">
                <i className="ti-eye ml-2 font-xs text-grey-500"></i>
              </a>
              <a href=".">
                <i className="ti-pencil ml-2 font-xs text-grey-500"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </div>
    );
}

export default Coach

