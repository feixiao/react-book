import React, { Component } from "react";

class PostList extends Component {
  render() {
    return (
      <div>
        帖子列表：
        <ul>
          <li>大家一起来讨论React吧</li>
          <li>前端框架，你最爱哪一个</li>
          <li>Web App的时代已经到来</li>
        </ul>
      </div>
    );
  }
}

// 注意， 在定义组件之后， 使用ES 6 export将PostList作为默认模块导出，
// 从而可以在其他JS文件中导入PostList使用。 
export default PostList;
