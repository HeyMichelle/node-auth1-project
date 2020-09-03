exports.seed = async function(knex) {
	await knex("users").insert([
		{
      id: 1,
			username: "Jane Doe",
			password: "password123",
    },
    {
      id: 2,
			username: "John Doe",
			password: "abc123",
		},
	]);
};