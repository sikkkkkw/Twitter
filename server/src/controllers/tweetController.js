import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase";
import Tweet from "../models/tweets";


//투윗 생성하기
export const createTweet = async (req, res) => {
  const {
    session: { user },
    file,
    body: { formData: content },
  } = req;

  console.log(user);

  try {
    // 1.
    // 이미지 저장(firebase firestore)
    // 저장 후 이미지 URL 받음
    if (file) {
      const locationRef = ref(storage, `tweets/${Date.now()}`);
      const metadata = {
        contentType: file.mimetype,
      };

      // 이미지 업로드
      const snapshot = await uploadBytesResumable(
        locationRef,
        file.buffer,
        metadata
      );

      // 업로드 된 url
      const url = await getDownloadURL(snapshot.ref);

      // 2.
      // mongoDB에는 이미지url, content 저장
      const data = await Tweet.create({
        content,
        writer: user.id,
        photo: url,
        createdAt: Date.now(),
      });

      // 3.
      // ok 리액트에게 result 보내줌
      res.send({ result: true, data });
    }
  } catch (error) {
    console.log(error);
  }
};
//트윗 불러오기
export const getTweets = async (req, res) => {
  try {
    const data = await Tweet.find();

    res.send({ result: true, data });
  } catch (error) {
    console.log(error);
  }
};
