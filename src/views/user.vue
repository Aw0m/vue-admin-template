<template>
    <div style="padding: 10px">
        <div style="background: #fff; border-radius: 8px; padding: 20px;">
            <br>
            <br><br>
            <Table max-height="6700" border stripe :columns="userColumns" :data="userData"></Table>
            <br>
        </div>
        <div>
            <el-pagination
                background
                layout="prev, pager, next"
                :page-size="pageSize"
                :pager-count="15"
                :current-page="currPage"
                @current-change="currentPageChange"
                :total="totalUserNum">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import { getUserCount, getUserList } from '@/api/user'

export default {
    name: 'user',
    methods: {
        async getTotalUserCount() {
            const rsp = await getUserCount()
            if (rsp.message !== "success") {
                alert("拉取order count信息失败");
                return;
            }
            this.totalUserNum = Number(rsp.rsp.user_count);
            console.log(this.totalUserNum)
            console.log('totalUserNum',this.totalUserNum)
        },
        async currentPageChange(val) {
            this.currPage = val;
            const rsp = await getUserList(val, this.pageSize)
            if (rsp.message !== 'success') {
                alert("拉取order信息失败");
                return;
            }
            this.userData = rsp.rsp.user_list;
        },
    },
    created() {
        this.getTotalUserCount();{}
        this.currOrder = {};
        this.currentPageChange(1);
    },
    data() {
        return {
            pageSize: 5,
            currPage: 1,
            totalUserNum: 0,
            dialogFormVisible: false,
            currOderVisible: false,
            userColumns: [
                {
                    title: 'user_id',
                    key: 'user_id',
                },
                {
                    title: 'gender',
                    key: 'gender',
                },
                {
                    title: 'username',
                    key: 'username',
                },
                {
                    title: 'phone_num',
                    key: 'phone_num'
                },
                {
                    title: 'address_id',
                    key: 'address_id'
                }
            ],
            userData: [],
            formLabelWidth: '120px',
            userID:'',
        }
    }
}
</script>

<style scoped>

</style>
