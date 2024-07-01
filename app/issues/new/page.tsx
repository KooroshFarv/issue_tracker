"use client";


import {  TextField, Button } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios';
import { useRouter } from 'next/navigation';


interface IssueForm {
  title : string;
  description : string;
}

const NewIssuePage = () => { 
  const router = useRouter()
  const { register, control, handleSubmit } = useForm<IssueForm>()
  const onSubmit = async  ( data: IssueForm) => {
    await axios.post('../api/issues', data)
    .then(() => {
      router.push('/issues')
    })
    .catch((error) => {
      console.error(error);
    })
  }
  return (
    <form className='max-w-xl space-y-3'>
      <TextField.Root  placeholder="Title"  >
        <TextField.Slot   {...register('title')} />
      </TextField.Root>
      <Controller
      name='description'
      control={control}
      render={({field}) => <SimpleMDE placeholder='Description' {...field} />}
      />
    <Button>Submit</Button>
    </form>
  );
};

export default NewIssuePage;
