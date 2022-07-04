import React from 'react';
import { useForm } from "react-hook-form";
import './styles.local.css'

const AddAnnouncement = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='to-do-container'>
            <div className='container'>
                <h3 className='title'>Add New Announcement</h3>
                <form className='form' onSubmit={handleSubmit(onSubmit)}>
                    <input className='border-2 rounded-md px-5 m-2 w-96' placeholder="Book Name" {...register("name", { required: true })} />
                    <input className='border-2 rounded-md px-5 m-2 w-96' placeholder="Writer Name" {...register("writer", { required: true })} />
                    <input className='border-2 rounded-md px-5 m-2 w-96' placeholder="Already uploaded book Link"{...register("bookUrl", {
                        required: {
                            valu: true,
                            message: 'Url is Required'
                        },
                        pattern: {
                            // value: /^((ftp|http|https):\/\/)?www\.([A-z]){2,})/,
                        }
                    })} />
                    {errors.exampleRequired && <span className='mx-2'>This field is required</span>}
                    <div class="divider my-3"> or</div>
                    <input className='mx-2 mb-8 ' type="file" id="myfile" name="myfile" />

                    <input className='submit-btn' type="submit" value="Add Announcement" />
                </form>
            </div>
        </div>
    );
};

export default AddAnnouncement;