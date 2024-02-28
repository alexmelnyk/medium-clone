"use client";

import { useState } from "react";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { useRouter } from "next/navigation";
import FileUpload from "@/app/components/fileUpload/FileUpload";
import InputBase from "@mui/material/InputBase";
import Stack from "@mui/material/Stack";
import LoadingButton from "@mui/lab/LoadingButton";
import PublishIcon from "@mui/icons-material/Publish";
import { Editor } from "@tinymce/tinymce-react";
import styles from "./createPostForm.module.scss";

const showSnackBar = (message, variant) => {
  enqueueSnackbar(message, {
    variant,
    autoHideDuration: 4000,
    anchorOrigin: { vertical: "top", horizontal: "right" },
  });
};

const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append("file", image);

  return await fetch("/api/uploadImage", {
    method: "POST",
    body: formData,
  });
};

const createPost = async (post) => {
  return await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify(post),
  });
};

export default function CreatePostForm({ user }) {
  const router = useRouter();
  const [coverImage, setCoverImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const publishDisabled = !title || !content || !coverImage;

  const handlePublish = async () => {
    setLoading(true);
    const imageRes = await uploadImage(coverImage);

    if (!imageRes.ok) {
      showSnackBar("Post is not saved!", "error");
      setLoading(false);
      return;
    }

    const image = await imageRes.json();
    const post = {
      title,
      content,
      coverImage: image.url,
      userId: user.id,
    };

    const createPostRes = await createPost(post);

    if (!createPostRes.ok) {
      showSnackBar("Post is not saved!", "error");
      setLoading(false);
      return;
    }

    router.push("/feed");
  };

  return (
    <SnackbarProvider>
      <Stack direction="column" spacing={2}>
        <InputBase
          placeholder="Title"
          className={styles.title}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <FileUpload className={styles.fileUpload} onChange={setCoverImage} />
        <Editor apiKey="22daebe3fhdtvqawhbwntne4wdu4t27h1rlzpccmox07amln" onEditorChange={setContent} />
        <LoadingButton
          disabled={publishDisabled}
          loading={loading}
          loadingPosition="start"
          startIcon={<PublishIcon />}
          variant="outlined"
          className={styles.publish}
          onClick={handlePublish}
        >
          Publish
        </LoadingButton>
      </Stack>
    </SnackbarProvider>
  );
}
