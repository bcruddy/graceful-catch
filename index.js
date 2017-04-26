module.exports = (res) => (ex) => {
    let error = process.env.NODE_ENV !== 'production' ? ex : 'An unknown error occurred';

    console.error(typeof ex === 'object' ? JSON.stringify(ex, null, 4) : ex);
    res.status(err.statusCode || 500).json({error});
};
