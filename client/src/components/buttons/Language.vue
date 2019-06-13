<template>
  <div>
     <el-dropdown>
        <span class="el-dropdown-link">
         <i class="material-icons">language</i> {{locale}} <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <span class="locale-option" @click="changeLocale('NL')">nl</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <span class="locale-option" @click="changeLocale('FR')">fr</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'language',
    computed: {
      ...mapGetters(['locale'])
    },
    methods: {
      ...mapActions(['changeLocale']),     
    },
  }
</script>

<style lang="scss" scoped>
  .el-dropdown-link {
    display: flex;
    align-items: center;
  }

  i {
    margin-right: 4px;
  }

  span {
    text-transform: uppercase;
  }
</style>
