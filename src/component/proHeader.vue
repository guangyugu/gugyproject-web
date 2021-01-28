<template>
    <div class="toplayout">
        <div class="layout-logo-user">
        </div>
        <Menu mode="horizontal" theme="light" active-name="1">
            <div class="layout-nav">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-stats"/>
                        用户列表
                    </template>
                    <MenuGroup title="使用">
                        <router-link to="/userList"><MenuItem name="1-1">用户列表</MenuItem></router-link>
                        <MenuItem name="1-2">活跃分析</MenuItem>
                        <MenuItem name="1-3">时段分析</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="留存">
                        <MenuItem name="1-4">用户留存</MenuItem>
                        <MenuItem name="1-5">流失用户</MenuItem>
                    </MenuGroup>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-stats"/>
                        统计分析
                    </template>
                    <MenuGroup title="使用">
                        <MenuItem name="2-1">新增和启动</MenuItem>
                        <MenuItem name="2-2">活跃分析</MenuItem>
                        <MenuItem name="2-3">时段分析</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="留存">
                        <MenuItem name="2-4">用户留存</MenuItem>
                        <MenuItem name="2-5">流失用户</MenuItem>
                    </MenuGroup>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-stats"/>
                        统计分析
                    </template>
                    <MenuGroup title="使用">
                        <MenuItem name="3-1">新增和启动</MenuItem>
                        <MenuItem name="3-2">活跃分析</MenuItem>
                        <MenuItem name="3-3">时段分析</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="留存">
                        <MenuItem name="3-4">用户留存</MenuItem>
                        <MenuItem name="3-5">流失用户</MenuItem>
                    </MenuGroup>
                </Submenu>
                <Submenu name="4">
                    <template slot="title">
                        <Icon type="ios-stats"/>
                        统计分析
                    </template>
                    <MenuGroup title="使用">
                        <MenuItem name="4-1">新增和启动</MenuItem>
                        <MenuItem name="4-2">活跃分析</MenuItem>
                        <MenuItem name="4-3">时段分析</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="留存">
                        <MenuItem name="4-4">用户留存</MenuItem>
                        <MenuItem name="4-5">流失用户</MenuItem>
                    </MenuGroup>
                </Submenu>
            </div>
        </Menu>
    </div>
</template>

<script>
    export default {
        name: "proHeader",
    }
</script>

<style scoped>
    .toplayout {
        margin-top: -50px;
    }

    .layout-logo {
        width: 100px;
        height: 30px;
        background: #f5f7f9;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }

    .layout-logo-user {
        width: 120px;
        height: 35px;
        background: #f5f7f9;
        margin-left: 1750px;
    }

    .layout-nav {
        width: 600px;
        margin: 0 auto;
        margin-right: 20px;
    }

    .layout-footer-center {
        text-align: center;
    }
</style>
