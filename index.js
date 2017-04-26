module.exports = (res) => (ex) => {
    let error = process.env.NODE_ENV !== 'production' ? ex : 'An unknown error occurred';

    res.status(err.statusCode || 500).json({error});
};
