import React, { Component } from "react";

class PostItem extends Component {
  render() {
    // 组件的props用于把父组件中的数据或方法传递给子组件， 供子组件使用
    const { title, author, date } = this.props;
    return (
      <li>
        <div>
          {title}
        </div>
        <div>
          创建人：<span>{author}</span>
        </div>
        <div>
          创建时间：<span>{date}</span>
        </div>
      </li>
    );
  }
}

export default PostItem;
