exports.seed = async function(knex) {
	await knex("user").insert([
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