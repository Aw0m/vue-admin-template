<template>
    <div style="padding: 10px">
        <div style="background: #fff; border-radius: 8px; padding: 20px;">
            <br>
            <el-button type="primary" @click="dialogFormVisible = true">修改订单信息</el-button>

            <el-dialog title="查询订单" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="输入订单ID" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="getOrderInfo">确 定</el-button>
                </div>
            </el-dialog>

            <el-dialog title="修改订单信息" :visible.sync="currOderVisible">
                <el-form :model="currOrder">
                    <el-form-item label="order_id" :label-width="formLabelWidth">
                        <el-input :disabled="true" v-model="currOrder.order_id" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="seller_id" :label-width="formLabelWidth">
                        <el-input :disabled="true" v-model="currOrder.seller_id" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="seller_name" :label-width="formLabelWidth">
                        <el-input v-model="currOrder.seller_name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="commodity_id" :label-width="formLabelWidth">
                        <el-input :disabled="true" v-model="currOrder.commodity_id" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="commodity_name" :label-width="formLabelWidth">
                        <el-input v-model="currOrder.commodity_name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="customer_id" :label-width="formLabelWidth">
                        <el-input :disabled="true" v-model="currOrder.customer_id" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="deliveryman_name" :label-width="formLabelWidth">
                        <el-input v-model="currOrder.deliveryman_name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="deliveryman_phone_num" :label-width="formLabelWidth">
                        <el-input v-model="currOrder.deliveryman_phone_num" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="phone_num" :label-width="formLabelWidth">
                        <el-input v-model="currOrder.phone_num" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="consignee_name" :label-width="formLabelWidth">
                        <el-input v-model="currOrder.consignee_name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="address_id" :label-width="formLabelWidth">
                        <el-input :disabled="true" v-model="currOrder.address_id" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="address_detail_info" :label-width="formLabelWidth">
                        <el-input v-model="currOrder.address_detail_info" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="price" :label-width="formLabelWidth">
                        <el-input v-model="currOrder.price" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="quantity" :label-width="formLabelWidth">
                        <el-input v-model="currOrder.quantity" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="is_deleted" :label-width="formLabelWidth">
                        <el-select v-model="currOrder.is_deleted" placeholder="是否删除">
                            <el-option label="已删除" :value=true></el-option>
                            <el-option label="未删除" :value=false></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="status" :label-width="formLabelWidth">
                        <el-select v-model="currOrder.status" placeholder="订单状态">
                            <el-option label="Pending" :value=1></el-option>
                            <el-option label="Unshipped" :value=2></el-option>
                            <el-option label="Shipped" :value=3></el-option>
                            <el-option label="Completed" :value=4></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="currOderVisible = false">取 消</el-button>
                    <el-button type="primary" @click="updateOrder">确 定</el-button>
                </div>
            </el-dialog>
            <br><br>
            <Table max-height="6700" border stripe :columns="categoryColumns" :data="categoryData"></Table>
            <br>
        </div>
    </div>
</template>

<style>
</style>

<script>

export default {
    name: 'order',
    methods: {
        updateOrder() {
            this.currOderVisible = false
            alert("update order")
        },
        getOrderInfo() {
            this.dialogFormVisible = false
            //TODO 改为拉取实际的数据
            this.currOrder = {
                order_id: "414371682910277",
                seller_id: "1",
                seller_name: "深月手信",
                commodity_id: "13",
                commodity_name: "测试商品-11",
                commodity_image_url: "https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-3a.png",
                customer_id: "1",
                deliveryman_name: "",
                deliveryman_phone_num: "",
                phone_num: "15225682568",
                consignee_name: "Awom",
                address_id: 408318283305029,
                address_detail_info: "重庆市沙坪坝区重庆大学虎溪校区竹园",
                price: 10,
                quantity: 1,
                status: 1,
                create_time: "2023-05-05T23:42:43+08:00",
                update_time: "2023-05-05T23:42:43+08:00",
                is_deleted: false
            };
            this.currOderVisible = true;
        }
    },
    created() {
        this.currOrder = {};
    },
    data() {
        return {
            currOrder:{},
            dialogFormVisible: false,
            currOderVisible: false,
            categoryColumns: [
                {
                    title: '订单ID',
                    key: 'order_id',
                },
                {
                    title: 'seller_id',
                    key: 'seller_id',
                },
                {
                    title: 'seller_name',
                    key: 'seller_name',
                },
                {
                    title: 'commodity_id',
                    key: 'commodity_id',
                },
                {
                    title: 'commodity_name',
                    key: 'commodity_name',
                },
                {
                    title: 'customer_id',
                    key: 'customer_id',
                },
                {
                    title: 'deliveryman_name',
                    key: 'deliveryman_name',
                },
                {
                    title: 'deliveryman_phone_num',
                    key: 'deliveryman_phone_num',
                },
                {
                    title: 'phone_num',
                    key: 'phone_num',
                },
                {
                    title: 'consignee_name',
                    key: 'consignee_name',
                },
                {
                    title: 'address_id',
                    key: 'address_id',
                },
                {
                    title: 'address_detail_info',
                    key: 'address_detail_info',
                },
                {
                    title: 'price',
                    key: 'price',
                },
                {
                    title: 'quantity',
                    key: 'quantity',
                },
                {
                    title: 'status',
                    key: 'status',
                },
                {
                    title: 'create_time',
                    key: 'create_time',
                },
                {
                    title: 'update_time',
                    key: 'update_time',
                },
                {
                    title: 'is_deleted',
                    key: 'is_deleted',
                },
            ],
            categoryData: [
                {
                    order_id: "414371682910277",
                    seller_id: "1",
                    seller_name: "深月手信",
                    commodity_id: "13",
                    commodity_name: "测试商品-11",
                    commodity_image_url: "https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-3a.png",
                    customer_id: "1",
                    deliveryman_name: "",
                    deliveryman_phone_num: "",
                    phone_num: "15225682568",
                    consignee_name: "Awom",
                    address_id: 408318283305029,
                    address_detail_info: "重庆市沙坪坝区重庆大学虎溪校区竹园",
                    price: 10,
                    quantity: 1,
                    status: 1,
                    create_time: "2023-05-05T23:42:43+08:00",
                    update_time: "2023-05-05T23:42:43+08:00",
                    is_deleted: false
                },
            ],
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            formLabelWidth: '120px'
        }
    }
}
</script>
