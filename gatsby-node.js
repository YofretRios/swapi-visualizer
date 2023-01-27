const slugify = require("slugify");
const axios = require("axios");

exports.sourceNodes = async ({ actions, createContentDigest }) => {
  const {
    data: { results },
  } = await axios.get("https://swapi.dev/api/planets");

  results.forEach((result) => {
    const { name, ...rest } = result;

    actions.createNode({
      id: slugify(name),
      slug: slugify(name, { lower: true }),
      name,
      ...rest,
      internal: {
        type: "Planets",
        contentDigest: createContentDigest(result),
      },
    });
  });
};
