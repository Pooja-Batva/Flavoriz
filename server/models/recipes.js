const mongoose = require("mongoose");
const {Schema} = mongoose;

const recipeSchema = Schema(
    {
        title: { 
            type: String, 
            required: true 
        },
        description: { 
            type: String, 
            required: true 
        },
        ingredients: { 
            type: [String], 
            required: true 
        },
        instructions: { 
            type: String, 
            required: true 
        },
        user: { 
            type: Schema.Types.ObjectId, 
            ref: 'User' 
        },
    }, 
    { timestamps: true }
);

module.exports = mongoose.model("Recipe", recipeSchema);
