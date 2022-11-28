import { Link } from "@mui/material";

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
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <Link to="/users/test" style={{ textDecoration: "none" }}>
            <div className="viewButton">View</div>
          </Link>
          <div
            className="deleteButton"
            // onClick={() => handleDelete(params.row._id)}
          >
            Delete
          </div>
        </div>
      );
    },
  },
];
// export const userRows = [
//   {
//     id: 1,
//     username: "Leon William",
//     img: "",
//     email: "leonwi15@gmail.com",
//     country: "American",
//     city: "New York",
//     phone: "015 458 9463",
//   },
// ];

export const commentColumns = [
  { field: "id", width: 50 },
  { field: "date", width: 150 },
  { field: "user", width: 200 },
  { field: "raiting", width: 150 },
  { field: "content", width: 300, paddingLeft: 10 },
  { field: "status", width: 200 },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <Link to="/users/test" style={{ textDecoration: "none" }}>
            <div className="viewButton">View</div>
          </Link>
          <div
            className="deleteButton"
            // onClick={() => handleDelete(params.row._id)}
          >
            Delete
          </div>
        </div>
      );
    },
  },
];
export const commentRows = [
  {
    id: 1,
    date: "7/11/2022",
    user: "Murray Howel",
    raiting: "start",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe culpa delectus quaerat eius, quod aspernatur dolorum ipsum dolor vero, veritatis alias soluta sapiente magnam aut temporibus. Sapiente quisquam iusto nulla.",
    status: "accept",
  },
  {
    id: 2,
    date: "7/11/2022",
    user: "Murray Howel",
    raiting: "start",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe culpa delectus quaerat eius, quod aspernatur dolorum ipsum dolor vero, veritatis alias soluta sapiente magnam aut temporibus. Sapiente quisquam iusto nulla.",
    status: "accept",
  },
];

export const placeColumns = [
  { field: "id", headerName: "ID", width: 70 },
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
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <Link to="/users/test" style={{ textDecoration: "none" }}>
            <div className="viewButton">View</div>
          </Link>
          <div
            className="deleteButton"
            // onClick={() => handleDelete(params.row._id)}
          >
            Delete
          </div>
        </div>
      );
    },
  },
];

export const placeRows = [
  {
    id: 1,
    name: "Greek Island Hopping",
    duration: 4,
    price: 2210,
    ratingsAverage: 4.8,
    ratingsQuantity: 6,
    images: [
      "tour-1-1.jpeg",
      "tour-1-2.jpeg",
      "tour-1-3.jpeg",
      "tour-1-4.jpeg",
      "tour-1-5.jpeg",
      "tour-1-6.jpeg",
    ],
    maxGroupSize: 50,
    summary:
      "Start and end in Athens! With the Island Hopping tour Greek Island Hopping (Standard, 11 Days), you have a 11 days tour package taking you through Athens, Greece and 4 other destinations in Greece. Greek Island Hopping (Standard, 11 Days) includes accommodation in a hotel as well as an expert guide, meals, transport and more.",
    experience:
      "You'll be living your best Greek island life on this sun, sea & culture-rich trip in Mykonos, Paros, Santorini, Ios & Athens. Stopping in at each of Greece's most popular islands, the perfect spot for buzzing party nights and lazy sun-soaked days, you'll have plenty of time to explore charming villages, local shops, volcanoes, natural coves & sun-soaked beaches, with plenty of time for sunbathing, swimming & nightlife as well as a bit of ancient history in between.",
    include: {
      accomodation: "4 nights in Hotel, 2 nights in Contiki Special Stay",
      meals: "8 Meal: 4 Breakfasts and 3 Dinners",
      transport: "All transfers between hotels & ferry ports during the trip",
    },
    startLocation: {
      description: "Athen",
      type: "Point",
      coordinates: [37.9839412, 23.7283052],
    },
    locations: [
      {
        description: "Athen",
        type: "Point",
        coordinates: [37.9839412, 23.7283052],
        day: 1,
      },
      {
        description: "Mykonos",
        type: "Point",
        coordinates: [37.451434500000005, 25.392337493319413],
        day: 2,
      },
      {
        description: "Santorini",
        type: "Point",
        coordinates: [36.4044251, 25.3958561],
        day: 3,
      },
      {
        description: "Ios",
        type: "Point",
        coordinates: [36.7173281, 25.33311211846154],
        day: 4,
      },
    ],
  },
];
