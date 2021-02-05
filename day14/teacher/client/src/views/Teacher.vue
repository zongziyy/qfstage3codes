<template>
    <div>
        <studentadd></studentadd>
        <el-table :data="allList" border style="width: 100%">
            <el-table-column fixed prop="userid.username" label="学生姓名">
            </el-table-column>
            <el-table-column fixed prop="leaveReason" label="请假理由">
            </el-table-column>
            <el-table-column label="开始时间">
                <template slot-scope="scope">
                    <span>{{ scope.row.startDate | filterDate }}</span>
                </template>
            </el-table-column>
            <el-table-column label="结束时间">
                <template slot-scope="scope">
                    <span>{{ scope.row.endDate | filterDate }}</span>
                </template>
            </el-table-column>

            <el-table-column fixed="right" label="操作">
                <template slot-scope="scope">
                    <span v-if="scope.row.type == 1">
                        <el-button
                            type="success"
                            @click="changetype(scope.row._id, 2)"
                            >同意</el-button
                        >
                        <el-button
                            type="danger"
                            @click="changetype(scope.row._id, 3)"
                            >拒绝</el-button
                        >
                    </span>

                    <el-button type="primary" v-else-if="scope.row.type == 2"
                        >已同意</el-button
                    >
                    <el-button type="danger" v-else>已拒绝</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            background
            layout="prev, pager, next"
            :page-size="pagesize"
            :total="total"
            @current-change="getPageIndex"
        >
        </el-pagination>
    </div>
</template>

<script>
import leaveModel from "../model/leaveModel";
import { mapState, mapActions } from "vuex";
import studentadd from "../components/teacher/Add";
export default {
    data() {
        return {
            pagesize: 5,
            total: 100,
            pageindex: 1,
        };
    },
    created() {
        //查询所有请假记录  页码加载请求第一页  显示五条数据
        this.asyncInitLeaveList({
            pageindex: this.pageindex,
            shownum: this.pagesize,
            callback: (count) => {
                this.total = count;
            },
        });
    },
    computed: {
        ...mapState({ allList: (state) => state.teacher.leaveList }),
    },
    components: {
        studentadd,
    },
    methods: {
        getPageIndex(index) {
            //分页的页码改变事件
            this.pageindex = index;
            this.asyncInitLeaveList({
                pageindex: this.pageindex,
                shownum: this.pagesize,
                callback: (count) => {
                    this.total = count;
                },
            });
        },
        ...mapActions("teacher", ["asyncInitLeaveList"]), //teacher就是模块名称
        //更新方法
        // changetype(_id, type) {
        //     leaveModel.update({ _id, type }).then((res) => {
        //         let data = res.data;
        //         if (data.code == 1) {
        //             //this.$router.go(0);
        //             //不想刷新  局部更新
        //             this.allList = this.allList.map((item) => {
        //                 if (item._id == _id) {
        //                     item.type = type;
        //                 }
        //                 return item;
        //             });
        //         } else {
        //             alert("更新失败");
        //         }
        //     });
        // },
    },
};
</script>