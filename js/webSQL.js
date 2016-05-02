/// <reference path="Scripts/jquery-1.4.1-vsdoc.js" />

var webStorage = {};
webStorage.webSql = function () {
    var _this = this;
    //数据库
    var _dataBase;

    //打开数据库连接或者创建数据库
    this.openDatabase = function () {
        if (!!_dataBase) {//!!强制转换成boolean型
            return _dataBase;
        }
        _dataBase = openDatabase("address", "1.0", "地址数据库", 1024 * 1024, function () { });
        return _dataBase;
    }




    //创建数据表
    this.createTable = function () {
        var dataBase = _this.openDatabase();
        // 创建表
        dataBase.transaction(function (tx) {//处理事务
            tx.executeSql(
                "create table if not exists addr (id REAL UNIQUE, name TEXT, telephone TEXT, location TEXT)",
                [],
                function () { 
                    alert('创建addr表成功'); 
                },function (tx, error) {
                    alert('创建addr表失败:' + error.message);
            });
        });
    }

    //添加数据
    this.insert = function (name, tel, addr) {
        var dataBase = _this.openDatabase();
        var id = Math.random();
        dataBase.transaction(function (tx) {
            tx.executeSql(
                "insert into addr (id, name, telephone, location) values(?, ?, ?, ?)",
                [id, name, tel, addr],
                function () { 
                    alert('添加数据成功'); 
                },function (tx, error) {
                    alert('添加数据失败: ' + error.message);
            });
        });
    }

    // 查询
    this.query = function (obj) {
        var dataBase = _this.openDatabase();
        dataBase.transaction(function (tx) {
            tx.executeSql(
                "select * from addr", [],
                 function (tx, result) {
                     $(obj).children().remove();
                     for (var i = 0; i < result.rows.length; i++) {
                         var id = result.rows.item(i)['id'];
                         var name = result.rows.item(i)['name'];
                         var tel = result.rows.item(i)['telephone'];
                         var location = result.rows.item(i)['location'];
                         var addHtml = "";
                         addHtml += "<div class=item>";
                         addHtml += "<span class='name'>" + name + "</span>";
                         addHtml += "<span class='tel'>" + tel + "</span>";
                         addHtml += "<p>" + location + "</p>";
                         addHtml += "<div class='item_btn'><a class='choose' href='./mine.html'>选中</a><a id='" + id + "' class='edit'>编辑</a><div class='clear'></div>";
                         addHtml += "</div>"
                         $(obj).append(addHtml);
                         $(".edit").click(function() {
                             $(this).attr("href", "./address_edit.html");
                             sessionStorage.setItem("id", id);
                             sessionStorage.setItem("name", name);
                             sessionStorage.setItem("tel", tel);
                             sessionStorage.setItem("location", location);
                         });

                         // $dataItem.append("<a id='" + id + "' href='javascript:;'>把名字更新为徐明祥</a>&nbsp;");
                         // $dataItem.append("<a id='" + id + "' href='javascript:;'>把名字更新为祥叔</a>&nbsp;");
                         // $dataItem.append("<a id='" + id + "' href='javascript:;'>删除</a>&nbsp;");
                         // $($dataItem.find("a")[0]).click(function () {
                         //     webSql.update($(this).attr("id"), '徐明祥');
                         // });

                         // $($dataItem.find("a")[1]).click(function () {
                         //     webSql.update($(this).attr("id"), '祥叔');
                         // });

                         // $($dataItem.find("a")[2]).click(function () {
                         //     webSql.del($(this).attr("id"));
                         //     _this.query();
                         // });

                         $("obj").append(addHtml);

                     }
                 },
                function (tx, error) {
                    alert('查询失败: ' + error.message);
                });
        });
    }

    //更新数据
    this.update = function (id, name) {
        var dataBase = _this.openDatabase();
        dataBase.transaction(function (tx) {
            tx.executeSql(
                "update addr set (name, telephone, location) where id= ?",
                [name, telephone, location, id],
                 function (tx, result) {
                     _this.query();
                 },
                function (tx, error) {
                    alert('更新失败: ' + error.message);
                });
        });
    }

    //删除数据
    this.del = function (id) {
        var dataBase = _this.openDatabase();
        dataBase.transaction(function (tx) {
            tx.executeSql(
                "delete from  addr where id= ?",
                [id],
                 function (tx, result) {

                 },
                function (tx, error) {
                    alert('删除失败: ' + error.message);
                });
        });
    }

    //删除数据表
    this.dropTable = function () {
        var dataBase = _this.openDatabase();
        dataBase.transaction(function (tx) {
            tx.executeSql('drop  table  addr');
        });
    }


}

var webSql = new webStorage.webSql();