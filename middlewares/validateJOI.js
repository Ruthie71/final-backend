const validateJOI = schema => (req, res, next) => {
    const { error } = schema.validate(req.body);
    console.log(req.body)
    if (error) return res.status(400).json(error);
    
    next();
  };

export default validateJOI;