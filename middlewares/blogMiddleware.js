import bodyParser from "body-parser";
async function checkBlog(req,res,next){

    const urlencodedParser = bodyParser.urlencoded({ extended: true });

    async function parseForm(req,res){
        return new Promise((resolve, reject) => {
            urlencodedParser(req, res, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }
    return async (req, res, next) => {
        try {
            await parseForm(req, res);
            res.locals.blog = req.body;
            next();
        } catch (error) {
            next(error);
        }
    };
}

export default checkBlog;