export default function handler(request, response) {
  // 1. 设置允许跨域的 Header (关键步骤！)
  response.setHeader('Access-Control-Allow-Credentials', true);
  response.setHeader('Access-Control-Allow-Origin', '*'); // '*' 代表允许任何网站访问
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  
  // 2. 处理预检请求 (浏览器有时候会先问一下能不能连)
  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  // 3. 正常的业务逻辑
  return response.status(200).json({
    enable: false,  // 开关 true 开启，false 关闭
    message: "插件正常运行",
    version: "3.0"
  });
}



