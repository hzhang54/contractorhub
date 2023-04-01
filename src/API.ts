/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type UserInput = {
  id: string,
  profilePicture?: string | null,
  displayName?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  email: string,
  profilePicture?: string | null,
  displayName?: string | null,
  stripeCustomerId?: string | null,
  subscriptionStatus: PLAN_STATUS_ENUM,
};

export enum PLAN_STATUS_ENUM {
  prospective = "prospective",
  trialing = "trialing",
  active = "active",
  past_due = "past_due",
  unpaid = "unpaid",
  canceled = "canceled",
}


export type RecipeCreateInput = {
  title: string,
  description: string,
  coverImage: string,
  ingredientsImage: string,
  servings: number,
  ingredients: Array< IngredientInput | null >,
  steps: Array< StepInput | null >,
};

export type IngredientInput = {
  items: Array< string | null >,
};

export type StepInput = {
  image?: string | null,
  title: string,
  description: string,
};

export type Recipe = {
  __typename: "Recipe",
  id: string,
  title: string,
  description: string,
  coverImage: string,
  ingredientsImage: string,
  servings: number,
  owner: string,
  ingredients:  Array<Ingredient | null >,
  steps:  Array<Step | null >,
};

export type Ingredient = {
  __typename: "Ingredient",
  items: Array< string | null >,
};

export type Step = {
  __typename: "Step",
  image?: string | null,
  title: string,
  description: string,
};

export type RecipeUpdateInput = {
  id: string,
  title: string,
  description: string,
  coverImage: string,
  ingredientsImage: string,
  servings: number,
  ingredients: Array< IngredientInput | null >,
  steps: Array< StepInput | null >,
};

export type UpdateUserMutationVariables = {
  input: UserInput,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    profilePicture?: string | null,
    displayName?: string | null,
    stripeCustomerId?: string | null,
    subscriptionStatus: PLAN_STATUS_ENUM,
  } | null,
};

export type CreateRecipeMutationVariables = {
  input: RecipeCreateInput,
};

export type CreateRecipeMutation = {
  createRecipe?:  {
    __typename: "Recipe",
    id: string,
    title: string,
    description: string,
    coverImage: string,
    ingredientsImage: string,
    servings: number,
    owner: string,
    ingredients:  Array< {
      __typename: "Ingredient",
      items: Array< string | null >,
    } | null >,
    steps:  Array< {
      __typename: "Step",
      image?: string | null,
      title: string,
      description: string,
    } | null >,
  } | null,
};

export type UpdateRecipeMutationVariables = {
  input: RecipeUpdateInput,
};

export type UpdateRecipeMutation = {
  updateRecipe?:  {
    __typename: "Recipe",
    id: string,
    title: string,
    description: string,
    coverImage: string,
    ingredientsImage: string,
    servings: number,
    owner: string,
    ingredients:  Array< {
      __typename: "Ingredient",
      items: Array< string | null >,
    } | null >,
    steps:  Array< {
      __typename: "Step",
      image?: string | null,
      title: string,
      description: string,
    } | null >,
  } | null,
};

export type DeleteRecipeMutationVariables = {
  id: string,
};

export type DeleteRecipeMutation = {
  deleteRecipe?:  {
    __typename: "Recipe",
    id: string,
    title: string,
    description: string,
    coverImage: string,
    ingredientsImage: string,
    servings: number,
    owner: string,
    ingredients:  Array< {
      __typename: "Ingredient",
      items: Array< string | null >,
    } | null >,
    steps:  Array< {
      __typename: "Step",
      image?: string | null,
      title: string,
      description: string,
    } | null >,
  } | null,
};

export type GetRecipeIdeaQueryVariables = {
  ingredients: Array< string | null >,
};

export type GetRecipeIdeaQuery = {
  getRecipeIdea?: string | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    profilePicture?: string | null,
    displayName?: string | null,
    stripeCustomerId?: string | null,
    subscriptionStatus: PLAN_STATUS_ENUM,
  } | null,
};

export type GetRecipeQueryVariables = {
  id?: string | null,
};

export type GetRecipeQuery = {
  getRecipe?:  {
    __typename: "Recipe",
    id: string,
    title: string,
    description: string,
    coverImage: string,
    ingredientsImage: string,
    servings: number,
    owner: string,
    ingredients:  Array< {
      __typename: "Ingredient",
      items: Array< string | null >,
    } | null >,
    steps:  Array< {
      __typename: "Step",
      image?: string | null,
      title: string,
      description: string,
    } | null >,
  } | null,
};

export type ListRecipesQuery = {
  listRecipes:  Array< {
    __typename: "Recipe",
    id: string,
    title: string,
    description: string,
    coverImage: string,
    ingredientsImage: string,
    servings: number,
    owner: string,
    ingredients:  Array< {
      __typename: "Ingredient",
      items: Array< string | null >,
    } | null >,
    steps:  Array< {
      __typename: "Step",
      image?: string | null,
      title: string,
      description: string,
    } | null >,
  } | null >,
};
