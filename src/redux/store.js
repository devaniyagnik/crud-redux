// store.js
import { createStore } from "redux";
import usereducer from "./reducer/Userreducer";

const store = createStore(usereducer);

export default store;
