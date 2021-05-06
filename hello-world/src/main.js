import Vue from 'vue'
import App from './App.vue'
import {
  Notify,
  Toast,
  Button,
  Row,
  Col,
  Cell,
  Tag,
  Icon,
  List,
  PullRefresh,
  Loading,
  Overlay,
  Swipe, 
  SwipeItem,
  Lazyload,
  Divider,
  CountDown,
  Popup,
  Dialog,
  Progress,
  Calendar
} from 'vant'
Vue.use(Notify)
  .use(Toast)
  .use(Button)
  .use(Row)
  .use(Col)
  .use(Cell)
  .use(Tag)
  .use(Icon)
  .use(List)
  .use(PullRefresh)
  .use(Overlay)
  .use(Loading)
  .use(Overlay)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload, {
    lazyComponent: true,
  })
  .use(Divider)
  .use(CountDown)
  .use(Popup)
  .use(Dialog)
  .use(Progress)
  .use(Calendar)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
