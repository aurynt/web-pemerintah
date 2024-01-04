import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function App({ props }: { props: HTMLInputElement }) {
    const editorRef = useRef<any>(null);
    return (
        <Editor
            // {...props}
            onChange={(content: string, editor: any) => console.log(content)}
            apiKey="e3kncuvyyxcr3sw5vualnr9ueee3y6914xjf87hrxmvvlqs6"
            onInit={(evt, editor) => (editorRef.current = editor)}
            init={{
                height: 500,
                menubar: false,
                plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                ],
                toolbar:
                    "undo redo | blocks | " +
                    "bold italic forecolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
        />
    );
}
