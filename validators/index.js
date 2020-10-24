exports.valuesValidator = (req, res, next) => {
    req.check("names", "Names are required").notEmpty();
    req.check("surnames", "Surnames are required").notEmpty();
    req.check("message", "Message is required").notEmpty();
    req.check("email", "Email must be valid")
        .matches(/.+\@.+\..+/)
        .withMessage("Email must contain @")
    req.check("password", "Password is required").noEmpty();
    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
}