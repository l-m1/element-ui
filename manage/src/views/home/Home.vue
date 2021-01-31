<template>
    <el-container class="home-container">
      <el-header>
        <!-- 头部 -->
        <div class="header">
          <img src="../../assets/img/title.png" alt="">
          <span>电商后台管理系统</span>
        </div>
        <el-button type="info" @click="back">退出</el-button>
      </el-header>
      <!-- 主体部分 -->
      <el-container>
        <!-- 左侧 -->
        <el-aside width="200px">
          <!-- 左侧 菜单项 -->
          <el-menu
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <!-- 一级菜单 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>一级菜单</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index="1-1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>二级菜单</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
        </el-aside>
        <!-- 右侧主体内容 -->
        <el-main>Main</el-main>
      </el-container>
    </el-container>
</template>
<script>
export default {
  name: 'Home',
  methods: {
    back() {
      window.sessionStorage.clear('token');
      this.$router.push('/login')
    }
  }
}
</script>
<style scoped>
  .home-container {
    height: 100vh;
  }
  .el-header {
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 0;
    font-size: 20px;
    color: #fff;
  }
  .el-header .header {
    display: flex;
    align-items: center;
  }
  .el-header .header span {
    margin-left: 10px;
  }
  .el-aside {
    background-color: #333744;
  }
  .el-main {
    background-color: #eaedf1;
  }
</style>