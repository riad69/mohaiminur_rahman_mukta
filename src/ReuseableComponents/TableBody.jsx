function TableBody({
  data,
  indexNumber,
  Index,
  name,
  ProjectLink,
  ProjectBudget,
  BidValue,
  Created,
  BiddingDeliyTime,
  Status,
}) {
  return (
    <>
      <tr>
        <td hidden={!Index}>{indexNumber + 1}</td>
        <td hidden={!name}>{data?.client_name.slice(0, 30)}...</td>
        <td hidden={!ProjectLink}>{data?.project_link.slice(0, 25)}...</td>
        <td hidden={!ProjectBudget}>
          {data?.added_by}$-{data?.actual_value}$
        </td>
        <td hidden={!BidValue}>{data?.bid_value}$</td>
        <td hidden={!Created}>{data?.deadline}</td>
        <td hidden={!BiddingDeliyTime}>
          {data?.bidding_minutes} mins {data?.bidding_seconds} secouds
        </td>
        <td hidden={!Status}>
          {data?.deal_status == 1 ? (
            <button className="px-2 py-1 bg-green-500 text-white text-xs rounded-sm shadow-md">
              Converted to deal
            </button>
          ) : (
            <button className="px-2 py-1 bg-red-500 text-white text-xs rounded-sm shadow-md">
              Not converted to deal
            </button>
          )}
        </td>
      </tr>
    </>
  );
}

export default TableBody;
