import React from "react";
import Post from "./Post/Post";

const Home = () => {
  return (
    <div className=" flex flex-col justify-center items-center mr-2 ml-2 gap-7">
      {[...Array(5)].map((_, index) => (
        <Post 
          key={index}
          post={{
            _id: "123123sadasdasd",
            title: "Roast the code #1 | Rock Paper Scissors",
            imageUrl:
              "https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png",
            user: {
              avatarUrl:
                "https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png",
              fullName: "Keff",
            },
            createdAt: "12 июня 2022 г.",
            viewsCount: 150,
            commentsCount: 3,
            tags: ["react", "fun", "typescript"],
            isEditable: true,
          }}
        />
      ))}
    </div>
  );
};

export default Home;
