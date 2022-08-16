const Home = () => {
	return (
		<div class='m-5'>
			<form action='/todo' method='POST'>
				<div class='mb-3'>
					<label for='title' class='form-label'>
						Title
					</label>
					<input
						type='text'
						class='form-control'
						name='title'
						id='title'
						placeholder='Bring Groceries'
						required
					/>
				</div>
				<div class='mb-3'>
					<label for='description' class='form-label'>
						Description
					</label>
					<textarea
						class='form-control'
						name='description'
						id='description'
						rows='3'
						placeholder='Buy milk, eggs, bread, and butter'
						required
					></textarea>
				</div>

				<button type='submit' class='btn btn-primary'>
					Submit
				</button>
			</form>

			<ul class='list-group mt-5'>
				<li class='list-group-item'>
					<form
						action='/todo/delete/<%= todo._id %>'
						method='post'
						class='mb-3'
					>
						<input
							class='form-check-input me-1'
							type='checkbox'
							onchange='this.form.submit()'
						/>
						Title
					</form>

					<form action='/todo/update/<%= todo._id %>' method='post'>
						<input
							class='form-control mb-3'
							type='text'
							placeholder='title'
							name='title'
							required
						/>
						<input
							class='form-control mb-3'
							type='text'
							placeholder='description'
							name='description'
							required
						/>
						<button type='submit' class='btn btn-primary'>
							Update
						</button>
					</form>
				</li>
			</ul>
		</div>
	);
};

export default Home;
