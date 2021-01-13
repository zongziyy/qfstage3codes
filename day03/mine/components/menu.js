let menus = {
    template: "#menus",
    data() {
        return {

            menulist: [{
                id: 1,
                menuName: '首页',
                com: "index"
            }, {
                id: 2,
                menuName: '分类',
                com: "list"
            }, {
                id: 3,
                menuName: '购物车',
                com: "shoppingcar"
            }, {
                id: 4,
                menuName: '我的',
                com: "mine"
            }]
        }
    },
    methods: {
        changeIndex = (item) => {
            this.selectIndex = item.id
        }
    }
}