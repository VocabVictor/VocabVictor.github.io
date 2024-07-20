var posts=["2024/06/23/如何快速下载huggingface模型——全方法总结/","2024/07/20/GGUF格式大模型推理方法总结/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };