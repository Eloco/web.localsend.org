export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // 将请求转发到官方 LocalSend Web
    url.hostname = 'web.localsend.org';

    const modifiedRequest = new Request(url, request);
    return fetch(modifiedRequest);
  }
}
