import React from 'react'
import PropTypes from 'prop-types'
import { Router } from 'dva/router'

const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model)
  }
}

const Routers = function ({ history, app }) {
  const routes = [

    /**
     * 注意！
     * 下面的路由是app组件下面的子组件，需要权限
     */
    {
      path: '/',
      getComponent (nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/app'))
          cb(null, require('./routes/app'))
        }, 'app')
      },
      getIndexRoute (nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/dashboard'))
          cb(null, { component: require('./routes/dashboard/') })
        }, 'dashboard')
      },
      childRoutes: [
        {
          path: 'home',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./routes/home/'))
            }, 'home')
          },
        },

        {
          path: 'start',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/start'))
              cb(null, require('./routes/start/'))
            }, 'start')
          },
        },
        {
          path: 'register',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/register'))
              cb(null, require('./routes/register/'))
            }, 'register')
          },
        },
        {
          path: 'dashboard',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/dashboard'))
              cb(null, require('./routes/dashboard/'))
            }, 'dashboard')
          },
        }, {
          path: 'users',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/users'))
              cb(null, require('./routes/users/'))
            }, 'users')
          },
        }, {
          path: 'users/:id',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/user/detail'))
              cb(null, require('./routes/users/detail/'))
            }, 'users-detail')
          },
        }, {
          path: 'login',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/login'))
              cb(null, require('./routes/login/'))
            }, 'login')
          },
        }, {
          path: 'testItems',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/testItems'))
              cb(null, require('./routes/testIems'))
            }, 'testItems')
          },
        }, {
          path: 'exams',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/exams'))
              cb(null, require('./routes/exams'))
            }, 'exams')
          },
        }, {
          path: 'papers',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/papers'))
              cb(null, require('./routes/papers'))
            }, 'papers')
          },
        }, {
          path: 'UIElement/iconfont',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./routes/UIElement/iconfont/'))
            }, 'UIElement-iconfont')
          },
        }, {
          path: 'UIElement/search',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./routes/UIElement/search/'))
            }, 'UIElement-search')
          },
        }, {
          path: 'UIElement/dropOption',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./routes/UIElement/dropOption/'))
            }, 'UIElement-dropOption')
          },
        }, {
          path: 'UIElement/layer',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./routes/UIElement/layer/'))
            }, 'UIElement-layer')
          },
        }, {
          path: 'UIElement/dataTable',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./routes/UIElement/dataTable/'))
            }, 'UIElement-dataTable')
          },
        }, {
          path: 'UIElement/editor',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./routes/UIElement/editor/'))
            }, 'UIElement-editor')
          },
        }, {
          path: 'chart/lineChart',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./routes/chart/lineChart/'))
            }, 'chart-lineChart')
          },
        }, {
          path: 'chart/barChart',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./routes/chart/barChart/'))
            }, 'chart-barChart')
          },
        }, {
          path: 'chart/areaChart',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./routes/chart/areaChart/'))
            }, 'chart-areaChart')
          },
        }, {
          path: '*',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./routes/error/'))
            }, 'error')
          },
        },
      ],
    },
  ]

  return <Router history={history} routes={routes} />
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers
