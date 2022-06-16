module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  // error 报错退出； warn: 警告 ，false : 不检查
  rules: {
    'no-unused-vars': 'warn', // 是否支持未使用的变量
    'no-var': 'warn', // 是否禁用var
    'no-eval': 'error',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', //是否禁止debugger,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', //是否禁止console.log,
    // 强制"for"循环中更新子句的计算器朝着正确的方向移动
    'for-direction': 2,
    // 禁止function定义中出现重名参数
    'no-dupe-args': 2,
    // 禁止对象字面量中出现重复的key
    'no-dupe-keys': 2,
    // 禁止出现重复的case标签
    'no-duplicate-case': 2,
    // vue相关
    'vue/prop-name-casing': ['error', 'camelCase'], // prop名大小写：在声明 prop 的时候，其命名应该始终使用 camelCase
    'vue/require-prop-types': 'error', // props定义尽量详细
    'vue/require-v-for-key': 'error', // v-for设置键值，与key结合使用
    'vue/no-use-v-if-with-v-for': [
      'error',
      {
        allowUsingIterationVar: false,
      },
    ],
    //不要把 v-if 和 v-for 用在同一个元素上
    // 'vue/max-attributes-per-line': [
    //   'error',
    //   {
    //     singleline: 1,
    //     multiline: {
    //       max: 1,
    //       allowFirstLine: false,
    //     },
    //   },
    // ], //多个特性的元素应该分多行撰写，每个特性一行
  },
};
