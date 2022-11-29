import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Rating } from "@mui/material";

export const userColumns = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "name",
    headerName: "Name",
    width: 230,
    renderCell: (params) => {
      // console.log(params);
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={
              params.row.avatarUrl || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"
            }
            alt="avatar"
          />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
  },
  {
    field: "typeAccount",
    headerName: "Type Account",
    width: 150,
  },
  {
    field: "address",
    headerName: "Address",
    width: 150,
  },
  {
    field: "dateOfBirth",
    headerName: "Date Of Birth",
    width: 150,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "role",
    headerName: "Role",
    width: 90,
  },
  // {
  //   field: "action",
  //   headerName: "Action",
  //   width: 200,
  //   renderCell: (params) => {
  //     return (
  //       <div className="cellAction">
  //         <Link to="/users/test" style={{ textDecoration: "none" }}>
  //           <div className="viewButton">View</div>
  //         </Link>
  //         <div
  //           className="deleteButton"
  //           // onClick={() => handleDelete(params.row._id)}
  //         >
  //           Delete
  //         </div>
  //       </div>
  //     );
  //   },
  // },
];
export const guideColumns = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "name",
    headerName: "Name",
    width: 230,
    renderCell: (params) => {
      // console.log(params);
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={
              params.row.avatarUrl || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"
            }
            alt="avatar"
          />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "address",
    headerName: "Address",
    width: 150,
  },
  {
    field: "experience",
    headerName: "Experience",
    width: 150,
  },
  {
    field: "place",
    headerName: "Place",
    width: 150,
  },
  {
    field: "language",
    headerName: "language",
    width: 150,
  },
];

export const reviewColumns = [
  { field: "id", width: 150 },
  { field: "review", width: 200 },
  {
    field: "rating",
    width: 150,
    renderCell: (params) => {
      // console.log(params.row.rating);
      return (
        <Rating
          className="text-primary text-[14px] mr-[5px]"
          readOnly
          icon={
            <FontAwesomeIcon icon={faStar} color="#ffbc4a"></FontAwesomeIcon>
          }
          // emptyIcon={
          //   <FontAwesomeIcon icon={faStar} color="#aaaaaa"></FontAwesomeIcon>
          // }
          style={{
            color: "#ffbc4a",
            fontSize: "20",
          }}
          defaultValue={params.row?.rating || 4.5}
          precision={0.5}
        ></Rating>
      );
    },
  },

  { field: "user", width: 150 },
  { field: "guide", width: 150, paddingLeft: 10 },
  { field: "place", width: 150 },
];

export const blogColumns = [
  { field: "id", width: 200 },
  { field: "title", width: 200 },
  { field: "article", width: 250 },
  { field: "user", width: 200 },
  { field: "publishedAt", width: 150, paddingLeft: 10 },
  // { field: "place", width: 150},
];

export const placeColumns = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },
  {
    field: "duration",
    headerName: "Duration",
    width: 120,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "ratingsAverage",
    headerName: "Ratings Average",
    width: 150,
    renderCell: (params) => {
      // console.log(params.row.rating);
      return (
        <Rating
          className="text-primary text-[14px] mr-[5px]"
          readOnly
          icon={
            <FontAwesomeIcon icon={faStar} color="#ffbc4a"></FontAwesomeIcon>
          }
          // emptyIcon={
          //   <FontAwesomeIcon icon={faStar} color="#aaaaaa"></FontAwesomeIcon>
          // }
          style={{
            color: "#ffbc4a",
            fontSize: "20",
          }}
          defaultValue={params.row?.ratingsAverage || 4.5}
          precision={0.5}
        ></Rating>
      );
    },
  },
  {
    field: "ratingsQuantity",
    headerName: "Ratings Quantity",
    width: 150,
  },
  {
    field: "images",
    headerName: "Images",
    width: 150,
  },
  {
    field: "maxGroupSize",
    headerName: "Max Group Size",
    width: 120,
  },
  {
    field: "summary",
    headerName: "Summary",
    width: 120,
  },
  {
    field: "include",
    headerName: "Include",
    width: 150,
    children: [
      {
        field: "accomodation",
        headerName: "Accomodation",
      },
      {
        field: "meals",
        headerName: "Meals",
      },
      {
        field: "transport",
        headerName: "Transport",
      },
    ],
  },
  {
    field: "startLocation",
    headerName: "Start Location",
    width: 150,
    children: [
      {
        field: "description",
        headerName: "Description",
      },
      {
        field: "type",
        headerName: "Type",
      },
      {
        field: "coordinates",
        headerName: "Coordinates",
      },
    ],
  },
  {
    field: "locations",
    headerName: "Locations",
    width: 150,
    children: [
      {
        field: "description",
        headerName: "Description",
      },
      {
        field: "type",
        headerName: "Type",
      },
      {
        field: "coordinates",
        headerName: "Coordinates",
      },
      {
        field: "day",
        headerName: "Day",
      },
    ],
  },
];
