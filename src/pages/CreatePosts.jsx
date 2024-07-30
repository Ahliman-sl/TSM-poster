import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import ChoosePlatforms from "../ui/ChoosePlatforms";

const schema = yup.object().shape({
  content: yup.string().required("Post content is required"),
  hashtags: yup
    .string()
    .transform((value) => value.replace(/,\s*/g, ",")) // Aradaki fazla boşlukları temizleme
    .matches(/^#\w+(,#\w+)*$/, "Hashtags must be in format #tag1, #tag2")
    .test("maxHashtags", "You can only add up to 5 hashtags", (value) =>
      value ? value.split(",").length <= 5 : true
    ),
  docs: yup
    .mixed()
    .test("fileSize", "Each file size should be less than 20MB", (value) => {
      if (value && value.length > 0) {
        return Array.from(value).every((file) => file.size <= 20 * 1024 * 1024);
      }
      return true;
    }),
  photos: yup
    .mixed()
    .test("fileSize", "Each photo size should be less than 50MB", (value) => {
      if (value && value.length > 0) {
        return Array.from(value).every((file) => file.size <= 50 * 1024 * 1024);
      }
      return true;
    }),
  videos: yup
    .mixed()
    .test("fileSize", "Each video size should be less than 70MB", (value) => {
      if (value && value.length > 0) {
        return Array.from(value).every((file) => file.size <= 70 * 1024 * 1024);
      }
      return true;
    }),
  scheduleTime: yup.date().required("Schedule time is required"),
  platforms: yup
    .array()
    .min(1, "You must select at least one platform")
    .required("At least one platform must be selected"),
});

function CreatePosts() {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Boşlukları temizle
    data.content = data.content.trim();
    data.hashtags = data.hashtags
      .split(",")
      .map((tag) => tag.trim())
      .join(",");

    // Platformları veriye ekle
    data.platforms = selectedPlatforms;

    // Form verilerini gönderin veya işle
    return console.log("Form Data:", data);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Create New Post</h2>

      <div className="flex flex-col lg:flex-row mb-6">
        <p className="mr-4 text-lg font-medium text-gray-700">
          Choose Platform:
        </p>
        <ChoosePlatforms
          onChange={(platforms) => {
            setSelectedPlatforms(platforms);
            setValue("platforms", platforms); // setValue to trigger validation
          }}
        />
        {errors.platforms && (
          <p className="text-red-600 text-sm px-5">
            {errors.platforms.message}
          </p>
        )}
      </div>

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative">
          <textarea
            id="post-content"
            {...register("content")}
            placeholder="Post Content"
            className="peer w-full h-32 border border-gray-300 px-4 py-2 text-gray-700 placeholder-transparent focus:border-blue-500 focus:outline-none rounded-md"
          ></textarea>
          <label
            htmlFor="post-content"
            className="absolute left-4 -top-3.5 bg-white px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm"
          >
            Post Content
          </label>
          {errors.content && (
            <p className="text-red-600 text-sm">{errors.content.message}</p>
          )}
        </div>

        <div className="relative">
          <input
            id="hashtags"
            type="text"
            {...register("hashtags")}
            placeholder="Hashtags (e.g. #tag1, #tag2)"
            className="peer w-full h-12 border border-gray-300 px-4 text-gray-700 placeholder-transparent focus:border-blue-500 focus:outline-none rounded-md"
          />
          <label
            htmlFor="hashtags"
            className="absolute left-4 -top-3.5 bg-white px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm"
          >
            Hashtags (e.g. #tag1, #tag2)
          </label>
          {errors.hashtags && (
            <p className="text-red-600 text-sm">{errors.hashtags.message}</p>
          )}
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Docs
          </label>
          <input
            id="docs"
            type="file"
            {...register("docs")}
            name="docs"
            accept=".pdf,.doc,.docx"
            multiple
            className="block w-full text-gray-700 border border-gray-300 rounded-md cursor-pointer focus:outline-none"
          />
          {errors.docs && (
            <p className="text-red-600 text-sm">{errors.docs.message}</p>
          )}
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Photos
          </label>
          <input
            id="photos"
            type="file"
            {...register("photos")}
            name="photos"
            accept="image/*"
            multiple
            className="block w-full text-gray-700 border border-gray-300 rounded-md cursor-pointer focus:outline-none"
          />
          {errors.photos && (
            <p className="text-red-600 text-sm">{errors.photos.message}</p>
          )}
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Videos
          </label>
          <input
            id="videos"
            type="file"
            {...register("videos")}
            name="videos"
            accept="video/*"
            multiple
            className="block w-full text-gray-700 border border-gray-300 rounded-md cursor-pointer focus:outline-none"
          />
          {errors.videos && (
            <p className="text-red-600 text-sm">{errors.videos.message}</p>
          )}
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Schedule Time
          </label>
          <Controller
            control={control}
            name="scheduleTime"
            defaultValue=""
            render={({ field }) => (
              <input
                type="datetime-local"
                {...field}
                className="block w-full text-gray-700 border border-gray-300 rounded-md cursor-pointer focus:outline-none"
              />
            )}
          />
          {errors.scheduleTime && (
            <p className="text-red-600 text-sm">
              {errors.scheduleTime.message}
            </p>
          )}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePosts;
