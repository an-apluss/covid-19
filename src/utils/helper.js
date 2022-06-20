const Helper = {
    convertToCommaSeparated:  (value) => {
        if (isNaN(value)) {
          return;
        } 
    
        return new Intl.NumberFormat('en-us').format(value);
    },

    formatDateToHumanReadable: (date) => {
        return new Date(parseInt(date));
    }

}

export default Helper;