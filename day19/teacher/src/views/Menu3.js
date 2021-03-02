import React, { Component } from 'react'

export default class Menu3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: { value: "", className: "error", tip: "长度6到10位只能数字字母_$组成不能以数字开头", pattern: /^[a-z_$][0-9a-z_$]{5,9}$/i, flag: false },
            usertel: { value: "", className: "error", tip: "请输入常用的手机号", pattern: /^1[3-9][0-9]{9}$/, flag: false },
            userpwd: { value: "", className: "error", tip: "长度6到10位的数字字母", pattern: /^[0-9a-z]{6,10}$/i, flag: false }
        }
    }
    checkAttr = (attr, tip,fn) => {
        if (this.state[attr].pattern.test(this.state[attr].value)) {
            //正确了 
            this.setState({
                [attr]: { ...this.state[attr], tip: "√", className: "success", flag: true }
            },()=>{
                if(fn){
                    fn()
                }
               
            })
        } else {
            this.setState({
                [attr]: { ...this.state[attr], tip, className: "error", flag: false }
            })
        }
    }

    submit = () => {

        //所有验证都通过以后 才能提交
        if (this.state.username.flag && this.state.userpwd.flag && this.state.usertel.flag) {
            alert("提交的内容为姓名" + this.state.username.value + "手机号" + this.state.usertel.value + "密码" + this.state.userpwd.value);
            //重新验证一下密码

        } else {
            alert("请注意红色错误");
        }

        // if(this.state.userpwd.pattern.test(this.state.userpwd.value)){
        //     //正确了 
        //     this.setState({
        //         userpwd:{...this.state.userpwd,tip:"√",className:"success"}
        //     })
        // }else{
        //     this.setState({
        //         userpwd:{...this.state.userpwd,tip:"长度6到10位的数字字母",className:"error"}
        //     })
        // }
        // if(this.state.usertel.pattern.test(this.state.usertel.value)){
        //     //正确了 
        //     this.setState({
        //         usertel:{...this.state.usertel,tip:"√",className:"success"}
        //     })
        // }else{
        //     this.setState({
        //         usertel:{...this.state.usertel,tip:"请输入常用的手机号",className:"error"}
        //     })
        // }


    }

    render() {
        return (
            <div>
                <div>用户名
                    <input value={this.state.username.value} onChange={(e) => {
                        this.setState({
                            username: { ...this.state.username, value: e.target.value }
                        }, () => {
                            this.checkAttr("username", "长度6到10位只能数字字母_$组成不能以数字开头");
                        });//更新成功以后 再去验证


                    }} />  <span className={this.state.username.className}>
                        {this.state.username.tip}
                    </span>
                </div>
                <div>手机号
                    <input value={this.state.usertel.value} onChange={(e) => {
                        this.setState({//更新数据
                            usertel: { ...this.state.usertel, value: e.target.value }
                        }, () => {
                            this.checkAttr("usertel", "请输入常用的手机号");

                        })


                    }} />
                    <span className={this.state.usertel.className}>{this.state.usertel.tip}</span>
                </div>
                <div>密码
                    <input value={this.state.userpwd.value} onChange={
                        (e) => {
                            this.setState({
                                userpwd: { ...this.state.userpwd, value: e.target.value }
                            }, () => {
                                this.checkAttr("userpwd", "长度6到10位的数字字母",()=>{
                                    let numReg = /[0-9]/;
                                    let upperReg = /[A-Z]/;
                                    let lowerReg = /[a-z]/;
                                    let { value: userpwdValue } = this.state.userpwd;//解构 取别名
                                    let tip = `<button style='width:50px;background:gray'>弱</button>`;
                                    switch (numReg.test(userpwdValue) + upperReg.test(userpwdValue) + lowerReg.test(userpwdValue)) {//强中弱的判断
                                        case 2:
                                            tip = `<button style='width:100px;background:yellow'>中</button>`;
                                            break;
                                        case 3:
                                            tip = "<button style='width:150px;background:green'>强</button>";
                                            break;
                                    }
                                    this.setState({
                                        userpwd: { ...this.state.userpwd, tip }
                                    })

                                });
                            

                            })
                    }
                    }/>  <span className={this.state.userpwd.className} dangerouslySetInnerHTML={{ __html: this.state.userpwd.tip }}>

                    </span>
                </div>
                <button onClick={() => {
                    this.submit();
                }}>提交</button>
            </div>
        )
    }
}
