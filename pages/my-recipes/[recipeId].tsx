import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

/* The content in here will be a list of recipe cards
    - Need to create the card to show the recipe
    - Need to add an overlay for editing. On the edit screen you can delete

  If updating, the user will be taken to the create screen that is prefilled with the content they want to update.

  If wanting to delete, they select one and it is deleted

  The create recipe page will be the same as #2 except the fields arempty.
*/

const RecipePage = () => {
	return (
		<>
			<Navbar />

			<Footer />
		</>
	)
}

export default RecipePage
