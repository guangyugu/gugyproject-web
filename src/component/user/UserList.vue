<template>
    <div id="UserList">
        <pro-header></pro-header>
        <br/>
        <h1>用户列表</h1>
        <Table :columns="userColumns" :data="userData" border :loading="loading">
            <template slot-scope="{ row }" slot="name">
                <strong>{{ row.name }}</strong>
            </template>
            <template slot-scope="{ row, index }" slot="action">
                <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</Button>
                <Button type="error" size="small" @click="remove(index)">Delete</Button>
            </template>
        </Table>
    </div>
</template>

<script>
    import ProHeader from "../proHeader";

    export default {
        name: "UserList",
        components: {ProHeader},
        data() {
            return {
                loading: true,
                page: '',
                pageSize: '',
                userColumns: [
                    {
                        title: '序号',
                        key: 'id'
                    },
                    {
                        title: '姓名',
                        key: 'userName'
                    },
                    {
                        title: '账号',
                        key: 'userAccount'
                    },
                    {
                        title: '联系方式',
                        key: 'phoneNumber'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    },
                    {
                        title: '是否启用',
                        key: 'enabled'
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        width: 200,
                        align: 'center'
                    }
                ],
                userData: []
            }
        },
        created() {
            this.getUserList();
        },
        methods: {
            getUserList() {
                const params = {
                    page: 1,
                    pageSize: 20
                }
                this.$api.getUserList(params).then(res => {
                    this.userData = res.data;
                    this.loading = false;
                    console.log(this.userData);
                }).catch(err => {
                    console.log(err);
                })
            },
            show(index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            remove(index) {
                this.data6.splice(index, 1);
            }
        }
    }
</script>

<style scoped>

</style>
