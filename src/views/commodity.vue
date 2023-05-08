<template>
    <div style="padding: 10px">
        <div style="background: #fff; border-radius: 8px; padding: 20px;">
            <br>
            <el-button type="primary" @click="dialogFormVisible = true">修改商品信息</el-button>

            <el-dialog title="查询商品" :visible.sync="dialogFormVisible">
                <el-form :model="commoditySearch">
                    <el-form-item label="输入商品ID" :label-width="formLabelWidth">
                        <el-input v-model="commoditySearch.commodityID" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="getCommodityInfo">确 定</el-button>
                </div>
            </el-dialog>

            <el-dialog title="修改商品信息" :visible.sync="currCommodityVisible">
                <el-form :model="currCommodity">
                    <el-form-item label="commodity_id" :label-width="formLabelWidth">
                        <el-input :disabled="true" v-model="currCommodity.commodity_id" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="commodity_name" :label-width="formLabelWidth">
                        <el-input v-model="currCommodity.commodity_name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="price" :label-width="formLabelWidth">
                        <el-input v-model="currCommodity.price" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="seller_id" :label-width="formLabelWidth">
                        <el-input :disabled="true" v-model="currCommodity.seller_id" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="category_id" :label-width="formLabelWidth">
                        <el-input v-model="currCommodity.category_id" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="is_deleted" :label-width="formLabelWidth">
                        <el-select v-model="currCommodity.is_deleted" placeholder="是否删除">
                            <el-option label="已删除" :value=true></el-option>
                            <el-option label="未删除" :value=false></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="currCommodityVisible = false">取 消</el-button>
                    <el-button type="primary" @click="updateOrder">确 定</el-button>
                </div>
            </el-dialog>
            <br><br>
            <Table max-height="6700" border stripe :columns="commodityColumns" :data="commodityData"></Table>
            <br>
        </div>
        <div>
            <el-pagination
                background
                layout="prev, pager, next"
                :page-size="5"
                :pager-count="15"
                :current-page="currPage"
                @current-change="currentPageChange"
                :total="totalOrderNum">
            </el-pagination>
        </div>
    </div>
</template>

<style>
</style>

<script>


import { getCommodityCount, getCommodityFromID, getCommodityList, updateCommodity } from '@/api/commodtiy'

export default {
    name: 'commodity',
    methods: {
        async updateOrder() {
            let rsp = await updateCommodity(this.currCommodity);
            if (rsp.message !== 'success') {
                alert("更新commodity信息失败");
                return;
            } else {
                console.log(rsp)
            }

            await this.currentPageChange(this.currPage);
            this.currCommodityVisible = false
        },
        async getCommodityInfo() {
            const rsp = await getCommodityFromID(this.commoditySearch.commodityID);
            if (rsp.message !== 'success') {
                await alert("get commodity fail! err msg:", rsp.message);
                return;
            }
            this.dialogFormVisible = false;
            this.currCommodity = rsp.rsp.commodity;
            this.currCommodityVisible = true;
        },
        async currentPageChange(val) {
            this.currPage = val;
            const rsp = await getCommodityList(val, 5, true)
            if (rsp.message !== 'success') {
                alert("拉取commodity信息失败");
                return;
            }
            this.commodityData = rsp.rsp.commodity_list;
        },
        async getTotalOrderCount() {
            const rsp = await getCommodityCount()
            if (rsp.message !== "success") {
                alert("拉取commodity count信息失败");
                return;
            }
            console.log(rsp.rsp)
            this.totalOrderNum = Number(rsp.rsp.commodity_count);
        },
    },
    created() {
        this.getTotalOrderCount();{}
        this.currCommodity = {};
        this.currentPageChange(1);
    },
    data() {
        return {
            currPage: 1,
            currCommodity:{},
            totalOrderNum: 0,
            dialogFormVisible: false,
            currCommodityVisible: false,
            commoditySearch:{
                commodityID: '',
            },
            commodityColumns: [
                {
                    title: 'commodity_id',
                    key: 'commodity_id',
                },
                {
                    title: 'commodity_name',
                    key: 'commodity_name',
                },
                {
                    title: 'price',
                    key: 'price',
                },
                {
                    title: 'seller_id',
                    key: 'seller_id',
                },
                {
                    title: 'category_id',
                    key: 'category_id',
                },
                {
                    title: 'commodity_status',
                    key: 'commodity_status',
                },
                {
                    title: 'is_deleted',
                    key: 'is_deleted',
                }
            ],
            commodityData: [],
            formLabelWidth: '125px'
        }
    }
}
</script>
