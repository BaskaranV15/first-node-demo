function getblogpost(req, res){
        res.send("Get all blog posts");
    } 

function createblogPost(req,res)
{
    res.send("create blog post");
}

module.exports={
    getblogpost,
    createblogPost
}
