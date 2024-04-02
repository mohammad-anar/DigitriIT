import empty_image from "../assets/images/empty.png"
const Blog = () => {
    return (
        <div className="min-h-[60vh] flex items-center justify-center">
            <div className="flex items-center gap-4">
                <img className="w-12" src={empty_image} alt="" />
                <h1>No blog post yet!</h1>
            </div>
        </div>
    );
};

export default Blog;