import React from "react";
import PropTypes from 'prop-types';

function PostItem(props) {
  const handleClick = () => {
    props.onVote(props.post.id);
  };
  const { post } = props;
  return (
    <li>
      <div>
        {post.title}
      </div>
      <div>
        创建人：<span>{post.author}</span>
      </div>
      <div>
        创建时间：<span>{post.date}</span>
      </div>
      <div>
        <button onClick={handleClick}>点赞</button>
        &nbsp;
        <span>{post.vote}</span>
      </div>
    </li>
  );
}


// 组件内部并没有明显地声明它暴露出哪些接口， 以及这些接口的类型是什么， 这不利于组件的复用
// PropTypes包含组件属性所有可能的类型
PostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    vote: PropTypes.number
  }).isRequired,
  onVote: PropTypes.func.isRequired   // 如果属性是组件的必需属性， 也就是当使用某个组件时， 必须传入的属性， 就需要在PropTypes的类型属性上调用isRequired
}

// 注意：
// 当使用PropTypes.object或PropTypes.array校验属性类型时， 我们只知道这个属性是一个对象或一个数组， 至于对象的结构或数组元素的类型是什么样的， 依然无从得知。
// 这种情况下， 更好的做法是使用PropTypes.shape或PropTypes.arrayOf

export default PostItem;
