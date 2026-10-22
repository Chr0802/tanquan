# 探圈（tanquan）

基于 Vue 2 的校园社交 / 圈子社区前端项目，包含「探圈」「探求」「探人」三个一级栏目，以及圈子动态、圈子精英、圈子库、我的等子页面。

界面基于 Element UI 栅格与组件搭建，数据通过 axios 请求接口，开发阶段由 Mock.js 拦截并生成假数据，无需后端即可运行。

## 技术栈

| 用途 | 技术 |
| --- | --- |
| 框架 | Vue 2.5 |
| 路由 | vue-router 3 |
| 状态管理 | Vuex 3 |
| UI 组件 | Element UI 2（按需引入） |
| 网络请求 | axios（封装为 `src/api/ajax.js`） |
| 数据模拟 | Mock.js |
| 图片懒加载 | vue-lazyload |
| 构建工具 | webpack 3（vue-cli 2 webpack 模板） |
| 代码规范 | ESLint + EditorConfig |

## 页面与路由

| 路径 | 页面 | 说明 |
| --- | --- | --- |
| `/` | home | 首页，顶部导航 + 背景大图 + 页脚 |
| `/tanquan` | tanquan | 探圈，二级栏目容器： |
| `/tanquan/probing` | probing | 圈子动态（默认子路由），信息流 + 侧边栏榜单 |
| `/tanquan/elite` | elite | 圈子精英，精英列表、标签筛选弹窗、精英榜 |
| `/tanquan/library` | library | 圈子库（占位页） |
| `/tanquan/me` | me | 我的（占位页） |
| `/tanqiu` | tanqiu | 探求（占位页） |
| `/tanren` | tanren | 探人（占位页） |

探圈下的子页面通过 `<keep-alive>` 缓存，切换标签页时不会重复请求数据。

## 目录结构

```
├── build/                 # webpack 构建配置（vue-cli 2 模板）
├── config/                # 开发 / 测试 / 生产环境配置，devServer 端口 8080
├── src/
│   ├── api/
│   │   ├── ajax.js        # axios 封装，统一返回 response.data
│   │   └── index.js       # 接口定义，统一前缀 /api
│   ├── components/
│   │   ├── headNav.vue    # 公共顶部导航
│   │   ├── footBar.vue    # 公共页脚
│   │   ├── probing.vue    # 圈子动态
│   │   ├── elite.vue      # 圈子精英
│   │   ├── library.vue    # 圈子库
│   │   └── me.vue         # 我的
│   ├── mock/
│   │   ├── mockServer.js  # Mock.js 接口拦截与数据生成
│   │   └── data.json
│   ├── pages/             # 一级页面路由组件
│   ├── router/index.js    # 路由表
│   ├── store/             # Vuex：state / mutations / actions / getters
│   ├── App.vue            # 根组件与全局样式
│   └── main.js            # 入口：注册路由、Vuex、Element UI 组件、懒加载、Mock
├── static/                # 静态资源（图片，构建时原样拷贝）
├── test/                  # 单元测试（Karma + Mocha）与 E2E 测试（Nightwatch）
└── index.html             # HTML 模板
```

## 快速开始

环境要求：Node.js >= 6，npm >= 3（旧版 webpack 3 工具链，建议使用 Node 8 ~ 10 运行，Node 17+ 存在 OpenSSL 兼容问题）。

```bash
# 安装依赖
npm install

# 启动开发服务器（热更新），默认 http://localhost:8080
npm run dev

# 打包生产版本，输出到 dist/
npm run build

# 打包并查看体积分析报告
npm run build --report

# 单元测试
npm run unit

# E2E 测试
npm run e2e

# 全部测试
npm test
```

## 数据接口

- 所有接口以 `/api` 为前缀，定义在 [src/api/index.js](src/api/index.js)，请求函数统一通过 [src/api/ajax.js](src/api/ajax.js) 发出。
- 开发环境下，[src/mock/mockServer.js](src/mock/mockServer.js) 会拦截 `/api/elites` 并用 Mock.js 随机生成 5~10 条精英数据（昵称、地区、头像、指数、学校等）。
- 数据流：组件 `mounted` 中 dispatch `getElites` → action 调用 `reqElites()` → 成功后 commit mutation 写入 `state.elites` → 组件通过 `mapState` 渲染。
- 接入真实后端时，删除 `main.js` 中的 mock 引入，或在 `config/index.js` 的 `proxyTable` 中配置代理，并让后端按 `{ code: 0, elites: [...] }` 的格式返回数据。

## 说明

- Element UI 采用按需引入（`Row`、`Col`、`Dialog`、`Popover`），新增组件时需在 `src/main.js` 中注册。
- 探索求、探人、圈子库、我的页面目前仅为占位，后续可在此目录结构上继续开发。
