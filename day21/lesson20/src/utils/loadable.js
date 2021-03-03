import React from "react";
import Loadable from "react-loadable";


// 加载动画
const loadingComponent = () => {
  return <div>
    <div>正在加载内容</div>
  </div>;
};

// 当不传加载动画时候使用默认的加载动画
export default (loader, loading = loadingComponent) => {
  return Loadable({
    loader,
    loading,
  });
};
