import Vue from 'vue';

const _this = new Vue()

export default {
    getUserList(params) {
        return _this.$http.get("api/demo/user/getList", params);
    },
    getTest() {
        return _this.$http.get("api/demo/test/getData", null)
    }
}
