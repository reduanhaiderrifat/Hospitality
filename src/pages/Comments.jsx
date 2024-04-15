import { useContext, useState } from "react";
import CommentsCard from "../components/CommentsCard";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
const Comments = () => {
  const { user } = useContext(AuthContext);
  const [comments, setComments] = useState(() => {
    const storedComments = localStorage.getItem("comments");
    return storedComments ? JSON.parse(storedComments) : [];
  });

  const [newComment, setNewComment] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment((prevComment) => ({
      ...prevComment,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));
    setNewComment({ name: "", email: "", comment: "" });
  };

  return (
    <>
      <Helmet>
        <title>Hospitality_Comments</title>
      </Helmet>
      <div className="w-full md:w-1/2 lg:w-1/2 mx-auto">
        <h2 className="text-center text-3xl font-bold my-12">
          Add your experience about our website and our property dealing
        </h2>
        <form onSubmit={handleFormSubmit}>
          <h2 className=" text-sm mb-1">
            If you login (Name and Email) are not required. You can ignor it.
          </h2>
          <div className="grid grid-cols-1 gap-5 mb-32">
            <input
              type="text"
              className="border rounded-lg border-black p-4"
              name="name"
              value={newComment.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required={!user}
            />
            <input
              type="email"
              className="border rounded-lg border-black p-4"
              name="email"
              value={newComment.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              required={!user}
            />
            <textarea
              className="border rounded-lg border-black p-4"
              rows={10}
              cols={70}
              name="comment"
              value={newComment.comment}
              onChange={handleInputChange}
              placeholder="Type your comment here..."
              required
            ></textarea>
            <button className="btn w-1/2" type="submit">
              Add Comment
            </button>
          </div>
        </form>
        <h1 className=" text-2xl font-semibold">Comments :</h1>
        <div className="border rounded-lg border-black p-2 space-y-4">
          {comments.map((comment, index) => (
            <div key={index}>
              <CommentsCard
                comment={comment.comment}
                name={comment.name}
                email={comment.email}
              ></CommentsCard>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Comments;
