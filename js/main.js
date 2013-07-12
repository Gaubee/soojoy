avalon.config({
   interpolate: ["{$", "}"] //  要求openTag 不等于closeTag就能配置成功
})
avalon.define("soojoy", function(vm) {
    vm.shop_name = "Soojoy E-commerce Website";
    vm.author = "Gaubee";
    vm.partners = [
    	{name:"买否网",url:"http://www.maifou.net/"},
    	{name:"免费开独立网店",url:"http://www.wdwd.com/"}
    ];
    vm.copyright = "© 2005-2013 ECSHOP 版权所有，并保留所有权利。"
    vm.shop_address = "http://gaubee.github.io/soojoy";
    vm.shop_postcode = "100000";
    vm.service_phone = "18010001000";
    vm.service_email = "gaubeebangeel@gmail.com"
    vm.im = "654393589";
    vm.icp_number = "CT-8452110";


    vm.img_links = [
    {
        url:"#",
        src:"#",
        name:"买否网"
    },
    {
        url:"http://www.wdwd.com/",
        src:"#",
        name:"免费开独立网店"
    },
    {
        url:"http://www.wdwd.com/",
        src:"#",
        name:"Bingo!"
    },
    {
        url:"http://www.wdwd.com/",
        src:"#",
        name:"Bingo!"
    }];
    vm.txt_links = [
    {
        url:"#",
        name:"do买否网"
    },
    {
        url:"http://www.wdwd.com/",
        name:"Yiya店"
    },
    {
        url:"http://www.wdwd.com/",
        name:"Yahoo!!!!"
    }];
    vm.txt_links = [];
})