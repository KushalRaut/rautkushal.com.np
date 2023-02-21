export type Post = {
  _id: string;
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  readingTime: string;
};

export enum Form {
  Initial,
  Loading,
  Success,
  Error,
}

export type FormState = {
  state: Form;
  message?: string;
};
