import { FileUploader } from '@aws-amplify/ui-react'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

// Dynamic import of ReactQuill with loading state
const ReactQuill = dynamic(() => import('react-quill'), { 
  ssr: false,
  loading: () => <div className="border p-4 text-center">Loading editor...</div>
})

import 'react-quill/dist/quill.snow.css'
import { RecipeCreateInput, RecipeUpdateInput } from '@/src/API'

type RecipeFormProps = {
	handleFormSubmit: (recipeData: RecipeCreateInput | RecipeUpdateInput) => void
	initialValues?: {
		id: string
		title: string
		description: string
		servings: number
		coverImage: string
		ingredientsText: string
		stepsText: string
	}
}

export const RecipeForm = ({ handleFormSubmit, initialValues }: RecipeFormProps) => {
	// Add browser check inside the component
	const [isBrowser, setIsBrowser] = useState(false)
	const [fileUploadKey, setFileUploadKey] = useState<string | null>(initialValues?.coverImage || null)
	const [ingredientsValue, setIngredientsValue] = useState<String | undefined>(initialValues?.ingredientsText)
	const [instructionsValue, setInstructionsValue] = useState<String | undefined>(initialValues?.stepsText)

	// Set isBrowser to true on component mount
	useEffect(() => {
		setIsBrowser(true)
	}, [])

	const handleFileUploadSuccess = (key: string) => {
		console.log('the key', key)
		setFileUploadKey(key)
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const title = formData.get('title')?.valueOf() as string
		const description = formData.get('description')?.valueOf() as string
		const servings = Number(formData.get('servings')?.valueOf()) as number
		const ingredientsText = ingredientsValue as string
		const stepsText = instructionsValue as string
		const coverImage = fileUploadKey || 'hi-im-a-placeholder.png'

		if (
			title &&
			description &&
			servings &&
			ingredientsText &&
			stepsText &&
			coverImage
		) {
			if (initialValues?.id) {
				// If we have an ID, we're updating
				handleFormSubmit({
					id: initialValues.id,
					title,
					description,
					servings,
					ingredientsText,
					stepsText,
					coverImage,
				})
			} else {
				// Otherwise we're creating
				handleFormSubmit({
					title,
					description,
					servings,
					ingredientsText,
					stepsText,
					coverImage,
				})
			}
		}
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="form-control grid grid-cols-2 gap-4 max-w-xl m-auto mt-10"
		>
			<div className="col-span-2">
				<FileUploader
					accessLevel="public"
					acceptedFileTypes={['image/*']}
					maxFileCount={1}
					shouldAutoProceed
					onSuccess={({ key }) => handleFileUploadSuccess(key)}
				/>
				{initialValues?.coverImage && !fileUploadKey?.startsWith('hi-im-a-placeholder') && (
					<div className="mt-2 text-sm text-gray-500">
						Current image: {initialValues.coverImage}
					</div>
				)}
			</div>

			<div className="col-span-2">
				<label className="label">
					<span className="label-text">What is the title?</span>
				</label>
				<input
					type="text"
					required
					name="title"
					placeholder="My amazing recipe"
					defaultValue={initialValues?.title}
					className="input input-secondary input-bordered border-2 p-3 md:text-xl w-full"
				/>
			</div>
			<div className="col-span-2">
				<label className="label">
					<span className="label-text">Description (200 character limit)</span>
				</label>
				<textarea
					className="textarea textarea-secondary border-2 p-3 md:text-xl w-full"
					cols={30}
					rows={8}
					placeholder="This recipe is special because..."
					name="description"
					maxLength={200}
					defaultValue={initialValues?.description}
					required
				></textarea>
			</div>

			<div className="col-span-2">
				<label className="label">
					<span className="label-text">Servings</span>
				</label>
				<input
					type="text"
					required
					name="servings"
					placeholder="3"
					defaultValue={initialValues?.servings}
					className="input input-secondary input-bordered border-2 p-3 md:text-xl w-full"
				/>
			</div>

			<div className="col-span-2">
				<label className="label">
					<span className="label-text">Ingredients</span>
				</label>
				{isBrowser && (
					<ReactQuill
						className="col-span-2"
						onChange={setIngredientsValue}
						theme="snow"
						defaultValue={initialValues?.ingredientsText}
						modules={{
							toolbar: [[{ list: 'bullet' }], ['bold', 'italic', 'underline']],
						}}
					/>
				)}
			</div>

			<h2>Steps</h2>

			<div className="col-span-2">
				{isBrowser && (
					<ReactQuill
						className="col-span-2"
						onChange={setInstructionsValue}
						theme="snow"
						defaultValue={initialValues?.stepsText}
						modules={{
							toolbar: [[{ list: 'ordered' }], ['bold', 'italic', 'underline']],
						}}
					/>
				)}
			</div>
			<div className="col-span-2 text-right mb-4">
				<button
					type="submit"
					className="btn btn-secondary py-3 px-6 w-full sm:w-32"
				>
					{initialValues ? 'Update' : 'Submit'}
				</button>
			</div>
		</form>
	)
}