/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRecipeIdea = /* GraphQL */ `
  query GetRecipeIdea($ingredients: [String]!) {
    getRecipeIdea(ingredients: $ingredients)
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: String!) {
    getUser(id: $id) {
      id
      username
      email
      profilePicture
      displayName
      stripeCustomerId
      subscriptionStatus
    }
  }
`;
export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: String) {
    getRecipe(id: $id) {
      id
      title
      description
      coverImage
      ingredientsImage
      servings
      owner
      ingredients {
        items
      }
      steps {
        image
        title
        description
      }
    }
  }
`;
export const listRecipes = /* GraphQL */ `
  query ListRecipes {
    listRecipes {
      id
      title
      description
      coverImage
      ingredientsImage
      servings
      owner
      ingredients {
        items
      }
      steps {
        image
        title
        description
      }
    }
  }
`;
