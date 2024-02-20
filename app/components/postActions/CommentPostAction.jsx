import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PostActionItem from "./PostActionItem";

export default function CommentPostAction() {
  return <PostActionItem icon={<ChatBubbleOutlineOutlinedIcon size="small" />} count={34} />;
}
