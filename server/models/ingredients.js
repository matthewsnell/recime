const db = require('./db');

function getAll() {
    const data = db.query('SELECT * FROM ingredients', []);
    return data;
}

function createIngredient(ingredientObj) {
    const result = db.run('INSERT INTO ingredients (name, standardUnit, carbonPerUnit) VALUES \
    (@name, @standardUnit, @carbonPerUnit)', ingredientObj);
    let message = 'Error in creating ingredient';
    if (result.changes) {
      message = 'Ingredient created successfully';
    } else {
        let error = new Error(message);
        error.statusCode = 400;
        throw error;
    }
    return {message:message};
}

function deleteIngredient(id) {
    const result = db.run(
        'DELETE FROM ingredients WHERE ingredientID = @id', {id: id});        
    let message = 'Error deleting ingredient';
    if (result.changes) {
      message = 'ingredient deleted successfully';
    } else {
        let error = new Error(message);
        error.statusCode = 400;
        throw error;
    }
  
    return {message:message};
}

module.exports = {
    getAll, 
    createIngredient,
    deleteIngredient
}