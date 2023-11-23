export interface IPost {
  _id: string;
  title: string;
  text?:string
  createdAt: string;
  imageUrl: string;
  user: {
    avatarUrl: string;
    fullName: string;
  };
  viewsCount: number;
  commentsCount: number;
  tags: string[];
  children?: React.ReactNode;
  isFullPost?: boolean;
  isLoading?: boolean;
  isEditable?: boolean;
};

export type Tags = {
  items: string[];
  isLoading?: boolean;
};
