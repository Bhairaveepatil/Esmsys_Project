import React, { useState } from "react";
import { UserInfo } from "./UserInfo";
import UserTable from "./UserTable";
import Pagination from "@material-ui/lab/Pagination";
// import MaterialTable from 'material-table'

// const Userdetails = () => {

// const[userinfo,setuserinfo] = useState([])

// const getuserinfo = async () => {
//  try{
//    const response = await axios.get('https://qaapi.jahernotice.com/api/Epp/0');
//    setuserinfo(response.data)
//  } catch (error){
//    console.log(error)
//  }
// };

// useEffect(()=>{
// getuserinfo()
// },[])

//   return (
//  <DataTable title="User Details" columns={columns} data={userinfo} pagination/>
//   )
// }

// export default Userdetails

const Userdetails = () => {
  //   const [tabledata,settabledata] =useState([])
  //   const column = [
  //     {name : "User Name",field :"name"},
  //     {name : "Mobile No",field :"Mobile"},
  //     { name : "EmailID",field :"EmailID"},
  //     {name : "Epp count",field :"Epp count"}

  // ]
  // const pagination =() =>({
  //   totalcount,
  //    pageSize,
  //    sibilingCount = 1,
  //    currentpage
  // })=>{
  //   const paginationRange = useMemo(()=>{  },
  //   [totalcount,
  //   pageSize,
  // sibilingCount,
  // currentpage])
  // return pagination
  // }
  const [query, setquery] = useState("");
  const forsearch = (data) => {
    return data.filter(
      (user) =>
        user.FirstName.toLowerCase().includes(query) ||
        user.LastName.toLowerCase().includes(query) ||
        user.EmailID.toLowerCase().includes(query)
    );
  };

  // console.log(UserInfo.filter(users => users.FirstName.toLowerCase().includes("Sa")))
  return (
    <>
      <div>EPP Details</div>
      <div className="userinfo">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a className="navbar-brand col-lg-3" href="#">
              All user Details
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Show result
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex">
                <input
                  onChange={(e) => setquery(e.target.value)}
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>

      {/* <ul className='list'>
        {UserInfo.filter((users) => users.FirstName.toLowerCase().includes(query)
        ).map((users) => (
          <li
            key={users.UserID} className='listitems'>{users.FirstName}
          </li>
        ))}
      </ul> */}
      {/* <MaterialTable column={column} data={forsearch(UserInfo)} /> */}
      <UserTable data={forsearch(UserInfo)} />

      <div>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-end">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                Previous
              </a>
            </li>
            <Pagination count={10} />
            <a class="page-link" href="#">
              Next
            </a>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Userdetails;
