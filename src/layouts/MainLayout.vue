<template>
  <div class="common-layout">
    <el-container>
      <!--侧边菜单-->
      <el-aside :width="isCollapse?'64px':'200px'">
        <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px">-->
        <!--  <el-radio-button :label="false">expand</el-radio-button>-->
        <!--  <el-radio-button :label="true">collapse</el-radio-button>-->
        <!--</el-radio-group>-->
        <div style="height: 60px;width: 100%">

        </div>
        <el-menu
            default-active="/test1"
            class="el-menu"
            :collapse="isCollapse"
            :router="true"
        >
          <el-menu-item index="/test1">
            <el-icon>
              <icon-menu/>
            </el-icon>
            <template #title>主页</template>
          </el-menu-item>
          <el-sub-menu index="/test12">
            <template #title>
              <el-icon>
                <location/>
              </el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group>
              <template #title><span>Group One</span></template>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title><span>item four</span></template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="/test2" @click="handleClickMenu">
            <el-icon>
              <icon-menu/>
            </el-icon>
            <template #title>测试2</template>
          </el-menu-item>
          <el-menu-item index="/test">
            <el-icon>
              <document/>
            </el-icon>
            <template #title>Navigator Three</template>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon>
              <setting/>
            </el-icon>
            <template #title>Navigator Four</template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- 顶部 -->
        <el-header>
          <el-row class="header-bg" justify="space-between" align="middle">
            <el-col :span="12">
              <div class="grid-content"/>
              <el-icon v-show="isCollapse" @click="handleCollapse" :size="20">
                <expand/>
              </el-icon>
              <el-icon v-show="!isCollapse" @click="handleCollapse" :size="20">
                <fold/>
              </el-icon>
            </el-col>
            <!--头部右边-->
            <el-col :span="12">
              <div class="grid-content ky-flex ky-flex-right ky-flex-align-center">
                <el-space :size="30">
                  <el-icon :size="20">
                    <bell/>
                  </el-icon>
                  <el-avatar :size="40"
                             src="https://img2.baidu.com/it/u=976187030,237040006&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"/>
                </el-space>
              </div>
            </el-col>
          </el-row>
        </el-header>

        <el-main>
          <el-tabs
              v-model="editableTabsValue"
              type="card"
              class="menu-tabs"
              closable
              @tab-remove="removeTab"
              @tab-click="handleClickTab"
          >
            <el-tab-pane
                v-for="item in editableTabs"
                :key="item.name"
                :label="item.title"
                :name="item.name"
            >
            </el-tab-pane>
          </el-tabs>
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
import {
  Document,
  Menu as IconMenu,
  Expand,
  Location,
  Setting, Fold, Bell
} from '@element-plus/icons-vue'
import {useRouter} from "vue-router";
import {TabPanelName, TabsPaneContext} from "element-plus";

const router = useRouter()
//menu是否展开
const isCollapse = ref(false)

const handleCollapse = () => {
  isCollapse.value = !isCollapse.value
}

//激活哪个tab,对应name
const editableTabsValue = ref('home')
const editableTabs = ref([
  {
    title: '主页',
    name: 'home',
    path: '/test1',
    closable: true
  },
])

const handleClickMenu = () => {
  editableTabs.value.push({
    title:'测试2',
    name:'test2',
    path:'/test2',
    closable: true
  })
  editableTabsValue.value ='test2'
}

const handleClickTab = (name: String) => {
  router.push("/test1")
  editableTabsValue.value ='home'
}

</script>

<style lang="scss" scoped>
@import "./css/MainLayout.scss";
</style>
