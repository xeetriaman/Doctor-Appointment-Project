import React, { useState } from "react";
import Loader from "../../Loader/Loading.jsx";
import Error from "../../Error/Error.jsx";
import useGetProfile from "../../hooks/useFetchData";
import Tabs from "./Tabs.jsx"; // Importing the Tabs component
import { BASE_URL } from '../../config.js';

const Dashboard = () => {
  const [tab, setTab] = useState("overview"); // Initialize tab state

  const { data, loading, error } = useGetProfile(`${BASE_URL}/api/v1/doctors/profile/me`);

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loader />} {/* Changed Loader syntax */}
        {error && !loading && <Error errMessage={error} />} {/* Changed Error syntax */}
        {!loading && !error && (
          <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
            <Tabs tab={tab} setTab={setTab} /> {/* Pass tab and setTab props */}
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
