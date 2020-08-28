//得到url中的querystring中的id
var getParam = function(key) {
    var querystring = location.search.slice(1);
    var arr = querystring.split("&");
    for (var i = 0; i < arr.length; i++) {
        var subArr = arr[i].split("=");
        if (key === subArr[0]) {
            return subArr[1];
        }
    }
}
var id = getParam("id");

var box = document.getElementById("box");

//数据库请求数据，渲染页面
QF.get("/php/getGoodsinfoByid.php",{id},({error,data}) => {
    console.log(data)
    box.innerHTML = `
            <div class="col-6">
                <div class="card">
                    <img src="${data.goods_big_logo}" class="card-img-top" alt="">
                </div>
            </div>
            <div class="col-6">
                <h2 class="card-text">${data.goods_name}</h2>
                <h3 class="d-flex justify-content-center">库存：${data.goods_number}</h3>
                <h3 class="d-flex justify-content-center">价格：￥${data.goods_price}</h3>
                <button class="btn btn-primary">加入购物车</button>
            </div>
        ${data.goods_introduce}
    `
})