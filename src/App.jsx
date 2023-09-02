import { useEffect, useState } from "react";
import TableBody from "./ReuseableComponents/TableBody";
import { BsCheckLg, BsFillFilterSquareFill } from "react-icons/bs";
import Loading from "./ReuseableComponents/Loading";
import AreaCharts from "./ReuseableComponents/AreaCharts";

function App() {
  const [Tabledata, setData] = useState(null);
  const [filtermodal, setFilterModal] = useState(true);
  const [selectall, setSelectall] = useState(true);
  const [Index, setIndex] = useState(true);
  const [ProjectLink, setProjectLink] = useState(true);
  const [ProjectBudget, setProjectBudget] = useState(true);
  const [BidValue, setBidValue] = useState(true);
  const [Created, setCreated] = useState(true);
  const [BiddingDeliyTime, setBiddingDeliyTime] = useState(true);
  const [Status, setStatus] = useState(true);
  const [name, setName] = useState(true);
  const [chartData, setChartData] = useState(null);

  // data low from api fetch function is here
  useEffect(() => {
    try {
      fetch("https://seopage1erp.website/api/leads")
        .then((res) => res.json())
        .then((data) => {
          setData(data.data.slice(0, 100));
          // last 100 data slice from here for making Areac chart
          setChartData(
            data.data.slice(data.data.length - 100, data.data.length)
          );
        });
    } catch (error) {
      console.log("Data load from server is not complete");
    }
  }, []);

  // reset column function is here
  const resetcolumn = () => {
    setIndex(true);
    setProjectLink(true);
    setProjectBudget(true);
    setBidValue(true);
    setCreated(true);
    setBiddingDeliyTime(true);
    setStatus(true);
    setName(true);
  };

  // select all filter function is here
  useEffect(() => {
    if (selectall) {
      resetcolumn();
    }
  }, [selectall]);

  return (
    <div className="w-11/12 mx-auto text-sm my-5">
      {/* Filter and header part is from here */}
      <div className="flex justify-between items-center my-5">
        <h1 className=" font-bold text-2xl tracking-wider">Leads</h1>
        <div className="flex justify-center items-center gap-5 font-bold text-sm relative">
          <button
            onClick={() => resetcolumn()}
            className="flex gap-2 justify-center items-center border rounded-sm px-3 py-1"
          >
            <BsFillFilterSquareFill /> Reset Column
          </button>
          <button
            onClick={() => setFilterModal(!filtermodal)}
            className="flex gap-2 justify-center items-center border rounded-sm px-3 py-1"
          >
            <BsFillFilterSquareFill /> Filter
          </button>

          {/* Filter modal is from here */}
          <div
            hidden={filtermodal}
            className="absolute bg-white border p-3 text-left top-10 z-10 right-0 rounded-md text-xs"
          >
            <form>
              <div className="flex justify-start items-center gap-2">
                <input
                  onClick={() => setSelectall(!selectall)}
                  type="checkbox"
                  defaultChecked={selectall}
                  name="selectall"
                />
                <label htmlFor="index">Select All</label>
              </div>
              <div className="flex justify-start items-center gap-2">
                <input
                  onClick={() => setIndex(!Index)}
                  defaultChecked={Index}
                  type="checkbox"
                  name="index"
                />
                <label htmlFor="index">Index</label>
              </div>
              <div className="flex justify-start items-center gap-2">
                <input
                  onClick={() => setName(!name)}
                  defaultChecked={name}
                  type="checkbox"
                  name="name"
                />
                <label htmlFor="index">Name</label>
              </div>
              <div className="flex justify-start items-center gap-2">
                <input
                  onClick={() => setProjectLink(!ProjectLink)}
                  type="checkbox"
                  name="ProjectLink"
                  defaultChecked={ProjectLink}
                />
                <label htmlFor="index">Project Link</label>
              </div>
              <div className="flex justify-start items-center gap-2">
                <input
                  onClick={() => setProjectBudget(!ProjectBudget)}
                  type="checkbox"
                  name="ProjectLink"
                  defaultChecked={ProjectBudget}
                />
                <label htmlFor="index">Project Budget</label>
              </div>
              <div className="flex justify-start items-center gap-2">
                <input
                  onClick={() => setBidValue(!BidValue)}
                  type="checkbox"
                  name="ProjectBudget"
                  defaultChecked={BidValue}
                />
                <label htmlFor="index">Bid Value</label>
              </div>
              <div className="flex justify-start items-center gap-2">
                <input
                  onClick={() => setCreated(!Created)}
                  type="checkbox"
                  name="Created"
                  defaultChecked={Created}
                />
                <label htmlFor="index">Created</label>
              </div>
              <div className="flex justify-start items-center gap-2">
                <input
                  onClick={() => setBiddingDeliyTime(!BiddingDeliyTime)}
                  type="checkbox"
                  name="BiddingDeliyTime"
                  defaultChecked={BiddingDeliyTime}
                />
                <label htmlFor="index">Bidding Deliy Time</label>
              </div>
              <div className="flex justify-start items-center gap-2">
                <input
                  onClick={() => setStatus(!Status)}
                  type="checkbox"
                  name="Status"
                  defaultChecked={Status}
                />
                <label htmlFor="index">Status</label>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Table is from here */}
      <div className="overflow-x-auto">
      <table className="table table-xs">
          <thead>
            <tr>
              <th hidden={!Index}>Index</th>
              <th hidden={!name}>Name</th>
              <th hidden={!ProjectLink}>Project Link</th>
              <th hidden={!ProjectBudget}>Project Budget</th>
              <th hidden={!BidValue}>Bid Value</th>
              <th hidden={!Created}>Created</th>
              <th hidden={!BiddingDeliyTime}>Bidding Deliy Time</th>
              <th hidden={!Status}>Status</th>
            </tr>
          </thead>
          {/* table Body is from here */}
          <tbody>
            {Tabledata &&
              Tabledata.map((data, index) => (
                <TableBody
                  data={data}
                  key={index}
                  indexNumber={index}
                  Index={Index}
                  ProjectLink={ProjectLink}
                  ProjectBudget={ProjectBudget}
                  BidValue={BidValue}
                  Created={Created}
                  BiddingDeliyTime={BiddingDeliyTime}
                  Status={Status}
                  name={name}
                />
              ))}
          </tbody>
        </table>
        <div hidden={Tabledata}>
          <Loading />
        </div>
      </div>
      {/* Area Chart is from here */}
      <AreaCharts data={chartData} />
    </div>
  );
}

export default App;
