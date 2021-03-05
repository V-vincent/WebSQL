// 这里写全局函数
// 生成唯一ID
function createOnlyId() {
  var random = "";
  for (var i = 0; i < 8; i++) {
    random += getRandomInt(0, 9) + "";
  }
  return random;
}
// 生成随机数
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 生成默认用户1001
function createDefaultUser() {
  var data = {
    id: '999999999',
    name: '1001',
    password: '1001',
  }
  UserDao.replaceUser(data, function (success) {
    if (success) console.log('保存成功');
  })
}