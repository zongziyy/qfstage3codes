import React, { Component } from 'react'
import  shoppingcar  from "../model/shoppingcar"

export default class Menu4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkall: false,//全选的状态
            list: [{ id: 1, goodsname: "商品一", goodsnum: 1, goodsprice: 200, ischecked: false }, { id: 2, goodsname: "商品二", goodsnum: 20, goodsprice: 100, ischecked: false }, { id: 3, goodsname: "商品三", goodsnum: 2, goodsprice: 300, ischecked: false }],
            totalnum:0,
            totalprice:0
        }
    }
    //生命周期
   async componentDidMount(){
       let  list=await shoppingcar.list();
       console.log(list.data);
    }


    add = (item) => {//加法
        this.setState({
            list: this.state.list.map(goodsinfo => {
                if (goodsinfo.id == item.id) {
                    goodsinfo.goodsnum++;
                }
                return goodsinfo;
            })
        },()=>{
            this.computed();
        })
    }
    reduce = (item) => {//减法
        this.setState({
            list: this.state.list.map(goodsinfo => {
                if (goodsinfo.id == item.id) {
                    goodsinfo.goodsnum--;
                }
                return goodsinfo;
            })
        },()=>{
            this.computed();
        })
    }
    bindCheckOne = (item) => {//点的是哪个 就让状态改成和以前是相反的
        this.setState({
            list: this.state.list.map(goodsinfo => {
                if (goodsinfo.id == item.id) {
                    goodsinfo.ischecked = !goodsinfo.ischecked;
                }
                return goodsinfo;
            })
        },()=>{//判断全选
            this.setCheckAll();
        })
    }

    setCheckAll(){//设置全选的事件

        this.setState({
            checkall:this.state.list.every(item=>item.ischecked)
        },()=>{
            this.computed();
        })

    }

    bindCheckAll=()=>{//全选的点击事件
        this.setState({
            checkall:!this.state.checkall
        },()=>{
            this.setState({
                list:this.state.list.map(item=>{
                    item.ischecked = this.state.checkall;
                    return item;
                })
            },()=>{
                this.computed();
            })
        })
    }
    deleteOne = (id)=>{
        this.setState({
            list:this.state.list.filter(item=>item.id!=id)
        },()=>{
            this.setCheckAll();
            this.computed();
        })
    }

    computed=()=>{
        let  num=0;
        let  price =0;
        this.state.list.forEach(item=>{
            if(item.ischecked){
                num += item.goodsnum*1;
                price += item.goodsnum * item.goodsprice;
            }
        })
        this.setState({
            totalnum:num,
            totalprice:price
        })

    }
    deleteAll = ()=>{//批量删除
        this.setState({
            list:this.state.list.filter(item=>!item.ischecked),
            totalprice:0,
            totalnum:0,
            checkall:false
        })

    }
    render() {

        let resultList = this.state.list.map(item => {

            return <div className="tr" key={item.id}>
                <div className="tr-item">
                    <input type="checkbox" checked={item.ischecked} onChange={() => {
                        this.bindCheckOne(item);
                    }} />
                </div>
                <div className="tr-item">
                    {item.goodsname}
                </div>
                <div className="tr-item">
                    {item.goodsprice}
                </div>
                <div className="tr-item">
                    {item.goodsnum > 1 ? <button onClick={() => {
                        this.reduce(item);
                    }}>-</button> : ""}

                    <input value={item.goodsnum} onChange={() => {

                    }} />
                    <button onClick={() => {//加法
                        this.add(item);
                    }}>+</button>
                </div>
                <div className="tr-item">
                    {item.goodsnum * item.goodsprice}
                </div>
                <div className="tr-item" onClick={()=>{
                    this.deleteOne(item.id);
                }}>
                    删除
            </div>
            </div>;

        })
        return (
            <div className="table">
                <div className="tr">
                    <div className="tr-item">
                        <input type="checkbox" checked={this.state.checkall} onChange={()=>{
                            this.bindCheckAll();
                        }} />全选
                    </div>
                    <div className="tr-item">
                        商品名称
                    </div>
                    <div className="tr-item">
                        商品价格
                    </div>
                    <div className="tr-item">
                        商品数量
                    </div>
                    <div className="tr-item">
                        小计
                    </div>
                    <div className="tr-item">
                        操作
                    </div>
                </div>

                {resultList}
                <div className="tr">
                <div className="tr-item" onClick={()=>{
                    this.deleteAll();
                }}>
                       批量删除
                       </div>
                <div className="tr-item">
                       
                    </div>
                    <div className="tr-item">
                       
                    </div>
                    <div className="tr-item">
                       总数{this.state.totalnum}
                    </div>
                    <div className="tr-item">
                        总价{this.state.totalprice}
                    </div>
                    <div className="tr-item">
                        
                    </div>
                </div>

            </div>
        )
    }
}
