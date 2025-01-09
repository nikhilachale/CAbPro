const zod = require("zod");

const review = zod.object({
  name: zod.string(),
  description: zod.string(),
  star: zod.number().int().min(1).max(5),  
});

module.exports = {
  review
};