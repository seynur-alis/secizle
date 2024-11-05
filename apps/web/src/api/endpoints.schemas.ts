/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * Plotwist
 * OpenAPI spec version: 0.1.0
 */
/**
 * User not found
 */
export type PostReviewsCreate404 = {
  message: string;
};

/**
 * @nullable
 */
export type PostReviewsCreate201ReviewMediaType = typeof PostReviewsCreate201ReviewMediaType[keyof typeof PostReviewsCreate201ReviewMediaType] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostReviewsCreate201ReviewMediaType = {
  TV_SHOW: 'TV_SHOW',
  MOVIE: 'MOVIE',
} as const;

/**
 * @nullable
 */
export type PostReviewsCreate201ReviewLanguage = typeof PostReviewsCreate201ReviewLanguage[keyof typeof PostReviewsCreate201ReviewLanguage] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostReviewsCreate201ReviewLanguage = {
  'en-US': 'en-US',
  'es-ES': 'es-ES',
  'fr-FR': 'fr-FR',
  'it-IT': 'it-IT',
  'de-DE': 'de-DE',
  'pt-BR': 'pt-BR',
  'ja-JP': 'ja-JP',
} as const;

export type PostReviewsCreate201Review = {
  createdAt?: string;
  /** @nullable */
  hasSpoilers?: boolean | null;
  id?: string;
  /** @nullable */
  language?: PostReviewsCreate201ReviewLanguage;
  /** @nullable */
  mediaType?: PostReviewsCreate201ReviewMediaType;
  rating: number;
  review: string;
  /** @nullable */
  tmdbId?: number | null;
  /** @nullable */
  tmdbOverview?: string | null;
  /** @nullable */
  tmdbPosterPath?: string | null;
  /** @nullable */
  tmdbTitle?: string | null;
  userId: string;
};

/**
 * Review created.
 */
export type PostReviewsCreate201 = {
  review: PostReviewsCreate201Review;
};

export type PostReviewsCreateBodyMediaType = typeof PostReviewsCreateBodyMediaType[keyof typeof PostReviewsCreateBodyMediaType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostReviewsCreateBodyMediaType = {
  TV_SHOW: 'TV_SHOW',
  MOVIE: 'MOVIE',
} as const;

export type PostReviewsCreateBodyLanguage = typeof PostReviewsCreateBodyLanguage[keyof typeof PostReviewsCreateBodyLanguage];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostReviewsCreateBodyLanguage = {
  'en-US': 'en-US',
  'es-ES': 'es-ES',
  'fr-FR': 'fr-FR',
  'it-IT': 'it-IT',
  'de-DE': 'de-DE',
  'pt-BR': 'pt-BR',
  'ja-JP': 'ja-JP',
} as const;

export type PostReviewsCreateBody = {
  hasSpoilers?: boolean;
  language: PostReviewsCreateBodyLanguage;
  mediaType: PostReviewsCreateBodyMediaType;
  rating: number;
  review: string;
  tmdbId?: number;
  tmdbOverview?: string;
  tmdbPosterPath?: string;
  tmdbTitle?: string;
  userId: string;
};

/**
 * Invalid email or password.
 */
export type PostLogin400 = {
  message: string;
};

/**
 * @nullable
 */
export type PostLogin200UserSubscriptionType = typeof PostLogin200UserSubscriptionType[keyof typeof PostLogin200UserSubscriptionType] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostLogin200UserSubscriptionType = {
  MEMBER: 'MEMBER',
  PRO: 'PRO',
} as const;

export type PostLogin200User = {
  /** @nullable */
  bannerPath: string | null;
  /** @nullable */
  createdAt: string | null;
  email: string;
  id: string;
  /** @nullable */
  imagePath: string | null;
  /** @nullable */
  subscriptionType: PostLogin200UserSubscriptionType;
  username: string;
};

export type PostLogin200 = {
  token: string;
  user: PostLogin200User;
};

export type PostLoginBody = {
  email: string;
  /** @minLength 8 */
  password?: string;
};

/**
 * @nullable
 */
export type DeleteListItemId200ListItemsItemMediaType = typeof DeleteListItemId200ListItemsItemMediaType[keyof typeof DeleteListItemId200ListItemsItemMediaType] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const DeleteListItemId200ListItemsItemMediaType = {
  TV_SHOW: 'TV_SHOW',
  MOVIE: 'MOVIE',
} as const;

export type DeleteListItemId200ListItemsItem = {
  createdAt: string;
  id: string;
  listId: string;
  /** @nullable */
  mediaType: DeleteListItemId200ListItemsItemMediaType;
  overview: string;
  /** @nullable */
  posterPath: string | null;
  title: string;
  /** @nullable */
  tmdbId: number | null;
};

export type DeleteListItemId200 = {
  listItems: DeleteListItemId200ListItemsItem[];
};

/**
 * @nullable
 */
export type GetListItemsByListId200ListItemsItemMediaType = typeof GetListItemsByListId200ListItemsItemMediaType[keyof typeof GetListItemsByListId200ListItemsItemMediaType] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetListItemsByListId200ListItemsItemMediaType = {
  TV_SHOW: 'TV_SHOW',
  MOVIE: 'MOVIE',
} as const;

export type GetListItemsByListId200ListItemsItem = {
  createdAt: string;
  id: string;
  listId: string;
  /** @nullable */
  mediaType: GetListItemsByListId200ListItemsItemMediaType;
  overview: string;
  /** @nullable */
  posterPath: string | null;
  title: string;
  /** @nullable */
  tmdbId: number | null;
};

export type GetListItemsByListId200 = {
  listItems: GetListItemsByListId200ListItemsItem[];
};

/**
 * @nullable
 */
export type PostListItem201ListItemMediaType = typeof PostListItem201ListItemMediaType[keyof typeof PostListItem201ListItemMediaType] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostListItem201ListItemMediaType = {
  TV_SHOW: 'TV_SHOW',
  MOVIE: 'MOVIE',
} as const;

export type PostListItem201ListItem = {
  createdAt: string;
  id: string;
  listId: string;
  /** @nullable */
  mediaType: PostListItem201ListItemMediaType;
  overview: string;
  /** @nullable */
  posterPath: string | null;
  title: string;
  /** @nullable */
  tmdbId: number | null;
};

export type PostListItem201 = {
  listItem: PostListItem201ListItem;
};

/**
 * @nullable
 */
export type PostListItemBodyMediaType = typeof PostListItemBodyMediaType[keyof typeof PostListItemBodyMediaType] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostListItemBodyMediaType = {
  TV_SHOW: 'TV_SHOW',
  MOVIE: 'MOVIE',
} as const;

export type PostListItemBody = {
  listId: string;
  /** @nullable */
  mediaType?: PostListItemBodyMediaType;
  overview: string;
  /** @nullable */
  posterPath?: string | null;
  title: string;
  /** @nullable */
  tmdbId?: number | null;
};

/**
 * List not found.
 */
export type GetListById404 = {
  message: string;
};

export type GetListById200ListVisibility = typeof GetListById200ListVisibility[keyof typeof GetListById200ListVisibility];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetListById200ListVisibility = {
  PUBLIC: 'PUBLIC',
  NETWORK: 'NETWORK',
  PRIVATE: 'PRIVATE',
} as const;

export type GetListById200List = {
  /** @nullable */
  coverPath: string | null;
  createdAt: string;
  /** @nullable */
  description: string | null;
  id: string;
  title: string;
  userId: string;
  visibility: GetListById200ListVisibility;
};

export type GetListById200 = {
  list: GetListById200List;
};

/**
 * List not found.
 */
export type PutListId404 = {
  message: string;
};

export type PutListId200ListVisibility = typeof PutListId200ListVisibility[keyof typeof PutListId200ListVisibility];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PutListId200ListVisibility = {
  PUBLIC: 'PUBLIC',
  NETWORK: 'NETWORK',
  PRIVATE: 'PRIVATE',
} as const;

export type PutListId200List = {
  /** @nullable */
  coverPath: string | null;
  createdAt: string;
  /** @nullable */
  description: string | null;
  id: string;
  title: string;
  userId: string;
  visibility: PutListId200ListVisibility;
};

export type PutListId200 = {
  list: PutListId200List;
};

export type PutListIdBodyVisibility = typeof PutListIdBodyVisibility[keyof typeof PutListIdBodyVisibility];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PutListIdBodyVisibility = {
  PUBLIC: 'PUBLIC',
  NETWORK: 'NETWORK',
  PRIVATE: 'PRIVATE',
} as const;

export type PutListIdBody = {
  /** @nullable */
  description?: string | null;
  title: string;
  visibility: PutListIdBodyVisibility;
};

/**
 * List not found.
 */
export type DeleteListId404 = {
  message: string;
};

/**
 * @nullable
 */
export type DeleteListId204 = typeof DeleteListId204[keyof typeof DeleteListId204] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const DeleteListId204 = {
  null: 'null',
} as const;

export type GetLists404 = {
  message: string;
};

export type GetLists200ListsItemVisibility = typeof GetLists200ListsItemVisibility[keyof typeof GetLists200ListsItemVisibility];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetLists200ListsItemVisibility = {
  PUBLIC: 'PUBLIC',
  NETWORK: 'NETWORK',
  PRIVATE: 'PRIVATE',
} as const;

export type GetLists200ListsItemUser = {
  id: string;
  /** @nullable */
  imagePath: string | null;
  username: string;
};

/**
 * @nullable
 */
export type GetLists200ListsItemItemsItemMediaType = typeof GetLists200ListsItemItemsItemMediaType[keyof typeof GetLists200ListsItemItemsItemMediaType] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetLists200ListsItemItemsItemMediaType = {
  TV_SHOW: 'TV_SHOW',
  MOVIE: 'MOVIE',
} as const;

export type GetLists200ListsItemItemsItem = {
  id: string;
  /** @nullable */
  mediaType: GetLists200ListsItemItemsItemMediaType;
  /** @nullable */
  tmdbId: number | null;
};

export type GetLists200ListsItem = {
  /** @nullable */
  coverPath: string | null;
  createdAt: string;
  /** @nullable */
  description: string | null;
  hasLiked: boolean;
  id: string;
  items: GetLists200ListsItemItemsItem[];
  likeCount: number;
  title: string;
  user: GetLists200ListsItemUser;
  userId: string;
  visibility: GetLists200ListsItemVisibility;
};

export type GetLists200 = {
  lists: GetLists200ListsItem[];
};

export type GetListsParams = {
userId?: string;
limit?: number;
};

/**
 * User not found
 */
export type PostList404 = {
  message: string;
};

export type PostList201ListVisibility = typeof PostList201ListVisibility[keyof typeof PostList201ListVisibility];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostList201ListVisibility = {
  PUBLIC: 'PUBLIC',
  NETWORK: 'NETWORK',
  PRIVATE: 'PRIVATE',
} as const;

export type PostList201List = {
  /** @nullable */
  coverPath: string | null;
  createdAt: string;
  /** @nullable */
  description: string | null;
  id: string;
  title: string;
  userId: string;
  visibility: PostList201ListVisibility;
};

/**
 * List created.
 */
export type PostList201 = {
  list: PostList201List;
};

export type PostListBodyVisibility = typeof PostListBodyVisibility[keyof typeof PostListBodyVisibility];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostListBodyVisibility = {
  PUBLIC: 'PUBLIC',
  NETWORK: 'NETWORK',
  PRIVATE: 'PRIVATE',
} as const;

export type PostListBody = {
  /** @nullable */
  description?: string | null;
  title: string;
  visibility: PostListBodyVisibility;
};

/**
 * Fail to hash password.
 */
export type GetUserById500 = {
  message: string;
};

/**
 * Email or username is already registered.
 */
export type GetUserById409 = {
  message: string;
};

/**
 * @nullable
 */
export type GetUserById201UserSubscriptionType = typeof GetUserById201UserSubscriptionType[keyof typeof GetUserById201UserSubscriptionType] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetUserById201UserSubscriptionType = {
  MEMBER: 'MEMBER',
  PRO: 'PRO',
} as const;

export type GetUserById201User = {
  /** @nullable */
  bannerPath?: string | null;
  /** @nullable */
  createdAt?: string | null;
  email: string;
  id?: string;
  /** @nullable */
  imagePath?: string | null;
  /** @nullable */
  subscriptionType?: GetUserById201UserSubscriptionType;
  username: string;
};

/**
 * User created.
 */
export type GetUserById201 = {
  user: GetUserById201User;
};

/**
 * @nullable
 */
export type GetUsersUsername200UserSubscriptionType = typeof GetUsersUsername200UserSubscriptionType[keyof typeof GetUsersUsername200UserSubscriptionType] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetUsersUsername200UserSubscriptionType = {
  MEMBER: 'MEMBER',
  PRO: 'PRO',
} as const;

export type GetUsersUsername200User = {
  /** @nullable */
  bannerPath: string | null;
  /** @nullable */
  createdAt: string | null;
  email: string;
  id: string;
  /** @nullable */
  imagePath: string | null;
  /** @nullable */
  subscriptionType: GetUsersUsername200UserSubscriptionType;
  username: string;
};

export type GetUsersUsername200 = {
  user: GetUsersUsername200User;
};

/**
 * Email is already registered.
 */
export type GetUsersCheckEmail409 = {
  message: string;
};

export type GetUsersCheckEmail200 = {
  available: boolean;
};

export type GetUsersCheckEmailParams = {
email: string;
};

/**
 * Username is already registered.
 */
export type GetUsersAvailableUsername409 = {
  message: string;
};

export type GetUsersAvailableUsername200 = {
  available: boolean;
};

export type GetUsersAvailableUsernameParams = {
username: string;
};

/**
 * Fail to hash password.
 */
export type PostUsersCreate500 = {
  message: string;
};

/**
 * Email or username is already registered.
 */
export type PostUsersCreate409 = {
  message: string;
};

/**
 * @nullable
 */
export type PostUsersCreate201UserSubscriptionType = typeof PostUsersCreate201UserSubscriptionType[keyof typeof PostUsersCreate201UserSubscriptionType] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostUsersCreate201UserSubscriptionType = {
  MEMBER: 'MEMBER',
  PRO: 'PRO',
} as const;

export type PostUsersCreate201User = {
  /** @nullable */
  bannerPath?: string | null;
  /** @nullable */
  createdAt?: string | null;
  email: string;
  id?: string;
  /** @nullable */
  imagePath?: string | null;
  /** @nullable */
  subscriptionType?: PostUsersCreate201UserSubscriptionType;
  username: string;
};

/**
 * User created.
 */
export type PostUsersCreate201 = {
  user: PostUsersCreate201User;
};

export type PostUsersCreateBody = {
  email: string;
  /** @minLength 8 */
  password: string;
  /** @minLength 3 */
  username: string;
};

