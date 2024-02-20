import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import PostActionItem from "./PostActionItem";

export default function LikePostAction() {
  return <PostActionItem icon={<ThumbUpOutlinedIcon size="small" />} count={25} />;
}
