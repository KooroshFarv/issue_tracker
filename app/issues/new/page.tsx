"use client";

import { Button, Spinner } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import { useForm } from "react-hook-form";

// const SimpleMDE = dynamic(() => import("react-simplemde-editor"));

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const { register, handleSubmit, formState } = useForm<IssueForm>();

  const isSubmitting = formState.isSubmitting;

  const onSubmit = async (data: IssueForm) => {
    // await axios.post("http://localhost:3000/api/issues", data);
    // simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 10000));
    console.log(data);
  };
  return (
    <form className="max-w-xl space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("title")}
        placeholder="Title"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        disabled={isSubmitting}
      />
      <textarea
        {...register("description")}
        placeholder="Description"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        disabled={isSubmitting}
      />
      <Button disabled={isSubmitting}>
        {isSubmitting && <Spinner className="mr-2" />}
        Submit
      </Button>
    </form>
  );
};

export default NewIssuePage;
