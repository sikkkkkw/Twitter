import { IoPersonSharp } from "react-icons/io5";

export default function Avatar({ size, hidden,username }) {
  return (
    <div className="flex gap-2 items-center">
      {/* 이미지 */}
      <div
        className={`${size} bg-neutral-300 rounded-full text-white flex justify-center items-center`}
      >
        <IoPersonSharp size={20} />
      </div>
      {/* 아이디 */}
      {hidden === "true" ? null : <div>{username}</div>}
    </div>
  );
}
