import React from "react";
import { IPost } from "../../types";
import { Link } from "react-router-dom";
import SkeletonPost from "./SkeletonPost";

interface PostProps {
  post: IPost;
}

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const Post: React.FC<PostProps> = ({ post }) => {
  if ((post.isLoading = false)) {
    return <SkeletonPost />;
  }
  const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
    <button onClick={onClick}>{children}</button>
  );
  const onClickRemove = () => {};
  const formattedDate = (new Date(post.createdAt)).toISOString().split('T')[0];

  return (
    <div className="flex flex-col mt-10 border rounded-2xl pb-3 shadow-lg shadow-black-300 mr-2 ml-2 bg-slate-50 w-full">
      {post.isEditable && (
        <div className="flex justify-end mr-2">
          <Link
            to={`/posts/${post._id}/edit`}
            className="bg-primary p-2 rounded hover:scale-110"
            title="Edit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 fill-white stroke-blue-500 stroke-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </Link>
          <Button onClick={onClickRemove}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 stroke-blue-500 stroke-2 hover:scale-110"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </Button>
        </div>
      )}
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={post.title}
          className="mb-2 rounded w-full object-contain"
        />
      )}
      <div className="flex flex-col ml-2 mr-2 text-sm md:text-base">
        <div className="flex items-center mb-2">
          <img
            src={post.user.avatarUrl}
            alt={post.user.fullName}
            className=" rounded-full mr-2 w-10 h-10 object-cover"
          />
          <span>{post.user.fullName}</span>
          <span className="ml-2 text-gray-500">{formattedDate}</span>

        </div>
        <Link
          to={`/posts/${post._id}`}
          className="font-bold mb-2 text-sm md:text-xl"
        >
          {post.title}
        </Link>
        <ul className="flex space-x-2 mb-2">
          {post.tags.map((name) => (
            <li key={name}>
              <Link to={`/tag/${name}`} className="text-blue-500">
                #{name}
              </Link>
            </li>
          ))}
        </ul>
        {post.children && <div>{post.children}</div>}
        <ul className="flex space-x-2">
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <span className="ml-1">{post.viewsCount}</span>
          </li>
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>

            <span className="ml-1">{post.commentsCount}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Post;
