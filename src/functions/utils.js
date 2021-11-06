module.exports = {
    validateModel(model){
        errors = model.validateSync();

        if(errors == null) return null;
    
        errorArray = []
        for (let key in errors.errors) {
            msg = `${key}: ${errors.errors[key].message}`;
            errorArray.push(msg);
        }
        return errorArray;
    }
}