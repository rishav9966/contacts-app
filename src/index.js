import { addContact, addFavourite, removeFavourite } from "./actionCreators";
import store from "./store";

const unsubscribe = store.subscribe(() => {
  console.log("New State", store.getState());
})

let newContact = (name, mobile, relation,email) => {
  return {
    name,
    mobile,
    relation,
    email
  };
}

store.dispatch(addContact(newContact('Rishav', '3333333333', 'self', 'itsrishavanurag@gmail.com')));
store.dispatch(addContact(newContact('Ritu', '2222222222', 'sister')))
store.dispatch(addContact(newContact('Rachana', '1111111111', 'sister')))

store.dispatch(addFavourite(1));
store.dispatch(addFavourite(2));
store.dispatch(addFavourite(3));

store.dispatch(removeFavourite(1));




// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
