import { FileUploader } from '@aws-amplify/ui-react'

type RecipeFormProps = {
	handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void
	handleFileUploadSuccess: (key: string) => void
}

export const RecipeForm = ({
	handleFormSubmit,
	handleFileUploadSuccess,
}: RecipeFormProps) => {
	return (
		<form
			onSubmit={handleFormSubmit}
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
					className="input input-secondary input-bordered border-2 p-3 md:text-xl w-full"
				/>
			</div>
			<div className="col-span-2">
				<label className="label">
					<span className="label-text">Ingredients</span>
				</label>
				<textarea
					className="textarea textarea-secondary border-2 p-3 md:text-xl w-full"
					cols={30}
					rows={3}
					placeholder="1 1/2 cups of milk, 3 eggs..."
					name="ingredients"
					maxLength={200}
					required
				></textarea>
			</div>
			<h2>Steps</h2>
			<div className="col-span-2">
				<FileUploader
					accessLevel="public"
					acceptedFileTypes={['image/*']}
					maxFileCount={1}
					shouldAutoProceed
					onSuccess={({ key }) => handleFileUploadSuccess(key)}
				/>
			</div>
			<div>
				<h2>Steps</h2>
				<div className="col-span-2">
					<FileUploader
						accessLevel="public"
						acceptedFileTypes={['image/*']}
						maxFileCount={1}
						shouldAutoProceed
						onSuccess={({ key }) => handleFileUploadSuccess(key)}
					/>
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
						className="input input-secondary input-bordered border-2 p-3 md:text-xl w-full"
					/>
				</div>
				<div className="col-span-2">
					<label className="label">
						<span className="label-text">
							Description (200 character limit)
						</span>
					</label>
					<textarea
						className="textarea textarea-secondary border-2 p-3 md:text-xl w-full"
						cols={30}
						rows={8}
						placeholder="This recipe is special because..."
						name="description"
						maxLength={200}
						required
					></textarea>
				</div>
			</div>
			<div className="col-span-2 text-right">
				<button
					type="submit"
					className="btn btn-secondary py-3 px-6 w-full sm:w-32"
				>
					Button
				</button>
			</div>
		</form>
	)
}
