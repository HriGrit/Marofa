import React from "react";

import HelperCardSingleDetail from "./HelperCardSingleDetail";
// import HelperSideBar from "./HelperSideBar";

const HelperSingleBodyDetail = ({ helperId }) => {
  
  return (
    <div className="sm:m-16 sm:mx-32 grid grid-cols-12">
      <div className="col-span-12">
        <HelperCardSingleDetail helperId={helperId} />
      </div>
      {/* <div className='col-span-2'>
                <HelperSideBar />
            </div> */}
    </div>
  );
};

export default HelperSingleBodyDetail;
