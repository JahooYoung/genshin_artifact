import Vue from "vue"

/// #if !USE_CDN
import "element-ui/lib/theme-chalk/index.css"
import "element-ui/lib/theme-chalk/display.css"

import ElementUi, { Message, MessageBox } from "element-ui";

Vue.use(ElementUi);

// import {
//     Tree,
//     Button,
//     RadioButton,
//     RadioGroup,
//     Radio,
//     Checkbox,
//     Dialog,
//     Input,
//     Select,
//     Option,
//     OptionGroup,
//     Tabs,
//     TabPane,
//     Tag,
//     Alert,
//     Slider,
//     Icon,
//     Row,
//     Col,
//     Card,
//     Collapse,
//     CollapseItem,
//     Cascader,
//     Container,
//     Aside,
//     Main,
//     Divider,
//     Image,
//     Message,
//     MessageBox,
//     Menu,
//     MenuItem,
//     MenuItemGroup,
//     Breadcrumb,
//     BreadcrumbItem,
//     Loading,
//     Drawer,
//     Timeline,
//     TimelineItem,
//     Switch,
//     InputNumber,
//     Rate,
//     Footer,
//     Pagination,
//     Table,
//     TableColumn,
//     Popconfirm,
//     Popover,
//     Tooltip,
//     Empty,
//     Autocomplete,
//     Dropdown,
//     DropdownMenu,
//     DropdownItem,
//     Skeleton,
//     SkeletonItem,
// } from "element-ui";

// Vue.use(Skeleton)
// Vue.use(SkeletonItem)
// Vue.use(Dropdown)
// Vue.use(DropdownItem)
// Vue.use(DropdownMenu)
// Vue.use(Autocomplete)
// Vue.use(Popover)
// Vue.use(Empty)
// Vue.use(Tooltip)
// Vue.use(Popconfirm);
// Vue.use(Tree);
// Vue.use(Table);
// Vue.use(TableColumn);
// Vue.use(Pagination);
// Vue.use(Footer);
// Vue.use(Rate);
// Vue.use(InputNumber);
// Vue.use(Switch);
// Vue.use(Timeline);
// Vue.use(TimelineItem);
// Vue.use(Drawer);
// Vue.use(Loading);
// Vue.use(Dialog);
// Vue.use(Menu);
// Vue.use(MenuItem);
// Vue.use(MenuItemGroup);
// Vue.use(Input);
// Vue.use(Radio);
// Vue.use(RadioGroup);
// Vue.use(RadioButton);
// Vue.use(Checkbox);
// Vue.use(Select);
// Vue.use(Option);
// Vue.use(OptionGroup);
// Vue.use(Button);
// Vue.use(Breadcrumb);
// Vue.use(BreadcrumbItem);
// Vue.use(Tabs);
// Vue.use(TabPane);
// Vue.use(Tag);
// Vue.use(Alert);
// Vue.use(Slider);
// Vue.use(Icon);
// Vue.use(Row);
// Vue.use(Col);
// Vue.use(Card);
// Vue.use(Collapse);
// Vue.use(CollapseItem);
// Vue.use(Cascader);
// Vue.use(Container);
// Vue.use(Aside);
// Vue.use(Main);
// Vue.use(Divider);
// Vue.use(Image);

Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;
/// #endif
