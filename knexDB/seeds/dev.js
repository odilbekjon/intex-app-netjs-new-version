/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
// truncate all existing table
// await knex.raw('TRUNCATE TABLE "chanel" CASCADE')

await knex('channel').insert([
  {
    id:1,
    name:"chanel1"
  },
  {
    id:2,
    name:"chanel2"
  } ]);
};
