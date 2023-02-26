const db = require('./db');

function getAll() {
    const data = db.query('SELECT * FROM waste', []);
    return data
}

function getLog(id) {
    const data = db.query('SELECT * FROM waste WHERE itemID = ?', [id])
    return data
}

function createLog(wasteObj) {
    const result = db.run(
        'INSERT INTO waste (ingredientID, dateThrownAway, quantity) \
         VALUES (@ingredientID, @dateThrownAway, @quantity)', wasteObj);        
    let message = 'Error in creating waste log';
    if (result.changes) {
      message = 'Waste log created successfully';
    } else {
        let error = new Error(message);
        error.statusCode = 400;
        throw error;
    }
    return {message:message};
}

function deleteLog(id) {
    const result = db.run(
        'DELETE FROM waste WHERE itemID = @id', {id: id});        
    let message = 'Error deleting waste log';
    if (result.changes) {
      message = 'Waste log deleted successfully';
    } else {
        let error = new Error(message);
        error.statusCode = 400;
        throw error;
    }
  
    return {message:message};
}

module.exports = {
    getAll,
    getLog,
    createLog,
    
}