import { apiGetTweets } from "../api";
import Avatar from "../components/Avatar";
import Layout from "../components/Layout";
import LayoutWithMenu from "../components/LayoutWithMenu";
import { useQuery } from "react-query";

export default function Home() {
  const { data } = useQuery("getTweets", apiGetTweets);
  console.log(data);
  return (
    <Layout>
      <LayoutWithMenu>
        {/* 글 목록 */}
        <div className="flex flex-col gap-5">
          {data?.data?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-full border border-neutral-300 rounded-md"
            >
              {/* 프로필 */}
              <div className="p-3">
                <Avatar size="size-10" username={item?.content} />
              </div>
              {/* 그림 */}
              <div className="w-full aspect-video bg-red-100">
                <img
                  src={item.photo}
                  alt="tweetsphoto"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* 내용 / 댓글 */}
              <div className="flex flex-col p-4">
                {/* 내용 */}
                <div className="flex flex-col">
                  {/* 내용 */}
                  <div>{item.content}</div>
                  {/* 작성날짜 */}
                  <div>{item.createdAt}</div>
                </div>
                {/* 댓글과 댓글쓰기 */}
                <div className="flex flex-col gap-2">
                  {Array(4)
                    .fill("")
                    .map((_, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <div className="flex items-center gap-4">
                          <Avatar size="size-8" />
                          <div>댓글입니다.</div>
                        </div>
                        <div>2024-04-03</div>
                      </div>
                    ))}
                  {/* 댓글쓰기 */}
                  <div>
                    <input
                      className="input-custom"
                      type="text"
                      placeholder="Add a Comment..."
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </LayoutWithMenu>
    </Layout>
  );
}
