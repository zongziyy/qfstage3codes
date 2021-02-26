<template>
    <div id="content">
        <el-row>
            <el-col :span="24">
                <h2>佛山市二十七装饰材料有限公司</h2>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <h3>订单确认书</h3>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="4"
                ><div class="grid-content bg-purple right"></div
            ></el-col>
            <el-col :span="8"
                ><div class="grid-content bg-purple-light left"></div
            ></el-col>
            <el-col :span="6"
                ><div class="grid-content bg-purple right">订单：</div></el-col
            >
            <el-col :span="6"
                ><div class="grid-content bg-purple-light left">
                    {{ this.orderid }}
                </div></el-col
            >
        </el-row>

        <el-row>
            <el-col :span="4"
                ><div class="grid-content bg-purple right">
                    订货方(甲方):
                </div></el-col
            >
            <el-col :span="8"
                ><div class="grid-content bg-purple-light left">
                    {{ partainfo.partaname }}
                </div></el-col
            >
            <el-col :span="6"
                ><div class="grid-content bg-purple right">日期：</div></el-col
            >
            <el-col :span="6"
                ><div class="grid-content bg-purple-light left">
                    {{ new Date(partainfo.date).dateFormat("yyyy-mm-dd") }}
                </div></el-col
            >
        </el-row>

        <el-row>
            <el-col :span="4"
                ><div class="grid-content bg-purple right">电 话:</div></el-col
            >
            <el-col :span="8"
                ><div class="grid-content bg-purple-light left">
                    {{ partainfo.tel }}
                </div></el-col
            >
            <el-col :span="6"
                ><div class="grid-content bg-purple right">传真：</div></el-col
            >
            <el-col :span="6"
                ><div class="grid-content bg-purple-light left">
                    {{ partbinfo.fax }}
                </div></el-col
            >
        </el-row>

        <el-row>
            <el-col :span="4"
                ><div class="grid-content bg-purple right">
                    订货方(乙方):
                </div></el-col
            >
            <el-col :span="8"
                ><div class="grid-content bg-purple-light left">
                    {{ partbinfo.partbname }}
                </div></el-col
            >
            <el-col :span="6"
                ><div class="grid-content bg-purple right"></div
            ></el-col>
            <el-col :span="6"
                ><div class="grid-content bg-purple-light left"></div
            ></el-col>
        </el-row>
        <br />
        <el-row>
            <el-col :span="2"
                ><div class="grid-content bg-purple right"></div
            ></el-col>
            <el-col :span="20"
                ><div class="grid-content bg-purple-light left">
                    兹因甲方向乙方订购下列产品，经双方议妥条款如下，以资共同遵守。
                </div></el-col
            >
        </el-row>

        <el-row>
            <el-col :span="2"
                ><div class="grid-content bg-purple right"></div
            ></el-col>
            <el-col :span="22"
                ><div class="grid-content bg-purple-light left">
                    一、货品名称、数量、金额等如下：
                </div></el-col
            >
        </el-row>
        <el-table
            :data="orderList"
            order
            style="width: 78%; margin: 5px auto"
            :summary-method="getSummaries"
            show-summary
        >
            <el-table-column prop="id" label="序号"> </el-table-column>
            <el-table-column prop="productname" label="产品名称">
            </el-table-column>
            <el-table-column prop="productmodel" label="本厂型号">
            </el-table-column>
            <el-table-column prop="productcolor" label="表面处理(颜色)">
            </el-table-column>
            <el-table-column prop="productlight" label="光源">
            </el-table-column>
            <el-table-column prop="productdirection" label="出线方向">
            </el-table-column>
            <el-table-column prop="productsize" label="规格(mm)">
            </el-table-column>
            <el-table-column prop="productnum" label="数量(支)">
            </el-table-column>
            <el-table-column prop="productprice" label="单价(元/米)">
            </el-table-column>
            <el-table-column prop="productprice" label="金额(元)">
                <template slot-scope="scope">
                    <span v-if="scope.row.productsize > 500">
                        {{
                            (
                                (scope.row.productnum *
                                    scope.row.productprice *
                                    scope.row.productsize) /
                                1000
                            ).toFixed(2)
                        }}
                    </span>
                    <span v-else>
                        {{
                            (
                                scope.row.productnum *
                                scope.row.productprice *
                                0.5
                            ).toFixed(2)
                        }}
                    </span>
                </template>
            </el-table-column>
        </el-table>
        <el-row>
            <el-col :span="2"
                ><div class="grid-content bg-purple right"></div
            ></el-col>
            <el-col :span="22"
                ><div class="grid-content bg-purple-light left">
                    二、交货期限：订单确认后第3个工作日（若需开模日期另加计5-7个工作日）
                </div></el-col
            >
        </el-row>
        <el-row>
            <el-col :span="2"
                ><div class="grid-content bg-purple right"></div
            ></el-col>
            <el-col :span="22"
                ><div class="grid-content bg-purple-light left">
                    三、运输方式：甲方自提。
                </div></el-col
            >
        </el-row>
        <el-row>
            <el-col :span="2"
                ><div class="grid-content bg-purple right"></div
            ></el-col>
            <el-col :span="22"
                ><div class="grid-content bg-purple-light left">
                    四、付款方式：全款支付，款到发货。
                </div></el-col
            >
        </el-row>
        <el-row>
            <el-col :span="2"
                ><div class="grid-content bg-purple right"></div
            ></el-col>
            <el-col :span="22"
                ><div class="grid-content bg-purple-light left">
                    五、未尽事宜：双方另行协商。
                </div></el-col
            >
        </el-row>
        <el-row>
            <el-col :span="2"
                ><div class="grid-content bg-purple right"></div
            ></el-col>
            <el-col :span="22"
                ><div class="grid-content bg-purple-light left">
                    六、说明：本订单确认书一式两份，甲乙双方各执一份。
                </div></el-col
            >
        </el-row>
        <br />
        <el-row>
            <el-col :span="4"
                ><div class="grid-content bg-purple right">
                    甲方签字(盖章):
                </div></el-col
            >
            <el-col :span="8"
                ><div class="grid-content bg-purple-light left"></div
            ></el-col>
            <el-col :span="4"
                ><div class="grid-content bg-purple right">
                    乙方签字(盖章):
                </div></el-col
            >
            <el-col :span="8"
                ><div class="grid-content bg-purple-light left">
                    佛山市二十七装饰材料有限公司
                </div></el-col
            >
        </el-row>
        <el-row>
            <el-col :span="4"
                ><div class="grid-content bg-purple right">地 址:</div></el-col
            >
            <el-col :span="8"
                ><div class="grid-content bg-purple-light left"></div
            ></el-col>
            <el-col :span="4"
                ><div class="grid-content bg-purple right">
                    乙方地 址:
                </div></el-col
            >
            <el-col :span="8"
                ><div class="grid-content bg-purple-light left">
                    佛山市南海区狮山镇颜峰大道工业园7号之5
                </div></el-col
            >
        </el-row>

        <el-row>
            <el-col :span="4"
                ><div class="grid-content bg-purple right">
                    联络电话:
                </div></el-col
            >
            <el-col :span="8"
                ><div class="grid-content bg-purple-light left"></div
            ></el-col>
            <el-col :span="4"
                ><div class="grid-content bg-purple right">
                    联络电话:
                </div></el-col
            >
            <el-col :span="8"
                ><div class="grid-content bg-purple-light left">
                    0757-85515086
                </div></el-col
            >
        </el-row>
        <el-row>
            <el-col :span="4"
                ><div class="grid-content bg-purple right">
                    经 办 人:
                </div></el-col
            >
            <el-col :span="8"
                ><div class="grid-content bg-purple-light left"></div
            ></el-col>
            <el-col :span="4"
                ><div class="grid-content bg-purple right">
                    经 办 人:
                </div></el-col
            >
            <el-col :span="8"
                ><div class="grid-content bg-purple-light left">
                    雷君豪 13726699039
                </div></el-col
            >
        </el-row>
    </div>
</template>
<style scoped>
.content {
    width: 100%;
    height: 100%;
    border: 1px solid red;
}
.el-col {
    border: 1px solid transparent;
}
.last-child {
    margin-bottom: 0;
}
.left {
    text-align: left;
}
.right {
    text-align: right;
}
</style>
<script>
import orderinfo from "../model/order";

import { mapState, mapMutations } from "vuex";
export default {
    data() {
        return {
            orderid: this.$route.params.orderid,
        };
    },
    computed: {
        ...mapState(["orderList", "partainfo", "partbinfo"]),
    },
    mounted() {
        this.getListByOrderId();
    },
    methods: {
        ...mapMutations(["initOrderList"]),
        getSummaries(param) {
            let sum = [];
            sum[0] = "合计";
            var totalnum = 0;
            var totalprice = 0;
            this.orderList.forEach((item) => {
                totalnum += item.productnum * 1;
                var size = item.productsize;
                size = size > 500 ? size : 500;
                totalprice +=
                    (size * item.productnum * item.productprice) / 1000;
            });
            sum[7] = totalnum;
            sum[9] = totalprice.toFixed(2);
            return sum;
        },
        //根据订单编号获取数据
        getListByOrderId() {
            orderinfo.list({ orderid: this.orderid }).then((resulte) => {
                console.log(resulte.data.list);
                this.initOrderList(
                    resulte.data.list.map((item, index) => {
                        item.id = index + 1;
                        return item;
                    })
                );
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.grid-content {
    text-align: justify;
    color: #00ffee;
    background-color: #fbff00;
}
</style>