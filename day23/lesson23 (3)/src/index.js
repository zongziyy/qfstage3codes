import react from "react";
import reactDom  from  "react-dom";
import App from "./App";
import  store from  "./store";
import  {Provider} from "react-redux"
import 'antd/dist/antd.css';

reactDom.render(<Provider store={store}><App></App></Provider>,document.getElementById("root"));