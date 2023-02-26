const db = require('./db');

function getAll() {
    const data = db.query('SELECT * FROM pantry', []);
    return data
}

function getItem(id) {
    const data = db.query('SELECT * FROM pantry WHERE itemID = ?', [id])
    return data
}

function createItem(pantryObj) {
    const result = db.run(
        'INSERT INTO pantry (ingredientID, quantity, dateAdded, dateExpiry, frozen) \
         VALUES (@ingredientID, @quantity, @dateAdded, @dateExpiry, @frozen)', pantryObj);        
    let message = 'Error in creating pantry item';
    if (result.changes) {
      message = 'Pantry item created successfully';
    } else {
        let error = new Error(message);
        error.statusCode = 400;
        throw error;
    }
    return {message:message};
}

function deleteItem(id) {
    const result = db.run(
        'DELETE FROM pantry WHERE itemID = @id', {id: id});        
    let message = 'Error deleting pantry item';
    if (result.changes) {
      message = 'Pantry item deleted successfully';
    } else {
        let error = new Error(message);
        error.statusCode = 400;
        throw error;
    }
  
    return {message:message};
}

function updateItem(id, body) {
    if (Object.keys(body).length === 0) {

        let error = new Error('Request body can\'t be blank');
        error.statusCode = 400;
        throw error;
    }
    sqlStatement = 'UPDATE pantry SET '
    for (const key in body) {
        sqlStatement = sqlStatement + key.toString() + ' = ?'
        if (key === Object.keys(body)[Object.keys(body).length - 1]) {
            sqlStatement = sqlStatement + ' ';;
        } else {
            sqlStatement = sqlStatement + ', ';
        }
    }
    sqlStatement = sqlStatement + 'WHERE itemID = ?'
    vals = Object.values(body);
    vals.push(id);
    const result = db.run(sqlStatement, vals);

    if (result.changes) {
        message = 'Pantry item updated successfully';
      } else {
          let error = new Error(message);
          error.statusCode = 400;
          throw error;
      }
    
      return {message:message};
}

module.exports = {
    getAll,
    getItem, 
    createItem, 
    deleteItem,
    updateItem
}