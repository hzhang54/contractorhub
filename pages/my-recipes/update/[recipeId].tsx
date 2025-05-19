import Head from 'next/head'
import { View, withAuthenticator } from '@aws-amplify/ui-react'
import { useEffect, useState } from 'react'
import { RecipeForm } from '@/components/RecipeForm'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { RecipeUpdateInput } from '@/src/API'
import { API, Storage } from 'aws-amplify'
import { updateRecipe } from '@/src/graphql/mutations'
import { getRecipe } from '@/src/graphql/queries'
import { useRouter } from 'next/router'
import { GraphQLResult } from '@aws-amplify/api-graphql'
import { GetRecipeQuery, Recipe } from '@/src/API'

type UpdateRecipePageProps = {
  user: any
  signOut: () => void
}

const UpdateRecipePage = ({ user }: UpdateRecipePageProps) => {
  const [recipe, setRecipe] = useState<Recipe | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const { recipeId } = router.query

  useEffect(() => {
    async function fetchRecipe() {
      if (!recipeId) return
      
      try {
        const recipeRes = (await API.graphql({
          query: getRecipe,
          variables: {
            id: recipeId,
          },
        })) as GraphQLResult<GetRecipeQuery>
        
        if (recipeRes.errors) {
          console.log(recipeRes.errors)
        } else {
          setRecipe(recipeRes.data?.getRecipe || null)
        }
      } catch (error) {
        console.error("Error fetching recipe:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchRecipe()
  }, [recipeId])

  const handleFormSubmit = async (recipeData: RecipeUpdateInput) => {
    try {
      // Only include fields defined in RecipeUpdateInput
      const { id, title, description, servings, ingredientsText, stepsText, coverImage } = recipeData;
      
      const res = await API.graphql({
        query: updateRecipe,
        variables: {
          input: {
            id,
            title,
            description,
            servings,
            ingredientsText,
            stepsText,
            coverImage
          },
        },
      })
      
      console.log("Update successful:", res)
      router.push('/my-recipes')
    } catch (err) {
      console.error("Error updating recipe:", err)
      // Log the detailed error information
      /*
      if (err.errors) {
        console.error("GraphQL errors:", JSON.stringify(err.errors))
      } */
      if (
        typeof err === "object" &&
        err !== null &&
        "errors" in err &&
        Array.isArray((err as any).errors)
      ) {
        console.error("GraphQL errors:", JSON.stringify((err as any).errors))
      }     

    }
  }

  if (loading) {
    return (
      <>
        <Navbar isAuthPage />
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
        <Footer />
      </>
    )
  }

  if (!recipe) {
    return (
      <>
        <Navbar isAuthPage />
        <div className="flex justify-center items-center h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Recipe not found</h2>
            <button 
              className="btn btn-primary mt-4"
              onClick={() => router.push('/my-recipes')}
            >
              Back to Recipes
            </button>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Update Recipe</title>
        <meta name="description" content="Update your recipe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <View>
        <Navbar isAuthPage />
        <h1 className="text-2xl font-bold text-center mt-8">Update Recipe</h1>
        <RecipeForm 
        //  handleFormSubmit={handleFormSubmit} 
        //  handleFormSubmit={(data) => { handleFormSubmit(data); }}
          handleFormSubmit={(data) => handleFormSubmit(data as RecipeUpdateInput)}
          initialValues={{
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            servings: recipe.servings,
            coverImage: recipe.coverImage,
            ingredientsText: recipe.ingredientsText,
            stepsText: recipe.stepsText
          }}
        />
      </View>
      <Footer />
    </>
  )
}

export default withAuthenticator(UpdateRecipePage)