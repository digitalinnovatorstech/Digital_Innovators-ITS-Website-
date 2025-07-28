"use client";
import {

  Avatar,
  Input,
  TextInput,
} from "@mantine/core";

import { useState } from "react";

const comments = [
  {
    id: 1,
    name: "John Kumar",
    avatar: "/assets/insights/blogs/avatar.svg",
    date: "January 2, 2025 at 10:30 AM",
    text: "Great post! It's amazing how much impact good UI/UX design has on the overall user experience. The focus on simplicity and consistency really resonates with me—those small details often make all the difference.",
  },
  {
    id: 2,
    name: "Jackson",
    avatar: "/assets/insights/blogs/avatar.svg",
    date: "January 2, 2025 at 10:30 AM",
    text: "Great post! It's amazing how much impact good UI/UX design has on the overall user experience. Can't wait to see more trends like microinteractions and AR integrated into designs in the future!",
  },
];

export default function Comments() {
  const [ comment, setComment ] = useState("");
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");

  return (
    <div className="">
      <h2 className="text-xl font-medium mb-4">Comments</h2>

      {/* Comment List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4 border-b pb-4">
            <Avatar
              src={comment.avatar}
              alt={comment.name}
              radius="xl"
              size={100}
              className="rounded-full h-24 w-24"
            />

            <div>
              <div className="flex items-center gap-2">
                {" "}
                <p className="font-semibold text-sm">{comment.name}</p>
                <p className="text-gray-500 text-xs">{comment.date}</p>
              </div>

              <p className="mt-2 text-xs text-gray-700">{comment.text}</p>
              <button className="mt-2 flex  gap-4 items-center text-black font-semibold text-sm ">
                Reply{" "}
                <span>
                  <img src="/assets/next.svg" />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Comment Form */}
      <div className="mt-8 p-6 my-4 border border-[#9C9C9C] rounded-lg shadow-md">
        <h3 className="text-xl font-medium mb-4">Leave your Reply</h3>
        <div className="flex flex-col gap-8">
          <TextInput
            label="Comment"
            required
            value={comment}

            onChange={(e) => setComment(e.target.value)}
          />

          <TextInput
            label="Name"

            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextInput
            label="Email"

            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2 mt-4">
          <input type="checkbox" className="w-3 h-3" />
          <label className="text-xs text-gray-600">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>

        <div>
          <button className="bg-[#FF8C00]  text-white px-2 py-2 mt-3 rounded-md">
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
}
