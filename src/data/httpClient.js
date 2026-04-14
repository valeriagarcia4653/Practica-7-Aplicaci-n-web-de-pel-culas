const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWU5MmM5MjY1MDcxZDgyZTNiOTUzMjkzY2JhMmE2NCIsIm5iZiI6MTc3NTY4ODUyMS4yMywic3ViIjoiNjlkNmRiNDk5M2I1YWE1ZWE4OWZhMWVkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.yBxrH4CiGhaIq3Ck6m-hkCM94IFCosruZogpTHFo-6Y",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}