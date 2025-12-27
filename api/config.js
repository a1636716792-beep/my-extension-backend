export default function handler(request, response) {
  // status: 200 表示成功
  response.status(200).json({ 
    enable: true,       // 控制开关：true 开启，false 关闭
    message: "插件正常运行",
    version: "3.0"
  });
}