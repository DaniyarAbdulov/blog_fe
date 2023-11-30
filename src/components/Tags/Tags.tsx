import React from "react";

interface TagsProps {
  tags: string[];
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <section className="mt-10 border rounded-xl shadow-lg items-left shadow-black-300  bg-slate-50">
      <div className=" text-xs md:text-base whitespace-nowrap pt-2 pb-2 pl-1">
        {tags.map((tag, index) => (
          <p key={index}>#{tag}</p>
        ))}
      </div>
    </section>
  );
};

export default Tags;
