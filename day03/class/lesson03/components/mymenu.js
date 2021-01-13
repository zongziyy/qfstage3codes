let  html  =`<div class="menu">
<div class="menu-item" v-for="item in menulist" :key="item.id" :class="{selected:item.id==selectedIndex}" @click="changeId(item.id)">
    {{item.menuname}}
</div>
</div>`
let mymenu = {
    template: html,
    data() {
        return {
            selectedIndex:1,
            menulist: [{
                id: 1, menuname: "菜单一"
            }, {
                id: 2, menuname: "菜单二"
            }, {
                id: 3, menuname: "菜单三"
            }, {
                id: 4, menuname: "菜单四"
            }, {
                id: 5, menuname: "菜单五"
            }]
        }
    },
    methods:{
        changeId(id){
           this.selectedIndex =id;
        }
    }

}