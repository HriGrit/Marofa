import React from "react";
import Navbar from "../../components/Navbar/navbar";
import HelperSingleBodyDetail from "../../components/Helper/Single/HelperSingleBodyDetail";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";

const HelperDetail = () => {
  const { id } = useParams();

  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <HelperSingleBodyDetail helperId={id} />
      <Footer />
    </div>
  );
};

export default HelperDetail;
