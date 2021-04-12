import React, { Component } from "react";

class PostItem extends Component {
  // constructor中通过this.state定义组件的初始状态，
  // 并通过调用this.setState方法改变组件状态（也是改变组件状态的唯一方式），
  // 进而组件UI也会随之重新渲染。
  constructor(props) {
    super(props);
    // 组件的state是组件内部的状态， state的变化最终将反映到组件UI的变化上。
    this.state = {
      vote: 0
    };
  }

  // 处理点赞逻辑
  handleClick() {
    let vote = this.state.vote;
    vote++;
    this.setState({
      vote: vote
    });
  }

  render() {
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
        <div>
          <button
            onClick={() => {
              this.handleClick();
            }}
          >
            点赞
          </button>
          &nbsp;
          <span>
            // 状态显示
            {this.state.vote}
          </span>
        </div>
      </li>
    );
  }
}

export default PostItem;
