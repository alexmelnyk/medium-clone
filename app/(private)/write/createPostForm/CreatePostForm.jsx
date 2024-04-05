"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FileUpload from "@/app/components/fileUpload/FileUpload";
import InputBase from "@mui/material/InputBase";
import Stack from "@mui/material/Stack";
import LoadingButton from "@mui/lab/LoadingButton";
import PublishIcon from "@mui/icons-material/Publish";
import { Editor } from "@tinymce/tinymce-react";
import { createPost } from "@/services/post";
import { showSnackBar, SnackbarProvider } from "@/utils/client";
import styles from "./createPostForm.module.scss";

export default function CreatePostForm() {
  const router = useRouter();
  const [coverImage, setCoverImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const publishDisabled = !title || !content || !coverImage;

  const handlePublish = async () => {
    setLoading(true);

    const post = {
      title,
      content,
    };
    const postRes = await createPost(coverImage, post);

    if (!postRes) {
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
