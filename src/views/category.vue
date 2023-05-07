<template>
    <div style="padding: 10px">
        <div style="background: #fff; border-radius: 8px; padding: 20px;">
<!--            <div class="query-c">-->
<!--                查询：-->
<!--                <Input search placeholder="请输入查123询内容" style="width: auto" />-->
<!--            </div>-->
            <br>
            <el-button type="primary" @click="dialogFormVisible = true">添加category</el-button>

            <el-dialog title="添加分类" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="新建分类名称" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="addCategory">确 定</el-button>
                </div>
            </el-dialog>

            <el-button type="info" @click="dialogFormVisible = true">删除category</el-button>

            <el-dialog title="删除分类" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="删除的分类的id" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="deleteCategory">确 定</el-button>
                </div>
            </el-dialog>
            <br><br>
            <Table max-height="6700" border stripe :columns="categoryColumns" :data="categoryData"></Table>
            <br>
        </div>
    </div>
</template>

<script>
import { getCategoryList } from '@/api/category'

export default {
    name: 'category',
    methods: {
        addCategory() {
            this.dialogFormVisible = false;
            alert("add Category success!");
        },
        deleteCategory() {
            this.dialogFormVisible = false;
            alert("delete category success")
        },
        async getCategoryInfo() {
            const rsp = await getCategoryList();
            console.log('getCategoryInfo fail, rsp:', rsp);
            if (rsp.message === 'success') {
                this.categoryData = rsp.rsp.category_list;
            } else {
                console.log('getCategoryInfo fail, rsp:', rsp);
            }
        }
    },
    created() {
        this.getCategoryInfo();
    },
    data() {
        return {
            categoryColumns: [
                {
                    title: '商品分类ID',
                    key: 'category_id',
                },
                {
                    title: '分类名',
                    key: 'category_name',
                }
            ],
            categoryData: [],
            dialogTableVisible: false,
            dialogFormVisible: false,

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
    },
}
</script>

<style scoped>

</style>
