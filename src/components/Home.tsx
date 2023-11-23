import React, { useEffect } from "react";
import Post from "./Post/Post";
import { fetchPosts, fetchTags } from "../redux/slices/posts";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import SkeletonPost from "./Post/SkeletonPost";

const Home = () => {
  const dispatch = useAppDispatch();
  const postsStatus = useAppSelector((state) => state.posts.posts.status);
  const postsItems = useAppSelector((state) => state.posts.posts.items);
  const tagsStatus = useAppSelector((state) => state.posts.tags.status);
  const tagsItems = useAppSelector((state) => state.posts.tags.items);

  const isPostsLoading = postsStatus === "loading";

  useEffect(() => {
    if (postsStatus === "loading") {
      dispatch(fetchPosts());
      dispatch(fetchTags());
    }
  }, [dispatch, postsStatus]);

  return (
    <div className=" flex flex-col justify-center items-center mr-2 ml-2 gap-7">
      {(isPostsLoading ? [...Array(5)] : postsItems).map((obj, index) =>
        isPostsLoading ? (
          <SkeletonPost key={index} />
        ) : (
          <Post
            key={obj._id}
            post={{
              _id: obj._id,
              title: obj.title,
              imageUrl: obj.imageUrl,
              user: {
                avatarUrl: obj.user.avatarUrl,
                fullName: obj.user.fullName,
              },
              createdAt: obj.createdAt,
              viewsCount: obj.viewsCount,
              commentsCount: 3,
              tags: obj.tags,
              isEditable: true,
            }}
          />
        )
      )}
    </div>
  );
};

export default Home;
