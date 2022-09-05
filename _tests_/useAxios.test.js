import { renderHook } from "@testing-library/react-hooks";
import useAxios from "../utils/useAxios";
import { fetchData } from "../utils/Api";

describe("fetchData", () => {
  test("should return an object", async () => {
    // const { result } = await renderHook(() => {
    //   useAxios({ url: "/id/0/info" });
    // });
    const res = await fetchData({ url: "/id/0/info" });
    console.log(res);
    const expected = {
      id: "0",
      author: "Alejandro Escamilla",
      width: 5616,
      height: 3744,
      url: "https://unsplash.com/photos/yC-Yzbqy7PY",
      download_url: "https://picsum.photos/id/0/5616/3744",
    };
    expect(res.result).toMatchSnapshot();
    expect(res.result).toEqual(expected);
  });
  test("should return an array of 30 in length", async () => {
    const res = await fetchData({ url: `/v2/list` });

    const expected = 30;
    expect(res.result).toHaveLength(expected);
  });
  test("Objects in array should have certain properties", async () => {
    const res = await fetchData({ url: `/v2/list` });
    res.result.forEach((item) => {
      expect(item).toHaveProperty("id");
      expect(item).toHaveProperty("author");
      expect(item).toHaveProperty("width");
      expect(item).toHaveProperty("height");
      expect(item).toHaveProperty("url");
      expect(item).toHaveProperty("download_url");
    });
  });
});
