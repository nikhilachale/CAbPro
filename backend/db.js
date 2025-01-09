const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://nikhilachale:h5cEFEH1DBem4DLF@nikhillearn.8tlde.mongodb.net/")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Connection Error:", err));

const reviewSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  star: { type: Number, required: true, min: 1, max: 5 },
  date: { type: Date, default: Date.now }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = {
  Review
};
