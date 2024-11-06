const BlogModel=require('../models/models')
function getblogpost(req, res){
        // res.send("Get all blog posts");
        try {
            BlogModel.find({}).then(result => {
                if(result.length > 0){
                    res.json(
                        {
                            "data": result,
                            "message": "",
                            "err": ""
                        }
                    );
                } else {
                    res.json(
                        {
                            "data": "",
                            "message": "No Blog Posts Found!",
                            "err": ""
                        }
                    );
                }
            });        
        } catch (err) {
            res.json(
                {
                    "data": "",
                    "message": "",
                    "err": err.message
                }
            );
        }
    } 

function createblogpost(req,res)
{
    // res.send("create blog post");
    try {
        let obj = req.body;
        BlogModel.find({"title": obj.title}).then(async result => {
            if(result.length > 0) {
                res.json(
                    {
                        "data": "",
                        "message": "Blog Already Exists!",
                        "err": ""
                    }
                )
            } else {
                const blogPost = new BlogModel(obj);
                await blogPost.save();
                res.json(
                    {
                        "data": "",
                        "message": "Blog Created Successfully!",
                        "err": ""
                    }
                )
            }
        });

        
    } catch(err) {
        res.json(
            {
                "data": "",
                "message": "",
                "err": err.message
            }
        );
    }
}

module.exports={
    getblogpost,
    createblogpost
}
