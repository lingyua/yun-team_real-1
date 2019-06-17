// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:"cloundteam-zngfx",
})
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();
console.log(event);
  return await db.collection('feedback').add({
    data: {
      feedinfo:event.feedinfo,
      Nowtime: event.Nowtime,
      nickname: event.nickname,
      touxiang: event.touxiang,
    },
    
  })
}