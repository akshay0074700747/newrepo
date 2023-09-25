// import { useState } from "react";
// import "./App.css";
// const divStyle = {
//   backgroundColor: "blue",
// };

// function App() {
//   //sets the initial name
//   const [name, setname] = useState("");
//   // create an array of names
//   const [newname, setnewname] = useState([]);
//   //
//   const [update, setupdate] = useState({ id: -1, status: false });
//   // updating the name
//   const [updatename, setupdatename] = useState("");
//   const handlechange = (i) => {
//     console.log(i);
//     const newvar = newname.filter((dahjkgj, j) => {
//       return j !== i;
//     });
//     setnewname([...newvar]);
//   };
//   const updatechange = (i, updatename) => {
//     var newvar = [...newname];
//     newname.map((item, j) => {
//       if (i === j) {
//         console.log(i, updatename, j, item);
//         newvar[j] = updatename;
//       }
//     });
//     setnewname([...newvar]);
//     setupdate(false);
//     setupdatename("");
//   };
//   return (
//     <>
//       <div>
//         <h2>Enter Your name</h2>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => {
//             setname(e.target.value);
//           }}
//         />
//         <br /> <br />
//         <button
//           onClick={() => {
//             setnewname([...newname, name]);
//             setname("");
//           }}
//         >
//           ADD
//         </button>
//         {newname.map((newegkj, i) => {
//           return (
//             <>
//               <div style={divStyle}>
//                 <p key={i}>{newegkj}</p>
//                 <button
//                   onClick={
//                     !update.status
//                       ? () => {
//                           handlechange(i), setupdate(false);
//                         }
//                       : ""
//                   }
//                 >
//                   delete
//                 </button>
//                 <button
//                   onClick={() => {
//                     setupdate({ id: i, status: true });
//                   }}
//                 >
//                   update
//                 </button>
//               </div>{" "}
//               <br />
//               {update.status && update.id === i ? (
//                 <>
//                   <input
//                     type="text"
//                     value={updatename}
//                     onChange={(e) => {
//                       setupdatename(e.target.value);
//                     }}
//                   />{" "}
//                   <br />{" "}
//                   <button
//                     onClick={() => {
//                       updatechange(i, updatename);
//                     }}
//                   >
//                     SUBMIT
//                   </button>{" "}
//                 </>
//               ) : (
//                 ""
//               )}
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// }
// export default App;

// /////////////////////////////////////////class state setting
// import React, { Component } from "react";

// export default function App() {
//   return <Coounter />;
// }

// class Coounter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0,
//     };
//   }
//   handlefunc = () => {
//     console.log("kahsfgdkj");
//     this.setState(
//       (prevstate) => ({
//         counter: prevstate.counter + 1,
//       }),
//       () => {
//         // Callback function after state is updated
//         console.log("Counter has been incremented.");
//       }
//     );
//   };
//   render() {
//     return (
//       <button onClick={ this.handlefunc}>{this.state.counter}</button>
//     );
//   }
// }

// import { useState, useEffect } from "react";

// const Effectdem = () => {
//   const [count, setcount] = useState(0);
//   useEffect(() => {
//     document.title = `You clicked ${count} times`;
//   }, [count]);
//   return (
//     <div>
//       <button onClick={() => setcount(count + 1)}>change</button>
//     </div>
//   );
// };

// export default function App() {
//   return <Effectdem />;
// }

// import { useState, useEffect, useRef } from "react";

// export default function App() {
//   const [test, settest] = useState("");
//   const count = useRef(0);
//   useEffect(() => {
//       count.current = count.current + 1;
//   }, [test]);
//   return (
//     <>
//       <input
//         type="text"
//         value={test}
//         onChange={(e) => {
//           settest(e.target.value);
//         }}
//       />
//       <h1>the app renderd {count.current} times</h1>
//     </>
//   );
// }
// import { useState, useEffect, useRef } from "react";

// export default function App() {
//   const [inputValue, setInputValue] = useState("");
//   const previousInputValue = useRef("");

//   useEffect (() => {
//     previousInputValue.current = inputValue;
//   }, [inputValue]);

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h2>Current Value: {inputValue}</h2>
//       <h2>Previous Value: {previousInputValue.current}</h2>
//     </>
//   );
// }

// import { useState, useContext, createContext, createContext } from "react";

// const Usercontext1 = createContext()

// export default function App() {
//   const [ex, setex] = useState(0);
//   return (
//     <>
//     <Usercontext1.Provider value={ex}>
//       <h1>Parent</h1>
//       <button
//         onClick={() => {
//           setex(ex + 1);
//         }}
//       >
//         click
//       </button>
//       <Comp ex={ex}></Comp>
//       </Usercontext1.Provider>
//     </>
//   );
// }

// function Comp({ ex }) {
//   return (
//     <>
//       <h2>Child 1</h2>
//       <Comp2 ex={ex}></Comp2>
//     </>
//   );
// }
// function Comp2({ ex }) {
//   return (
//     <>
//       <h2>Child 2</h2>
//       <Comp3 ex={ex}></Comp3>
//     </>
//   );
// }
// function Comp3({ ex }) {
//   return (
//     <>
//       <h2>Child 3</h2>
//       <Comp4 ex={ex}></Comp4>
//     </>
//   );
// }
// function Comp4({ ex }) {
//   return (
//     <>
//       <h3>Target</h3>
//       <p>{ex}</p>
//     </>
//   );
// }

// import { useReducer } from "react";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// export default function App() {
//   const initialstate = { count: 0 };
//   const [state, dispatcher] = useReducer(reducer, initialstate);
//   return (
//     <>
//       <p>{state.count}</p>
//       <button
//         onClick={() => {
//           dispatcher({ type: "increment" });
//         }}
//       >
//         increment
//       </button>
//       <button
//         onClick={() => {
//           dispatcher({ type: "decrement" });
//         }}
//       >
//         decrement
//       </button>
//     </>
//   );
// }

// import { useState } from "react";

// export default function App() {
//   console.log("hajvhasbavsh");
//   const [demo, setdemo] = useState("");
//   const callbackfunc = (params) => {
//     setdemo(params);
//   };
//   return (
//     <>
//       <h1>{demo}</h1>
//       <Comp callback={callbackfunc}></Comp>
//     </>
//   );
// }

// function Comp({ callback }) {
//   const [change, setchange] = useState("");
//   return (
//     <>
//       <input
//         type="text"
//         value={change}
//         onChange={(e) => {
//           setchange(e.target.value);
//         }}
//       />
//       <button
//         onClick={() => {
//           callback(change);
//         }}
//       >
//         Accessparent
//       </button>
//     </>
//   );
// }

// export default function App() {
//   return (
//     <>
//       <Comp2 Comp={Comp1} />
//     </>
//   );
// }

// function Comp1() {
//   return (
//     <>
//       <h1>fistcomp</h1>
//     </>
//   );
// }

// function Comp2({ Comp }) {
//   return (
//     <>
//       <h1>Secondcomp</h1>
//       <Comp />
//     </>
//   );
// }

//////////////////////////////////////////////my todoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo

// import React, { useState, createContext, useContext } from "react";

// const Mycontext = createContext();

// export default function App() {
//   const [listtodo, setlisttodo] = useState([]);
//   const ctxobj = {
//     list: listtodo,
//     listfunc: setlisttodo,
//   };

//   const retrievetodo = (todoobj) => {
//     setlisttodo([...listtodo, todoobj]);
//     console.log("Item added");
//   };

//   return (
//     <>
//       <h1>TODO LIST</h1>
//       <Inserttodo givetoparent={retrievetodo}></Inserttodo>
//       <Mycontext.Provider value={ctxobj}>
//         <Displaytodo></Displaytodo>
//       </Mycontext.Provider>
//     </>
//   );
// }

// function Inserttodo({ givetoparent }) {
//   const [name, setName] = useState("");
//   const [date, setDate] = useState("");

//   const addTodo = () => {
//     const id = Date.now().toString();
//     givetoparent({ id, name, date });
//     setName("");
//     setDate("");
//   };

//   return (
//     <>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="datetime-local"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//       />
//       <button onClick={addTodo}>ADD</button>
//     </>
//   );
// }

// const todostyle = {
//   border: "2px",
// };

// function Displaytodo() {
//   const [editstatus, seteditstatus] = useState({ id: "", status: false });
//   const context = useContext(Mycontext);
//   const [name, setName] = useState("");
//   const [date, setDate] = useState("");
//   return (
//     <>
//       {context.list.map((todo) => {
//         return (
//           <div key={todo.id} style={todostyle}>
//             {editstatus.id == todo.id && editstatus.status == true ? (
//               <>
//                 <input
//                   type="text"
//                   onChange={(e) => {
//                     setName(e.target.value);
//                   }}
//                 />
//                 <br />
//                 <input
//                   type="datetime-local"
//                   onChange={(e) => {
//                     setDate(e.target.value);
//                   }}
//                 />
//                 <br />
//                 <button
//                   onClick={() => {
//                     const newtodos = context.list.map((item) => {
//                       if (editstatus.id == item.id) {
//                         item.name = name;
//                         item.date = date;
//                       }
//                     });
//                     seteditstatus({ id: "", status: false });
//                     setName("");
//                     setDate("");
//                     context.listfunc([...newtodos]);
//                   }}
//                 >
//                   SUBMIT
//                 </button>
//               </>
//             ) : (
//               <>
//                 <h3>{todo.name}</h3>
//                 <p>{todo.date}</p>
//                 <Delete deleteid={todo.id}></Delete>
//                 <Edit editid={todo.id} callbackedit={seteditstatus}></Edit>
//               </>
//             )}
//           </div>
//         );
//       })}
//     </>
//   );
// }

// function Delete({ deleteid }) {
//   const context = useContext(Mycontext);
//   return (
//     <button
//       key={deleteid}
//       onClick={() => {
//         const newlist = context.list.filter((todo) => {
//           console.log(deleteid, todo.id);
//           return todo.id != deleteid;
//         });
//         context.listfunc([...newlist]);
//       }}
//     >
//       DELETE
//     </button>
//   );
// }

// function Edit({ editid, callbackedit }) {
//   return (
//     <button
//       onClick={() => {
//         callbackedit({ id: editid, status: true });
//         console.log(editid);
//       }}
//     >
//       EDIT
//     </button>
//   );
// }

//////////////////////////////////////////////////////////////////////////////////////////////

// import { useReducer } from "react";

// export default function App() {
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "increment":
//         return { count: state.count + 1, showtext: state.showtext };
//       case "changetxt":
//         return { count: state.count, showtext: !state.showtext };

//       default:
//         return state;
//     }
//   };

//   const [state, dispatcher] = useReducer(reducer, {
//     count: 0,
//     showtext: false,
//   });
//   return (
//     <>
//       <h1>{state.count}</h1>
//       <button
//         onClick={() => {
//           dispatcher({ type: "increment" });
//           dispatcher({ type: "changetxt" });
//         }}
//       >
//         click!!!!
//       </button>
//       {state.showtext ? <h1>this title displayed</h1> : ""}
//     </>
//   );
// }

// import { useRef } from "react";

// export default function App() {
//   const inputref = useRef();
//   const fucosfunc = () => {
//     inputref.current.focus();
//   };
//   return (
//     <>
//       <input type="text" ref={inputref} />
//       <button onClick={fucosfunc}>focus</button>
//     </>
//   );
// }

// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function App() {
//   const [alldata, setalldata] = useState([]);
//   const [counter, setcounter] = useState(1);
//   const apiendpoint = "https://jsonplaceholder.typicode.com/users";
//   useEffect(() => {
//     axios.get(apiendpoint).then((responce) => {
//       setalldata(responce.data);
//     });
//   }, []);

//   return (
//     <>
//       <h1>{counter}</h1>
//       <div>
//         {user = alldata.filter((item) => {
//          return item.id == counter
//         }) }
//       </div>
//       <button onClick={() => setcounter(counter + 1)}>Increment</button>
//       <button onClick={() => setcounter(counter - 1)}>Decrement</button>
//     </>
//   );
// }

import { Link, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/about"}>about</Link>
          </li>
          <li>
            <Link to={"/"}>home</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/about" element={<h1>About</h1>}></Route>
        <Route path="/" element={<h1>Home</h1>}></Route>
      </Routes>
    </>
  );
}
