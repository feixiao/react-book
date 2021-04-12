import React from "react";


// 无状态组件，一般定义为函数组件，
// state用来反映组件内部状态的变化，如果一个组件的内部状态是不变的，当然就用不到state， 这样的组件称之为无状态组件
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

export default PostItem;
