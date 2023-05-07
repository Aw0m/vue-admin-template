<template>
    <div style="padding: 10px">
        <div style="background: #fff; border-radius: 8px; padding: 20px;">
<!--            <div class="query-c">-->
<!--                查询：-->
<!--                <Input search placeholder="请输入查123询内容" style="width: auto" />-->
<!--            </div>-->
            <br>
            <el-button type="primary" @click="dialogTableVisible = true">添加category</el-button>
            <el-dialog title="添加分类" :visible.sync="dialogTableVisible">
                <el-form :model="newCategoryName">
                    <el-form-item label="新建分类名称" :label-width="formLabelWidth">
                        <el-input v-model="newCategoryName" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogTableVisible = false">取 消</el-button>
                    <el-button type="primary" @click="addCategory">确 定</el-button>
                </div>
            </el-dialog>

            <el-button type="info" @click="dialogFormVisible = true">删除category</el-button>

            <el-dialog title="删除分类" :visible.sync="dialogFormVisible">
                <el-form :model="deleteCategoryID">
                    <el-form-item label="删除的分类的id" :label-width="formLabelWidth">
                        <el-input v-model="deleteCategoryID" autocomplete="off"></el-input>
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
import { addCategory, deleteCategory, getCategoryList } from '@/api/category'

export default {
    name: 'category',
    methods: {
        async addCategory() {
            let rsp = await addCategory({category_name: this.newCategoryName})
            if (rsp.message !== 'success') {
                alert(`add Category fail! ERROR:${rsp.message}`);
                return
            }
            this.dialogTableVisible = false;

            // 重新拉取最新的分类信息
            rsp = await getCategoryList();
            if (rsp.message === 'success') {
                this.categoryData = rsp.rsp.category_list;
            } else {
                console.log('getCategoryInfo fail, rsp:', rsp);
            }
        },
        async deleteCategory() {
            let rsp = await deleteCategory(this.deleteCategoryID)
            if (rsp.message !== 'success') {
                alert(`delete Category fail! ERROR:${rsp.message}`);
                return;
            }
            this.dialogFormVisible = false;
            // 重新拉取最新的分类信息
            rsp = await getCategoryList();
            if (rsp.message === 'success') {
                this.categoryData = rsp.rsp.category_list;
            } else {
                console.log('getCategoryInfo fail, rsp:', rsp);
            }
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
            newCategoryName: '',
            deleteCategoryID: '',
            formLabelWidth: '120px'
        }
    },
}
</script>

<style scoped>

</style>
