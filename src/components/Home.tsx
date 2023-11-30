import React, { useEffect } from "react";
import Post from "./Post/Post";
import { fetchPosts } from "../redux/slices/posts";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import SkeletonPost from "./Post/SkeletonPost";
import { fetchTags } from "../redux/slices/tags";
import Tags from "./Tags/Tags";

const Home = () => {
  const dispatch = useAppDispatch();
  const postsStatus = useAppSelector((state) => state.posts.posts.status);
  const postsItems = useAppSelector((state) => state.posts.posts.items);
  const tagsStatus = useAppSelector((state) => state.tags.tags.status);
  const tagsItems = useAppSelector((state) => state.tags.tags.items);

  const isPostsLoading = postsStatus === "loading";

  useEffect(() => {
    if (postsStatus === "loading") {
      dispatch(fetchPosts());
      dispatch(fetchTags());
    }
  }, [dispatch, postsStatus]);

  return (
    <div className=" grid grid-cols-4  mr-2 ml-2 gap-7">
      <div className=" col-span-3">
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
      <div className=" col-span-1">
        {tagsStatus === "loading" ? (
          <p>Loading tags...</p>
        ) : tagsItems.length === 0 ? (
          <p>No tags available</p>
        ) : (
          <Tags tags={tagsItems.flat()} />
        )}
      </div>
    </div>
  );
};

export default Home;
